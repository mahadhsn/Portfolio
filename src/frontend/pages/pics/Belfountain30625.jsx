import Header from "../../components/logs/Header";
import { styles } from "../../../data/consts";

const Belfountain30625 = () => {
  const images = import.meta.glob(
    "../../../assets/canon/belfountain-30-6-25/optimized/*-1600.webp",
    { eager: true, as: "url" },
  );
  const imageUrls = Object.values(images)
    .filter((v) => typeof v === "string")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div>
      <Header Title={"Belfountain"} Date={"June 30th, 2025"} />

      <div className="grid w-full grid-cols-1 gap-10">
        {imageUrls.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Belfountain ${idx}`}
            style={styles.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Belfountain30625;
