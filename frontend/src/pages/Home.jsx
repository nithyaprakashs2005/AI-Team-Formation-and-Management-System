import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import LiveStats from '../components/LiveStats';
import WhyTeamSync from '../components/WhyTeamSync';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

export default function Home() {
  const { openAuthModal, openDemoModal } = useOutletContext();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <Hero
        openAuthModal={openAuthModal}
        openDemoModal={openDemoModal}
      />

      {/* Live Platform Stats */}
      <LiveStats />

      {/* Why TeamSync AI (4 Premium Cards) */}
      <WhyTeamSync />

      {/* How It Works Timeline */}
      <HowItWorks openAuthModal={openAuthModal} />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Call to Action Banner */}
      <CallToAction openAuthModal={openAuthModal} />
    </div>
  );
}
