import { useMemo } from "react";

const PDFViewer = () => {
  // Always serve from the public root. Make sure `/public/mahadresume.pdf` exists.
  const pdfUrl = useMemo(() => "/mahadresume.pdf#view=FitH", []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen mt-5">
      {/* Primary inline PDF using <object> */}
      <object
        data={pdfUrl}
        type="application/pdf"
        className="w-[80vw] md:w-[40vw] h-[90vh] border-4 border-neutral-500 rounded-lg shadow-lg"
        aria-label="Embedded PDF resume"
      >
        {/* Fallback #1: <embed> */}
        <embed
          src={pdfUrl}
          type="application/pdf"
          className="w-[80vw] md:w-[40vw] h-[90vh] border-4 border-neutral-500 rounded-lg shadow-lg"
        />

        {/* Fallback #2: final graceful fallback */}
        <div className="text-center p-6">
          <p className="mb-3 text-sm opacity-80">
            Your browser can’t display PDFs inline. You can still open or
            download it below.
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href={pdfUrl.replace(/#.*/, "")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
            >
              Open in new tab
            </a>
            <a
              href={pdfUrl.replace(/#.*/, "")}
              download="mahadresume.pdf"
              className="px-4 py-2 rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
            >
              Download
            </a>
          </div>
        </div>
      </object>

      {/* Visible action buttons */}
      <div className="mt-4 flex flex-col gap-3 text-center">
        <a
          href={pdfUrl.replace(/#.*/, "")}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
        >
          Open in new tab
        </a>
        <a
          href={pdfUrl.replace(/#.*/, "")}
          download="mahadresume.pdf"
          className="px-6 py-2 rounded-lg transition duration-300 bg-accentlight dark:bg-accentdark text-textlight dark:text-textdark hover:bg-accenthoverlight dark:hover:bg-accenthoverdark"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
