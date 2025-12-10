import CopyButton from './CopyButton';

export default function CodeCard({ code }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Code</h2>
        <CopyButton text={code} />
      </div>

      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-xs md:text-sm">
        <code>{code?.trim()}</code>
      </pre>
    </div>
  );
}