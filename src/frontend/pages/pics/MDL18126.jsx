import Header from "../../components/logs/Header";
import { styles } from "../../../data/consts";

const MDL18126 = () => {
  const images = import.meta.glob(
    "../../../assets/canon/mdl-18-1-26/optimized/*-1600.webp",
    { eager: true, as: "url" },
  );

  const imageUrls = Object.values(images)
    .filter((v) => typeof v === "string")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div className="mx-auto">
      <Header Title={"MDL"} Date={"January 17/18th, 2026"} />

      <div className="flex flex-col items-center gap-12 mt-8">
        {imageUrls.map((src, idx) => (
          <img key={idx} src={src} alt={`MDL ${idx}`} style={styles.img} />
        ))}
      </div>
    </div>
  );
};

export default MDL18126;
