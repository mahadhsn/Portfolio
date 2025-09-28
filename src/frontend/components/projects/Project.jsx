import PropTypes from "prop-types";

const Project = ({ Title, Description, href, Icons }) => {
  const isDeployed = href && !href.includes("github");

  return (
    <div>
      <h2 className="text-2xl md:text-3xl text-left mt-8 flex items-center gap-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {Title}
        </a>
        {Icons &&
          Icons.map((Icon, index) => (
            <Icon key={index} className="text-2xl md:text-3xl" />
          ))}
        {isDeployed && (
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        )}
      </h2>
      <p className="mb-6">{Description}</p>
    </div>
  );
};

Project.propTypes = {
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  href: PropTypes.string,
  Icons: PropTypes.array,
};

export default Project;
