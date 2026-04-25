import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft } from "../components/Icons";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Mahad Hassan</title>
      </Helmet>

      <p className="eyebrow">?? / NOT FOUND</p>
      <h1 className="display page-title" style={{ marginBottom: 8 }}>
        404.
      </h1>
      <p
        className="subtle"
        style={{ fontSize: "18px", maxWidth: "480px", marginBottom: 40 }}
      >
        This page doesn&apos;t exist. You might have followed a broken link or
        typed the address wrong.
      </p>
      <button className="log-back" onClick={() => navigate("/")}>
        <ArrowLeft size={12} /> Back to home
      </button>
    </>
  );
};

export default NotFound;
