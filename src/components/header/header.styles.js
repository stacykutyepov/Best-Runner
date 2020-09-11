import styled from "styled-components"


export const HeaderContainer = styled.div`
width: 100%;
min-height: 700px;
`

export const Wave = styled.section`
& { width: 100%;
min-height: 700px;
position: relative;
background: url("../../assets/workout-2.jpg");
background-size: cover;
background-position: 20% 5%;
background-repeat: no-repeat;

@media (max-width: 420px){
background-position: 50% 5%;
}
}

&:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 235px;
    background: url("../../assets/wave.png");
    background-size: cover;
    background-repeat: no-repeat;
}

&:after{
    content: "";
    position: absolute;
    bottom: 0;
    opacity: 0.6;
    left: 0;
    width: 100%;
    height: 245px;
    background: url("../../assets/wave.png");
    background-size: cover;
    background-repeat: no-repeat;
}
@media (min-width: 1600px) {
    &:before{
    height: 315px;
    }
    &:after{
    height: 325px;
    }
  }
`

export const HeaderTitle = styled.h2`
text-shadow: 1px 1px 1px lightblue;
font: 30px 'Bebas Neue';
`

export const TextContainer = styled.div`
position: absolute;
margin: 40px 0px 0px 80px;
z-index: 2;
`

