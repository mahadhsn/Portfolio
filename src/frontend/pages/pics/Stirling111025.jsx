import Header from "../../components/logs/Header";

const Stirling111025 = () => {
  const images = import.meta.glob(
    "../../../assets/canon/stirling-11-10-25/optimized/*-1600.webp",
    { eager: true, as: "url" },
  );
  const imageUrls = Object.values(images)
    .filter((v) => typeof v === "string")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div>
      <Header Title={"Stirling"} Date={"October 11th, 2025"} />

      <div className="grid w-full grid-cols-1 gap-10">
        {imageUrls.map((src, idx) => (
          <img key={idx} src={src} alt={`Stirling ${idx}`} style={styles.img} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  img: {
    maxWidth: "80vh",
    maxHeight: "75vh", // key line: prevents tall portraits
    width: "auto",
    height: "auto",
    margin: "0 auto",
    borderRadius: "1rem",
  },
};
export default Stirling111025;
