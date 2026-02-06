'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileOverlay from '@/components/MobileOverlay';
import Sidebar from '@/components/Sidebar';
import PreviewCard from '@/components/PreviewCard';
import CodeCard from '@/components/CodeCard';
import { components } from '@/data/componentData';

export default function Home() {
  const [selected, setSelected] = useState('VideoConference');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const current = components[selected];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      <Header
        sidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <MobileOverlay open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="w-full mx-auto px-6 flex gap-6">

        <Sidebar
          selected={selected}
          onSelect={setSelected}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="space-y-6 w-full">
          <PreviewCard url={current?.url}>{current?.preview}</PreviewCard>

          <CodeCard code={current?.code} />

          {/* add use case and tags to this */}

          <div className='m-10'>

          </div>
        </main>
      </div>
    </div>
  );
}