import Layout from "../Layout/Layout";
import LoadingImage from "@assets/loader.svg";
const Loader = () => {
  return (
    <Layout>
      <img src={LoadingImage} className="animate-spin" alt="loader image" />
    </Layout>
  );
};

export default Loader;
