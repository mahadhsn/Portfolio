import PropTypes from "prop-types";
const Project = ({ Title, Description, href }) => {

  const isDeployed = href && !href.includes('github')

  return (
    <div>
      <h2 className="text-2xl md:text-3xl text-left underline mt-8 flex items-center gap-2">
        <a href={href} target="_blank" rel="noopener noreferrer">
          {Title}
        </a>
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
  href: PropTypes.string
};

export default Project;
