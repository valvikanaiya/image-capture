import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

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
