import React from "react";
import "./intro-page.styles";
import Header from "../../components/header/header.component";
import AppOverview from "../../components/app-overview/app-overview.component";

const IntroPage = () => {
  return (
    <div className="intro-page-container">
      <Header />
      <AppOverview />
    </div>
  );
};

export default IntroPage;
