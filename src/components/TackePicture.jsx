import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import CameraImage from "@assets/opencamera.svg";
const TackePicture = () => {
  const [image, setImage] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  //   const [allowCamera, setAllowCamera] = useState(false);
  const imageWrapper = useRef();
  const captureRef = useRef();
  //   const videoRef = useRef(null);
  //   const canvasRef = useRef(null);

  const genrateImage = async () => {
    if (imageWrapper.current) {
      const canvas = await html2canvas(imageWrapper.current);
      const dataURL = canvas.toDataURL("image/png");
      setDownloadLink(dataURL);
    }
  };

  useEffect(() => {
    if (image) {
      genrateImage();
    }
  }, [image]);

  const handelImageCapture = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //   const openCamera = async () => {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({
  //         video: true,
  //       });
  //       videoRef.current.srcObject = stream;
  //       setAllowCamera(true);
  //     } catch (error) {
  //       console.error("Error accessing camera: ", error);
  //       setAllowCamera(false);
  //     }
  //   };

  //   useEffect(() => {
  //     if (image == null) {
  //       openCamera();
  //     }
  //   }, [image]);

  //   const captureImage = () => {
  //     const video = videoRef.current;
  //     const canvas = canvasRef.current;
  //     const context = canvas.getContext("2d");

  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //     const dataURL = canvas.toDataURL("image/png");
  //     setImage(dataURL);
  //   };
  return (
    <div className="max-h-screen  h-[100dvh] w-full">
      {image && (
        <div className="w-full flex flex-col justify-between h-full gap-10 max-w-full p-2">
          <div
            ref={imageWrapper}
            className="aspect-[3/4] w-full first-letter:border border-indigo-500  bg-gradient-to-br from-cyan-500 to-blue-500 relative">
            <img
              className="object-cover w-20 h-20 rounded-full absolute bottom-2 right-2"
              src={image}
              alt="user image"
            />
          </div>
          <div className="flex justify-between p-10 items-center">
            {downloadLink && (
              <>
                <a
                  href={downloadLink}
                  target="_blank"
                  className="bg-gradient-to-r rounded text-white from-cyan-500 to-blue-500 p-2 px-4"
                  download={"captureimage.jpeg"}>
                  download
                </a>
                <button
                  className=" bg-red-500 text-white p-2 px-4 rounded"
                  onClick={() => {
                    setImage(null);
                    captureRef.current.click();
                  }}>
                  Re-Capture
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <div>
        <input
          ref={captureRef}
          type="file"
          id="cameraInput"
          name="cameraInput"
          accept="image/*"
          capture="user"
          onChange={handelImageCapture}
          className="hidden"
        />
        <div
          className={`h-[100dvh] max-h-full w-full overflow-visiblew-full p-2 ${
            image ? "hidden" : "flex"
          } items-end`}>
          <label
            className={`mx-auto justify-center ${
              image ? "hidden" : "flex"
            } gap-2 items-center bottom-10 p-4 bg-indigo-500 text-white rounded-full border`}
            htmlFor={"cameraInput"}>
            <img className="h-6 w-6" src={CameraImage} alt="" />
            <span>Capture Image</span>
          </label>
        </div>

        {/* <div className="h-[100dvh] hidden flex-col md:flex max-h-full  items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              className="w-full max-w-md aspect-video"
            />
            {allowCamera ? (
              <button
                onClick={captureImage}
                className="absolute bottom-10 p-4 bg-indigo-500 text-white rounded-full">
                Capture Image
              </button>
            ) : (
              <p className="text-red-700">Please allow Camera Access</p>
            )}
            <canvas
              ref={canvasRef}
              className="hidden"
              width="640"
              height="480"></canvas>
          </div> */}
      </div>
    </div>
  );
};

export default TackePicture;
