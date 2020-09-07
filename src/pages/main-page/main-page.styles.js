import styled from "styled-components";

export const OptionsContainer = styled.div`
display: flex;
max-width: 300px;
align-items: center;
`
export const ButtonContainer = styled.div`
height: 50%;
width: 100%;
margin-left: 10px;
`

export const Title = styled.h1`
margin-top: 60px;
@media (max-width: 420px) {
font-size: 1.6rem;
}
`

export const MainPageContainer = styled.div`
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
max-width: 400px;
@media (max-width: 420px) {
max-width: 300px;

}
`