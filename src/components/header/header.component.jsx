import React, { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import {
  HeaderContainer,
  Wave,
  HeaderTitle,
  TextContainer,
} from "./header.styles";
import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 600,
    });
  }, []);

  return (
    <HeaderContainer>
      <TextContainer>
        <HeaderTitle>Welcome to BestRunner!</HeaderTitle>
        <a data-scroll href="#explore">
          <CustomButton>Explore</CustomButton>
        </a>
      </TextContainer>
      <Wave />
    </HeaderContainer>
  );
};

export default Header;
