import Header from "../../components/logs/Header";

const Toronto27825 = () => {
  const images = import.meta.glob(
    "../../../assets/canon/toronto-27-8-25/optimized/*-1600.webp",
    { eager: true, as: "url" },
  );
  const imageUrls = Object.values(images)
    .filter((v) => typeof v === "string")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div>
      <Header Title={"Toronto"} Date={"August 27th, 2025"} />

      <div className="grid w-full grid-cols-1 gap-10">
        {imageUrls.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Belfountain ${idx}`}
            style={styles.img_landscape}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  img_landscape: {
    display: "block",
    marginTop: "1rem",
    marginBottom: "4rem",
    width: "100%",
    height: "auto",
    borderRadius: "1rem",
  },
};

export default Toronto27825;
