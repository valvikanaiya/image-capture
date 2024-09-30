// import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
import CameraImage from "@assets/opencamera.svg";
import Logo from "@assets/softrefine-logo.svg";
// import QRCode from "@assets/qrcode.png";
import { toPng } from "html-to-image";
const TackePicture = () => {
  const [image, setImage] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  const imageWrapper = useRef();
  const captureRef = useRef();

  const genrateImage = async () => {
    if (imageWrapper.current) {
      try {
        const dataURL = await toPng(imageWrapper.current);
        setDownloadLink(dataURL);
      } catch (error) {
        console.error("Error generating image", error);
      }
    }
  };

  useEffect(() => {
    if (image) {
      genrateImage();
    }
  }, [image]);

  const handelImageCapture = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-[100dvh] w-full">
      {image && (
        <div className="w-full flex flex-col justify-between h-full gap-5 max-w-full p-2">
          <div
            ref={imageWrapper}
            className="h-screen w-full overflow-hidden bg-gradient-to-b from-[#B721FF] to-[#21D4FD] p-2 ">
            <div className="rounded flex  gap-5 flex-col justify-between border p-4 h-full">
              <div className="flex  flex-col items-center justify-center pt-5 gap-4">
                <div className="h-8 flex justify-center items-center rounded-full font-semibold uppercase  text-[#B721FF] bg-white">
                  <div className="px-4">Please join us for</div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square">
                  <img
                    className="object-cover w-full border rounded-sm h-full bottom-2  right-2"
                    src={image}
                    alt="user image"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {/* <div className="flex flex-col items-center justify-center">
                  <img className="h-16 w-16" src={QRCode} alt="" />
                  <p className="font-semibold text-white text-center text-sm text-[12px]">
                    Use your smartphone to scan the QR code
                  </p>
                </div> */}
                <div className="flex border-transparent border justify-center w-full">
                  <img
                    src={Logo}
                    className="h-[30px] w-[200px] object-cover  mx-auto"
                    alt=""
                  />
                </div>
                <div className="flex justify-between font-semibold text-white text-[12px]">
                  <p>Junagadh, Gujarat, india</p>
                  <p>Date: 01 january 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between p-10 items-center">
            {downloadLink && (
              <>
                <a
                  href={downloadLink}
                  target="_blank"
                  className="bg-gradient-to-r rounded text-white from-cyan-500 to-blue-500 p-2 px-4"
                  download={"captureimage.png"}>
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
      </div>
    </div>
  );
};

export default TackePicture;
