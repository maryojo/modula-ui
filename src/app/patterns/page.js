'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import MobileOverlay from '@/components/MobileOverlay';
import Sidebar from '@/components/Sidebar';
import PreviewCard from '@/components/PreviewCard';
import CodeCard from '@/components/CodeCard';
import { components } from '@/data/componentData';

export default function Patterns() {
  const [selected, setSelected] = useState('button');
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

        {sidebarOpen && <Sidebar
          selected={selected}
          onSelect={setSelected}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />}

        <main className="space-y-6 w-full">
          <PreviewCard>{current?.preview}</PreviewCard>

          <CodeCard code={current?.code} />

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> These components use Tailwind CSS utility classes. Make sure you have Tailwind CSS installed in your project.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}