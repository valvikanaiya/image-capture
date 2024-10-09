/* eslint-disable react/prop-types */
import CameraImage from "@assets/opencamera.svg";
const SelfieButton = ({ captureRef, handleImageCapture, image }) => {
  const handleClick = () => {
    captureRef?.current.click();
  };

  return (
    <>
      <input
        ref={captureRef}
        type="file"
        id="cameraInput"
        name="cameraInput"
        accept="image/*"
        capture="user"
        onChange={handleImageCapture}
        className="hidden"
      />
      <div
        className={`w-full overflow-visiblew-full p-2 ${
          image ? "hidden" : "flex"
        } items-center justify-between flex-col bg-cover bg-center bg-no-repeat`}>
        <label
          onClick={handleClick}
          className={`mx-auto cursor-pointer justify-center ${
            image ? "hidden" : "flex"
          } gap-2 items-center py-3 px-5 bg-indigo-500 text-white rounded-full`}>
          <img className="h-6 w-6" src={CameraImage} alt="" />
          <span>Take a selfie</span>
        </label>
      </div>
    </>
  );
};

export default SelfieButton;
