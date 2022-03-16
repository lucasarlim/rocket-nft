import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 296px);

    grid-gap: 60px 32px;

    > img {
        width: 100%;
        height: auto;

        border: 1px solid var(--text-color);
    }

    @media (max-width: 425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`