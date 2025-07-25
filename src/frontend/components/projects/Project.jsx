const Project = ({ Title, Description, href }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl text-left underline mt-8">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {Title}
        </a>
      </h2>
      <p className="mb-6">{Description}</p>
    </div>
  );
};

export default Project;
