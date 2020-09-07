import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Chart = css`
  margin-top: 10px;
  width: 56px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px){
  width: 34px;
      
    }
`;
export const Number = (colors) => {
  return styled.span`
  font-size: 1.5rem;
  text-align: center;
  color: ${colors[1]};
`};

export const makeBar = (height, colors) => {
  return styled.div`
    height: ${height}%;
    background-image: linear-gradient(to bottom, ${colors[0]}, ${colors[1]});
    ${Chart};

  `;
};

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;
