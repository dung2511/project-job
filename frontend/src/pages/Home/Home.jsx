import React from "react";
import BannerHome from "./Components/BannerHome";
import Stats from "../../components/Stats";
import ListCompany from "./Components/ListCompany";
import TopCategories from "./Components/TopCategories";
import SuperiorTool from "./Components/SuperiorTool";
import NewspapersTalkAbout from "./Components/NewspapersTalkAbout";
import ListJob from "./Components/ListJob";
const Home = () => {
  return (
    <>
      <BannerHome />
      <Stats />
      <ListJob />
      <ListCompany />
      <TopCategories />
      <SuperiorTool />
      <NewspapersTalkAbout />
    </>
  );
};
export default Home;
