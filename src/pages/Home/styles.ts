import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    overflow-x: hidden;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: auto;

    padding: 0px 3rem;
`

export const BackgroundWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    background-image: url("/src/assets/images/background.png");
`