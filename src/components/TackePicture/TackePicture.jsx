// import html2canvas from "html2canvas";
import { useEffect, useRef, useState } from "react";
// import CameraImage from "@assets/opencamera.svg";
// import Logo from "@assets/softrefine-logo.svg";
import FernResot from "@assets/fern-resort.png";

import { toPng } from "html-to-image";
import SelfieImage from "../selfieimage/SelfieImage";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Joinus from "../Button/Joinus";
const TackePicture = () => {
  // const [image, setImage] = useState("jh");
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
    <div className=" h-screen bg-black w-full flex flex-col">
      <Navigation />
      <div className="flex-1  bg-[url('/images/the-fern-leo-resort-club.jpg')] bg-no-repeat bg-center bg-cover  relative">
        <div
          className="w-full bg-gradient-to-b  from-gray-50/20  to-white h-full flex items-center justify-center flex-col"
          style={{ backdropFilter: "blur(1px)" }}>
          {image && (
            <div className="w-full bg-white flex flex-col justify-between h-full gap-5 max-w-full p-2">
              <div
                ref={imageWrapper}
                className={`h-full border border-indigo-900 flex-1 max-h-[90dvh] w-full overflow-hidden `}>
                <div className="w-full flex flex-col items-center justify-between bg-gradient-to-b from-gray-50/20  to-white h-full ">
                  <Navigation />
                  <div
                    className={`w-full bg-[url("/images/the-fern-leo-resort-club.jpg")] bg-cover bg-center bg-no-repeat flex-1 `}>
                    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50/20 gap-5 to-white h-full p-4">
                      <div>
                        <img
                          className="h-[80px] aspect-square"
                          src={FernResot}
                          alt=""
                        />
                      </div>
                      <div className="w-[40%] rounded-full bg-red-950 aspect-square">
                        <img
                          className="object-cover aspect-square w-full rounded-full h-full bottom-2  right-2"
                          src={image}
                          alt="user image"
                        />
                      </div>
                      <Joinus />
                    </div>
                  </div>
                  <div className="w-full">
                    <Footer />
                  </div>
                </div>
              </div>
              <hr className="mt-1" />
              <div className="flex w-full justify-between p-10 items-center">
                {downloadLink && (
                  <>
                    <a
                      href={downloadLink}
                      target="_blank"
                      className="bg-indigo-600 py-2 px-4 rounded text-white "
                      download={"captureimage.png"}>
                      Download
                    </a>
                    <button
                      className="border border-red-800 text-red-800  p-2 px-4 rounded"
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

          <div className="flex flex-col gap-50 justify-center items-center">
            {!image && (
              <div>
                <img
                  className="h-[150px] aspect-square"
                  src={FernResot}
                  alt=""
                />
              </div>
            )}
            <SelfieImage
              captureRef={captureRef}
              handelImageCapture={handelImageCapture}
              image={image}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TackePicture;
