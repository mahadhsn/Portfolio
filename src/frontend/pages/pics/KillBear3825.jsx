import Header from "../../components/logs/Header";

const KillBear3825 = () => {
  const images = import.meta.glob(
    "../../../assets/canon/killbear-3-8-25/*.{png,jpg,jpeg,webp,avif,JPG}",
    { eager: true, as: "url" },
  );
  const imageUrls = Object.values(images)
    .filter((v) => typeof v === "string")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div>
      <Header Title={"KillBear"} Date={"August 3rd, 2025"} />

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

export default KillBear3825;
