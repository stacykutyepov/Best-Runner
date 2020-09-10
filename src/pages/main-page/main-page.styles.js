import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";


export const OptionsContainer = styled.div`
display: flex;
min-width: 320px;
align-items: center;
justify-content: space-between;
`
export const ButtonContainer = styled.div`
display: flex;
align-self: flex-start;

`

export const Title = styled.h1`
margin-top: 60px;
@media (max-width: 420px) {
font-size: 1.6rem;
align-self: flex-start;
}
`

export const MainPageContainer = styled.div`
margin: 60px auto;
display: flex;
flex-direction: column;
align-items: center;
max-width: 400px;
@media (max-width: 420px) {
max-width: 300px;

}
`
export const orangeTheme = createMuiTheme({
    palette: {
        primary: deepOrange,
    },
});