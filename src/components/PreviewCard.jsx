export default function PreviewCard({ children, title = "Preview", url }) {
  const openFullPreview = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        <button
          type="button"
          onClick={openFullPreview}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition
            text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 cursor-pointer`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open in full screen
        </button>
      </div>

      {/* The preview area in the main window */}
      <div
        id="preview-content"
        className="bg-gray-50 rounded-lg p-4 border border-dashed border-gray-300 min-h-96 max-h-[600px] w-full overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
}