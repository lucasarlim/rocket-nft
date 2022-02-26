import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    grid-gap: 40px;
    margin: 83px 0 100px 0;
`

export const Title = styled.h1`
    font-size: 3.125rem;
    font-weight: bold;

    line-height: 120%;
    color: var(--text-color);

    > strong {
        font-size: 3.125rem;
        font-weight: bold;

        color: var(--color-logo);
    }
`

export const DescriptionContent = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;

    > p {
        font-size: 1.125rem;
        font-weight: 400;

        line-height: 150%;
        color: var(--text-color);
    }
`
export const ArtistsContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    grid-gap: 4px;

    > img {
        width: 169px;
        height: 88px;
    }

    > div {
        display: flex;
        flex-direction: column;

        width: 100%;
        grid-gap: 1rem;
    }

    > div span {
        width: 100%;

        font-size: 1.125rem;
        font-weight: bold;

        color: var(--text-color);
    }

    > div p {
        width: 100%;

        font-size: 1.125rem;
        font-weight: 400;

        color: var(--text-color);
    }
`
