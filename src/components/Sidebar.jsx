'use client';

import { X } from 'lucide-react';
import { components } from '@/data/componentData';

export default function Sidebar({ selected, onSelect, open, onClose }) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-4
        transform transition-transform duration-300 ease-in-out
        lg:static lg:inset-auto lg:transform-none
        ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}
      style={{ top: '1.5rem' }}   // matches Header padding
    >
      <div className="flex items-center justify-between mb-4 lg:mb-3">
        <h2 className="font-semibold text-gray-700">Blocks</h2>
        <button
          onClick={onClose}
          className="lg:hidden p-1 hover:bg-gray-100 rounded"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="space-y-1">
        {Object.entries(components).map(([key, comp]) => (
          <button
            key={key}
            onClick={() => {
              onSelect(key);
              onClose();
            }}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium
              ${selected === key
                ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-200'
                : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            {comp.name}
          </button>
        ))}
      </nav>
    </aside>
  );
}