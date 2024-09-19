import React from "react";
import BannerHome from "./Components/BannerHome";
import Stats from "../../components/Stats";
import ListCompany from "./Components/ListCompany";
import TopCategories from "./Components/TopCategories";
import SuperiorTool from "./Components/SuperiorTool";
const Home = () => {
  return (
    <>
      <BannerHome />
      <Stats />
      <ListCompany />
      <TopCategories />
      <SuperiorTool />
    </>
  );
};
export default Home;
