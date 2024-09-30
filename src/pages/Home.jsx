import Layout from "../components/Layout/Layout";
import QRCode from "@assets/qrcode.png";
import Logo from "@assets/softrefine-logo.svg";
const Home = () => {
  return (
    <Layout>
      <div className="h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full">
        <div className="h-[100dvh] min-h-[100dvh] max-h-screen flex flex-col justify-between gap-10 max-w-full">
          <div className="h-full  w-full overflow-hidden bg-gradient-to-b from-[#B721FF] to-[#21D4FD] p-2">
            <div className="rounded flex  gap-5 flex-col justify-between border p-4 h-full">
              <div className="flex  flex-col items-center justify-center pt-5 gap-4">
                <div className="h-8 flex justify-center items-center rounded-full font-semibold uppercase  text-[#B721FF] bg-white">
                  <div className="px-4">Please join us for</div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img className="aspect-square w-full rounded" src={QRCode} alt="" />
                <p className="font-semibold text-white text-center text-sm text-[12px]">
                  Use your smartphone to scan the QR code
                </p>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex justify-center w-full">
                  <img
                    src={Logo}
                    className="h-auto w-1/2 object-cover  mx-auto"
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
        </div>
      </div>
    </Layout>
  );
};

export default Home;
