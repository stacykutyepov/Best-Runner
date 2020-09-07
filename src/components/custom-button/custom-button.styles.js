import styled from "styled-components";

export const CustomButtonContainer = styled.button`
  cursor: pointer;
  background-color: lightblue;
  border: 2px solid lightblue;

  color: black;
  border: none;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 28px 0 28px;
  font-size: 13px;
  border-radius: 20px;
  text-transform: uppercase;
  font-weight: bolder;
  display: flex;
  justify-content: center;

  &:hover {
    outline: none;
    background-color: #ffffff;
    text-shadow: 1px 1px 1px lightblue;
    color: #000000;
    border: 2px solid lightblue;
  }
`;