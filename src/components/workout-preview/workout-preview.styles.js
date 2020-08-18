import styled from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  justify-content: space-between;
  max-width: 290px;
  border-radius: 10px;
  box-shadow: 0 2px 8px -3px black;

`;

export const DataContainer = styled.div`
display: flex;
flex-direction: column;
  justify-content: space-between;
  align-items: center; 
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Text = styled.span`
display: block;
  line-height: 1.5rem;
  align-self: flex-start;

`;

export const TextItalic = styled.span`
  font-style: italic;
  font-weight: 600;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 60%;
min-height: 270px;
max-height: 300px;
margin-bottom: 10px;
`
