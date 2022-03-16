import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-bottom: 8rem;

    > div{
        display: flex;
        flex-direction: column;

        grid-gap: 2rem;
    }
`

export const Title = styled.h1`
    font-size: 3.125rem;
    font-weight: bold;

    margin-bottom: 3rem;
    color: var(--text-color);

    > span {
        font-size: 3.125rem;
        font-weight: bold;

        color: var(--color-logo);
    }

    @media (max-width: 1024px){
        text-align: center;
    }
`

export const Name = styled.h1`
    width: 100%;
    font-size: 1.875rem;
    font-weight: 500;

    color: var(--text-color);
`

export const CardsWrapper = styled.div`
    display: flex; 
    aling-items: center;
    justify-content: space-between;

    width: 100%;
    grid-gap: 2rem;

    flex-wrap: wrap;

    @media (max-width: 1024px) {
        justify-content: center;
        grid-gap: 2rem;
    }
`

export const NFTCard = styled.div`
    width: 100%;
    max-width: 350px;
    display: flex;
    flex-direction: column;
`

export const Infos = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-bottom: 32px;
    grid-gap: 16px;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
    }

    > div span {
        font-size: 1.125rem;
        font-weight: 400;

        color: var(--color-logo)
    }

    > div img {
        width: 20px;
        height: 20px;
    }
`

export const ArtistName = styled.p`
    font-size: 1.125rem;
    font-weight: 500;

    color: var(--subtitle-color);
`

export const Divider = styled.div`
    border: 1px solid var(--color-logo);
    border-radius: 100%;

    @media (max-width: 1024px){
        display: none;
    }
`
