import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 150px;

    > div{
        display: flex;
        flex-direction: column;

        grid-gap: 32px;
    }
`

export const Title = styled.h1`
    font-size: 3.125rem;
    font-weight: bold;

    margin-bottom: 120px;
    color: var(--text-color);

    > span {
        font-size: 3.125rem;
        font-weight: bold;

        color: var(--color-logo);
    }
`

export const Name = styled.h1`
    font-size: 1.875rem;
    font-weight: 500;

    color: var(--text-color);
`

export const CardsWrapper = styled.div`
    display: flex; 
    aling-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
`

export const NFTCard = styled.div`
    display: flex;
    flex-direction: column;
`

export const Infos = styled.div`
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
`

export const ArtistName = styled.p`
    font-size: 1.125rem;
    font-weight: 500;

    color: var(--subtitle-color);
`

export const Divider = styled.div`
    border: 1px solid var(--color-logo);
    border-radius: 100%;
`
