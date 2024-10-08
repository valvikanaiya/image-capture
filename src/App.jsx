import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadImage from "@pages/UploadImage";
import Loader from "@components/Loader/Loader";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<UploadImage />} />
          <Route path="/*" element={<UploadImage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
