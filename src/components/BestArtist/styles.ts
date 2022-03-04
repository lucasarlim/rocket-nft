import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 148px;
`

export const Title = styled.h1`
    font-size: 3.125rem;
    font-weight: bold;

    margin-bottom: 120px;
    color: var(--text-color);

    > strong {
        font-size: 3.125rem;
        font-weight: bold;

        color: var(--color-logo);
    }
`

export const CardsArtists = styled.div`
    width: 100%;
    height: auto;

    display: flex;
    aling-items: center;
    justify-content: center;

    flex-wrap: wrap;
    grid-gap: 115px;
    
`

export const ExploreButton = styled.div`
    display: flex;
    align-items: center;

    cursor: pointer;
    padding: 10px 16px;
    margin-top: 56px;

    > span {
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--text-color);
    }

    > img {
        margin-left: 13px;
    }

    &: hover {
        background-color: var(--card-color);
    }
`

export const Artist = styled.div`
    display: flex;
    aling-items: center;

    background-color: var(--card-color);

    padding: 24px;

    > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        grid-gap: 8px;

        margin-left: 2.5rem;
        
        > span {
            width: 100%;

            font-size: 1.125rem;
            font-weight: 500;

            color: var(--text-color)
        }

        > p {
            width: 100%;

            font-size: 1.125rem;
            font-weight: 500;

            color: var(--color-logo)
        }
    }

    &: hover{
        background-color: var(--color-logo);

        > div p {
            color: var(--text-color);
        }
    }
`
