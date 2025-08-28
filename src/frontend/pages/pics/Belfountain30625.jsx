import React from 'react'
import Image from "../../components/logs/Image"
import Header from "../../components/logs/Header"

// ../../../../public/images/canon/belfountain-30-6-25
// Auto‑load all images in this album without manual imports
// Move your images to: src/assets/images/canon/belfountain-30-6-25
// Any new file matching the extensions below will appear automatically

const Belfountain30625 = () => {

  const images = import.meta.glob(
    '../../../assets/canon/belfountain-30-6-25/*.{png,jpg,jpeg,webp,avif,JPG}',
    { eager: true, as: 'url' }
  );
  const imageUrls = Object.values(images)
    .filter((v) => typeof v === 'string')
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return (
    <div className="text-textlight dark:text-textdark flex flex-col opacity-0 animate-fade-in mt-[5%] md:mt-[18%] w-full h-full mb-20">
      <Header Title={"Belfountain"} Date={"June 30th, 2025"}/>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {imageUrls.map((src, idx) => (
          <img key={idx} src={src} alt={`Belfountain ${idx}`} style={styles.img_landscape} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  img_portrait: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    maxWidth: "80%",
    maxHeight: "70vh",
    width: "auto",
    height: "auto",
    borderRadius: "1rem",
    objectFit: "cover",
  },
  img_landscape: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1rem",
    marginBottom: "0.5rem",
    width: "75%",
    height: "auto",
    borderRadius: "1rem",
  },
  caption: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "1.125rem",
  },
};

export default Belfountain30625
