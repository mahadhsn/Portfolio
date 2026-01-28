import Header from "../../components/logs/Header";
import { styles } from "../../../data/consts";

const Bronte31825 = () => {
  const images = import.meta.glob(
    "../../../assets/canon/bronte-31-8-25/optimized/*-1600.webp",
    { eager: true, as: "url" },
  );
  const imageUrls = Object.values(images)
    .filter((v) => typeof v === "string")
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div>
      <Header Title={"Bronte Creek"} Date={"August 31st, 2025"} />

      <div className="grid w-full grid-cols-1 gap-10">
        {imageUrls.map((src, idx) => (
          <img key={idx} src={src} alt={`Bronte ${idx}`} style={styles.img} />
        ))}
      </div>
    </div>
  );
};

export default Bronte31825;
