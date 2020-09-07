import React from "react";
import {
  HeaderContainer,
  Wave,
  HeaderTitle,
  TextContainer,
} from "./header.styles";
import CustomButton from "../custom-button/custom-button.component";

const Header = () => {
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
