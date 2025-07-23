import { useEffect } from "react";
import PDFViewer from "../components/PDFViewer";
import { Helmet } from "react-helmet";

const Resume = () => {
  useEffect(() => {
    document.title = "Mahad's Resume";
  });

  return (
    <div className="flex flex-col animate-fade-in mt-[10%] md:mt-[20%] ml-6">
      <Helmet>
        <title>Mahad's Resume</title>
        <meta
          name="description"
          content="Resume page of Mahad Hassan's software engineering portfolio."
        />
      </Helmet>

      <h1 className="text-3xl font-bold text-textlight dark:text-textdark text-center">
        View my resume below!
      </h1>

      <PDFViewer />
    </div>
  );
};

export default Resume;
