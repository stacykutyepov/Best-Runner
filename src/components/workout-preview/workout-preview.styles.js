import styled from "styled-components";
const lightGrey = '#F5F5F5';
const darkGrey = '#505050';
const orange = '#FF4500';

export const PreviewContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 10px 20px;
  justify-content: space-between;
  width: 300px;
  border-radius: 20px;
  background-color: ${lightGrey};
  color: ${darkGrey};
`;

export const DataContainer = styled.div`
padding: 10px 0px;
display: flex;
justify-content: space-between;
min-width: 260px;
`;

export const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 140px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-height: 104px;
`;

export const CommentText = styled.span`
  padding-top: 5px;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  align-self: flex-start;
`;

export const Text = styled.span`
  font-weight: 500;
`;


export const DistanceNumber = styled.span`
  font-weight: 600;
  font-size: 2.5rem;
  padding-right: 5px;
  color: ${orange};
`

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 290px;
min-height: 270px;
max-height: 300px;
margin-bottom: 10px;
`
