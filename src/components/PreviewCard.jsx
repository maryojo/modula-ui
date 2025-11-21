import { useState } from "react";

export default function PreviewCard({ children, title = "Preview" }) {
  const [isOpened, setIsOpened] = useState(false);

  const openFullPreview = () => {
    if (isOpened) return;

    const previewHTML = document.getElementById("preview-content")?.innerHTML || "";

    const fullPage = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>${title}</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { margin: 0; background: #f9fafb; }
            @media (prefers-color-scheme: dark) { body { background: #111827; } }
          </style>
        </head>
        <body class="min-h-screen flex items-center justify-center">
          <div class="w-full mx-auto">
            ${previewHTML}
          </div>
        </body>
      </html>
    `;

    const newTab = window.open("", "_blank");
    if (newTab) {
      newTab.document.write(fullPage);
      newTab.document.close();
      setIsOpened(true);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        <button
          onClick={openFullPreview}
          disabled={isOpened}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition
            ${isOpened 
              ? "text-gray-400 bg-gray-100 cursor-not-allowed" 
              : "text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-gray-900"
            }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {isOpened ? "Opened" : "Open in new tab"}
        </button>
      </div>

      {/* The preview area – we give it an ID so we can grab its HTML */}
      <div
        id="preview-content"
        className="bg-gray-50 rounded-lg p-8 border border-dashed border-gray-300 min-h-96 flex items-center justify-center"
      >
        {children}
      </div>
    </div>
  );
}