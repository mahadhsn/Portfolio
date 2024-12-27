import React, { useState, useEffect } from 'react';

const PDFViewer = () => {
  const [iframeSupported, setIframeSupported] = useState(true);

  useEffect(() => {
    // Check if the browser supports iframes
    if (!document.createElement('iframe').constructor) {
      setIframeSupported(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      {/* Check if iframe is supported */}
      {iframeSupported ? (
        <>
          <iframe
            className="w-[80vw] md:w-[40vw] h-[90vh] border-4 border-neutral-500 rounded-lg shadow-lg"
            src="/mahadresume.pdf"
            title="My Resume"
          />
          {/* Download Button */}
          <a
            href="/mahadresume.pdf"
            download="mahadresume.pdf"
            className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
          >
            Download Resume
          </a>
        </>
      ) : (
        <div className="text-center text-red-500">
          <p>Your browser does not support iframes :\ Please download the resume below:</p>
          {/* Fallback download button */}
          <a
            href="/mahadresume.pdf"
            download="mahadresume.pdf"
            className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;