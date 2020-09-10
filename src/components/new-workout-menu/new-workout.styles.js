import styled from "styled-components";

export const FormContainer = styled.div`
position: fixed;
top: 20px;
margin: 20px auto;
box-shadow: 0 2px 8px -3px black;
border-radius: 20px;
background-color: white;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
width: 300px;
height: 420px;
z-index: 5;

@media (max-width: 420px) {
    width: 80vw;
    height: 80vh;
    top: 0;
    padding: 30px 50px 160px 50px;
    padding-bottom: 160px;
    margin: 0;
}

`;

export const NavContainer = styled.div`
display: flex;
align-content: baseline;
justify-content: space-between;
`;

export const Title = styled.span`
font-weight: 600;
`
