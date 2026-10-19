import { formatSettings } from "./shotSettings";

// Small camera-settings readout laid over a photo, with an "Edited" tag for
// photos that were developed from RAW.
const ShotInfo = ({ meta, showCamera }) => {
  if (!meta) return null;
  const settings = formatSettings(meta);
  const camera = showCamera ? meta.camera : null;
  if (!settings && !camera && !meta.edit) return null;

  return (
    <>
      {meta.edit && <span className="shot-edited">Edited</span>}
      {(camera || settings) && (
        <span className="shot-info">
          {camera && <span className="shot-camera">{camera}</span>}
          {settings}
        </span>
      )}
    </>
  );
};

export default ShotInfo;
