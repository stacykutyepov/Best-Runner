import styled from "styled-components";

export const IconContainer = styled.div`
margin: 70px 20px 0px 0px;
&:last-child{
margin: 70px 0px 0px 0px;
}
display: flex;
align-items: center;
align-content: center;
flex-direction: column;
height: 200px;
width: 200px;
border-radius: 50%;
border: 8px solid lightblue;

@media (max-width: 596px) {
    &:first-child {
    margin-top: 20px;
    }
    margin-top: 90px;
}

&:hover {
-webkit-box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 1);
-moz-box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 1);
box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 1);
}

`
export const Image = styled.img`
width: 120%;
height: 120%;
border-radius: 50%;

`
export const Title = styled.h3`
margin: 0px;
`