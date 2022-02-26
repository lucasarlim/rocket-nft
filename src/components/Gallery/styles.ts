import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, 296px);

    margin: 0 auto;
    grid-gap: 60px 32px;

    > img {
        width: 296px;
        height: 198px;

        border: 1px solid var(--text-color);
    }
`