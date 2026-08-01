import React, { useState } from 'react';
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';
import { LocateFixed, MapPin, Users } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

import { usersApi } from '../services/api';
import { getSession } from '../services/authSession';

const INDIA_CENTER = [20.5937, 78.9629];

function RecenterMap({ center, zoom = 4 }) {
  const map = useMap();
  React.useEffect(() => {
    map.flyTo(center, zoom, { duration: 0.8 });
  }, [center, zoom, map]);
  return null;
}

export default function GlobalMap() {
  const [center, setCenter] = useState(INDIA_CENTER);
  const [zoom, setZoom] = useState(4);
  // userLocation = { latitude, longitude } | null
  const [userLocation, setUserLocation] = useState(null);
  // realNearby = real users from the API (never synthetic)
  const [realNearby, setRealNearby] = useState([]);
  const [isFinding, setIsFinding] = useState(false);
  const [message, setMessage] = useState('Click "Show my location" to pin yourself on the map.');

  const locateMe = async (latitude, longitude) => {
    setCenter([latitude, longitude]);
    setUserLocation({ latitude, longitude });

    // Optionally update location on backend and fetch real nearby users
    try {
      if (getSession()) {
        await usersApi.updateMyLocation({ latitude, longitude });
        const people = await usersApi.getNearby({ latitude, longitude, limit: 10 });
        if (Array.isArray(people) && people.length > 0) {
          setRealNearby(
            people.map((p) => ({ ...p, distance_km: Number(p.distance_km ?? 0) }))
          );
          setMessage(`Your location is pinned. Found ${people.length} real teammate${people.length !== 1 ? 's' : ''} nearby. 📍`);
          return;
        }
      }
    } catch (_) {
      // silently ignore API errors
    }

    setRealNearby([]);
    setMessage('Your location is pinned on the map. 📍');
  };

  const findLocation = () => {
    if (!navigator.geolocation) {
      setMessage('Location services are not supported by your browser.');
      return;
    }

    setIsFinding(true);
    setMessage('Detecting your location…');

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          await locateMe(coords.latitude, coords.longitude);
          setZoom(13);
        } finally {
          setIsFinding(false);
        }
      },
      () => {
        setIsFinding(false);
        setMessage('Location access was denied. Please allow location access and try again.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  };

  return (
    <section id="global-map" className="py-10">
      <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <Users className="h-5 w-5 text-indigo-600" /> My Location
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{message}</p>
        </div>
        <button
          onClick={findLocation}
          disabled={isFinding}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-xs font-bold text-white shadow-md transition hover:from-indigo-700 hover:to-purple-700 disabled:cursor-wait disabled:opacity-70"
        >
          <LocateFixed className="h-4 w-4" />
          {isFinding ? 'Locating…' : userLocation ? 'Re-pin my location' : 'Show my location'}
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl dark:border-slate-800">
        <MapContainer center={center} zoom={4} scrollWheelZoom className="h-[520px] w-full">
          <RecenterMap center={center} zoom={zoom} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* You are here marker */}
          {userLocation && (
            <CircleMarker
              center={[userLocation.latitude, userLocation.longitude]}
              radius={12}
              pathOptions={{ color: '#059669', fillColor: '#10b981', fillOpacity: 0.95, weight: 2.5 }}
            >
              <Popup>
                <strong>📍 You are here</strong>
              </Popup>
            </CircleMarker>
          )}

          {/* Real nearby teammates from the API (only shown when logged in and API returns results) */}
          {realNearby.map((person) => (
            <CircleMarker
              key={person.id}
              center={[person.latitude, person.longitude]}
              radius={10}
              pathOptions={{ color: '#4f46e5', fillColor: '#8b5cf6', fillOpacity: 0.85, weight: 2 }}
            >
              <Popup>
                <div className="min-w-48 space-y-1.5 p-1">
                  <strong>{person.full_name}</strong>
                  <p>{person.specialization || person.role}</p>
                  <p className="text-slate-600">{person.city}{person.country ? `, ${person.country}` : ''}</p>
                  <p><b>{Number(person.distance_km || 0).toLocaleString()} km away</b></p>
                  <div>
                    {(person.skills || []).slice(0, 4).map((skill) => (
                      <span key={skill} className="mr-1 inline-block rounded bg-indigo-50 px-1.5 py-0.5 text-xs text-indigo-700">{skill}</span>
                    ))}
                  </div>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>

      {/* Real nearby teammate cards (only when API returns real users) */}
      {realNearby.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {realNearby.map((person) => (
            <div key={person.id} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{person.full_name}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-300">{person.specialization || person.role}</p>
                </div>
                <MapPin className="h-4 w-4 shrink-0 text-rose-500" />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {person.city || 'Location shared'} · {Number(person.distance_km || 0).toLocaleString()} km
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
