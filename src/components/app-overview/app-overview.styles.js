import styled from "styled-components";

export const AppOverviewContainer = styled.section`
display: flex;
align-items: center;
flex-wrap: wrap;
width: 100%;
justify-content: center;

@media (max-width: 596px) {
align-content: center;
justify-content: center;
}
`
export const OverviewContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 70%;
min-height: 570px;
margin: 60px auto ;
`

export const IllustrationContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
justify-content: space-between;
margin-top: 140px;
width: 500px;
height: 500px;

@media (max-width: 596px) {
width: 100%;
}
`

export const DropContainer = styled.div`
width: 160px;
height: 150px;
display: flex;
padding: 20px;
align-items: center;
justify-content: center;
background-color: lightblue;
border-radius: 75% 18% 58% 36% / 59% 17% 78% 34% ;
`

export const HeaderTitle = styled.h2`
text-align: center;
margin-bottom: 0px;
text-shadow: 1px 1px 1px lightblue;
font: 30px 'Bebas Neue';
`


export const ButtonContainer = styled.div`
margin-top: 60px;
`