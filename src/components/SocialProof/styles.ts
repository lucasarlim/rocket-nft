import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 195px auto ;
    grid-template-areas: 
        "NS TS TS"
        "NS BS BS";

    margin-bottom: 8rem;
    
    > img {
        grid-area: BS;
    }

    @media (max-width: 1024px) {
        grid-template-columns: auto;
        grid-template-areas: 
        "NS"
        "TS";

        > img {
            display: none;
        }
    }
`

export const News = styled.div`
    display: flex;
    flex-direction: column;

    padding: 3.5rem 3rem;

    > p { 
        width: 100%;
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 150%;

        color: var(--text-color);

        > a {
            color: var(--color-logo);
        }
    }

    > a {
        margin-top: 4rem;
        color: var(--text-color);
    }
`

export const NumbersSection = styled.div`
    grid-area: NS;
    grid-gap: 56px;

    display: flex;
    flex-direction: column;
    aling-items: center;
    justify-content: center;

    width: 100%;
    padding: 0px 64px 0px 0px;

    border: 1px solid var(--subtitle-color);
    border-style: none solid none none;

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;


        > strong {
            width: 100%;

            font-size: 3.125rem;
            font-weight: bold;
            text-align: center;

            color: var(--text-color);
        }

        > p {
            width: 100%;

            font-size: 1.25rem;
            font-weight: 500;
            text-align: center;

            color: var(--subtitle-color);
        }
    }

    @media (max-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        border: 0px solid;
        padding: 24px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const NewsSection = styled.div`
    width: 100%;

    grid-area: TS;

    display: flex;
    margin-right: 80px;

    @media (max-width: 1024px) {
        margin: 0px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`
