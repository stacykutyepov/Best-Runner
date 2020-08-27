import styled from "styled-components"


export const HeaderContainer = styled.div`
width: 100%;
min-height: 1000px;
`

export const Wave = styled.section`
& { width: 100%;
min-height: 600px;
position: relative;
background: url("../../assets/workout-2.jpeg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}

&:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 215px;
    background: url("../../assets/wave.png");
    background-size: cover;
    background-repeat: no-repeat;
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

