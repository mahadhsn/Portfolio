import { useState, useEffect } from "react";
import { useMemo } from "react";

const PDFViewer = () => {
  const [iframeSupported, setIframeSupported] = useState(true);

  const pdfHref = useMemo(() => "/mahadresume.pdf", []);

  useEffect(() => {
    // Check if the browser supports iframes
    if (!document.createElement("iframe").constructor) {
      setIframeSupported(false);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 pt-5">
      {/* Check if iframe is supported */}
      {iframeSupported ? (
        <>
          <iframe
            className="w-[80vw] md:w-[40vw] h-[90vh] border-4 border-neutral-500 rounded-lg shadow-lg"
            src="/mahadresume.pdf"
            title="My Resume"
          />

          <div className="flex flex-col items-center text-center text-textlight dark:text-textdark gap-2">
            <p className="mb-1 text-m text-neutral-600 dark:text-neutral-300">
              If the resume is not visible, please open it in a new tab :)
            </p>

            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-auto max-w-fit whitespace-nowrap px-4 py-2 text-base rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
            >
              Open in new tab
            </a>

            <a
              href="/mahadresume.pdf"
              download="mahadresume.pdf"
              className="inline-flex w-auto max-w-fit whitespace-nowrap px-4 py-2 text-base rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
            >
              Download
            </a>
          </div>
        </>
      ) : (
        <div className="text-center text-errorlight dark:text-errordark">
          <p>
            Your browser does not support iframes :\ Please download the resume
            below:
          </p>
          {/* Fallback download button */}
          <div className="flex flex-col items-center text-center text-textlight dark:text-textdark gap-2">
            <p className="mb-1 text-m text-neutral-600 dark:text-neutral-300">
              If the resume is not visible, please open it in a new tab :)
            </p>

            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-auto max-w-fit whitespace-nowrap px-4 py-2 text-base rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
            >
              Open in new tab
            </a>

            <a
              href="/mahadresume.pdf"
              download="mahadresume.pdf"
              className="inline-flex w-auto max-w-fit whitespace-nowrap px-4 py-2 text-base rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PDFViewer;
