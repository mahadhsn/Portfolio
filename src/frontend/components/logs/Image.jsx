const Image = ({ imgStyle, src, captionText, divStyle }) => {
  return (
    <div className="flex flex-col items-center justify-center align-middle mb-6">
      <div style={divStyle} className="mb-2">
        <img style={imgStyle} src={src} />
      </div>
      {captionText && <p style={styles.caption}>{captionText}</p>}
    </div>
  );
};

export default Image;

const styles = {
  caption: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "1.125rem",
  },
};
