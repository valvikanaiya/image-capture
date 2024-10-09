import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import Navigation from "../Navigation/Navigation";
import SelfieButton from "../SelfieButton/SelfieButton";
import Joinus from "../Button/Joinus";
import Address from "../Address/Address";
import Footer from "../Footer/Footer";
import LoadingImage from "@assets/LoaderImageIcon.svg";
import FernResot from "@assets/fern-resort.png";

const TackePicture = () => {
  const [image, setImage] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const imageWrapper = useRef();
  const captureRef = useRef();

  const genrateImage = async () => {
    setIsLoading(true);
    if (imageWrapper.current) {
      try {
        const dataURL = await toPng(imageWrapper.current);
        setDownloadLink(dataURL);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error generating image", error);
      }
    }
  };

  useEffect(() => {
    if (image) {
      genrateImage();
    }
  }, [image]);

  const handleImageCapture = async (e) => {
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
    <div className=" h-[100dvh] bg-white w-full flex flex-col">
      {!image && <Navigation />}
      <div className="flex-1 bg-[url('/images/bg-image.webp')] bg-no-repeat bg-center bg-cover  relative">
        <div
          className="w-full bg-gradient-to-b  from-indigo-50/10  to-indigo-200 h-full flex items-center justify-center flex-col"
          style={{ backdropFilter: "blur(1px)" }}>
          {image && (
            <div className="w-full bg-transparent flex flex-col justify-between  gap-5 max-w-full p-2">
              <div
                ref={imageWrapper}
                className={`aspect-[4/5] border border-indigo-900 flex-1 max-h-[90dvh] w-full overflow-hidden `}>
                <div className="w-full flex flex-col items-center bg-gradient-to-b from-gray-50/20  to-white h-full ">
                  <Navigation />
                  <div
                    className={`w-full bg-[url("/images/bg-image.webp")] bg-cover bg-center bg-no-repeat flex-1 `}>
                    <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50/10  to-indigo-200 h-full p-4 gap-3 ">
                      <div className="w-full flex items-center justify-center gap-2">
                        <div className="w-[30%] aspect-square  bg-white/50 rounded-full">
                          <img
                            className="w-full h-full  object-cover aspect-square"
                            src={FernResot}
                            alt=""
                          />
                        </div>
                        <div className="w-[30%] rounded-full bg-red-950 aspect-square">
                          <img
                            className="object-cover aspect-square w-full rounded-full h-full bottom-2  right-2"
                            src={image}
                            alt="user image"
                          />
                        </div>{" "}
                      </div>

                      <Joinus />
                      <Address />
                    </div>
                  </div>
                  <div className="w-full">
                    <Footer />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between p-2 items-center">
                {isLoading && (
                  <div className="flex items-center justify-center w-full">
                    <img
                      src={LoadingImage}
                      className="animate-spin"
                      alt="loader image"
                    />
                  </div>
                )}
                {!isLoading && downloadLink && (
                  <div className="flex items-center justify-center w-full gap-10">
                    <a
                      href={downloadLink}
                      target="_blank"
                      className="bg-indigo-600 block font-semibold py-2 px-6 rounded-full text-white "
                      download={"captureimage.png"}>
                      Download
                    </a>
                    <button
                      className="font-semibold block text-white bg-red-500 p-2 px-6 rounded-full"
                      onClick={() => {
                        setImage(null);
                        captureRef.current.click();
                      }}>
                      Re-Capture
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-50 justify-center items-center">
            {!image && (
              <>
                <div>
                  <img
                    className="h-[150px] aspect-square"
                    src={FernResot}
                    alt=""
                  />
                </div>
              </>
            )}
            <SelfieButton
              captureRef={captureRef}
              handleImageCapture={handleImageCapture}
              image={image}
            />
            {!image && <Address />}
          </div>
        </div>
      </div>
      {!image && <Footer />}
    </div>
  );
};

export default TackePicture;
