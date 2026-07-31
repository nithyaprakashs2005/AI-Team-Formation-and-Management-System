import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, Award, Video, Shield } from 'lucide-react';

export default function BookMentorModal({ isOpen, onClose, mentorName = 'David K. Miller', mentorCompany = 'Microsoft' }) {
  const [selectedSlot, setSelectedSlot] = useState('Tomorrow, 4:00 PM EST');
  const [booked, setBooked] = useState(false);

  if (!isOpen) return null;

  const slots = [
    'Today, 6:00 PM EST',
    'Tomorrow, 4:00 PM EST',
    'Thursday, 2:00 PM EST',
    'Saturday, 11:00 AM EST'
  ];

  const handleConfirm = (e) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-lg rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden text-slate-900 dark:text-slate-100 space-y-6"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {booked ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border border-emerald-200 dark:border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Mentorship Session Confirmed!</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Calendar invite sent to your email. Meeting link with {mentorName} ({mentorCompany}) is ready.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Book 1-on-1 Session</h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{mentorName} • <span className="text-slate-600 dark:text-slate-300">{mentorCompany}</span></p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block">Select Available Time Slot:</label>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all cursor-pointer ${
                      selectedSlot === slot
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                        : 'bg-slate-50 dark:bg-slate-950/70 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <span>{slot}</span>
                    <Clock className="w-3.5 h-3.5" />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold">
                <Video className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>30-Minute Video Consultation</span>
              </div>
              <p className="text-[11px]">Includes code review, architecture check, and hackathon pitch advice.</p>
            </div>

            <form onSubmit={handleConfirm}>
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                Confirm Session Booking
              </button>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
