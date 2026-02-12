'use client';

import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header({ sidebarOpen, toggleSidebar }) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Logo />
          <p className="text-gray-600">A library of beautiful modern UI blocks and patterns built with care and Shadcn by <a href="https://www.linkedin.com/in/mary-ojo/" className='underline'>Mary (a Design Engineer)</a></p>
        </div>

        <button
          onClick={toggleSidebar}
          className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
}