import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function PreviewCard({ children, title = "Preview" }) {
  const [externalWindow, setExternalWindow] = useState(null);
  const [containerElement, setContainerElement] = useState(null);

  const openFullPreview = () => {
    if (externalWindow) {
      externalWindow.focus();
      return;
    }

    const newWindow = window.open("", "_blank", "width=1200,height=800,left=200,top=200");
    if (!newWindow) return;

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
          <div id="root" class="w-full mx-auto"></div>
        </body>
      </html>
    `;

    newWindow.document.write(fullPage);
    newWindow.document.close();

    // Wait for the window to load before trying to access the DOM
    newWindow.onload = () => {
      const container = newWindow.document.getElementById("root");
      setExternalWindow(newWindow);
      setContainerElement(container);
    };

    // In case onload fired synchronously or we missed it (rare with open, but good safety)
    if (newWindow.document.readyState === 'complete') {
      const container = newWindow.document.getElementById("root");
      setExternalWindow(newWindow);
      setContainerElement(container);
    }

    // Handle window close
    newWindow.onbeforeunload = () => {
      setExternalWindow(null);
      setContainerElement(null);
    };
  };

  // Close external window when component unmounts
  useEffect(() => {
    return () => {
      if (externalWindow) {
        externalWindow.close();
      }
    };
  }, [externalWindow]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

        <button
          onClick={openFullPreview}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition
            text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-gray-900`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Open in new tab
        </button>
      </div>

      {/* The preview area in the main window */}
      <div
        id="preview-content"
        className="bg-gray-50 rounded-lg p-8 border border-dashed border-gray-300 min-h-96 flex items-center justify-center"
      >
        {children}
      </div>

      {/* Render content into the new window if it exists */}
      {containerElement && createPortal(children, containerElement)}
    </div>
  );
}