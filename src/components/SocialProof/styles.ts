import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 195px auto;
    grid-template-areas: 
        "NS TS TS"
        "NS BS BS";

    margin-bottom: 150px;
    
    > img {
        grid-area: BS;
    }
`

export const News = styled.div`
    display: flex;
    flex-direction: column;

    padding: 72px 64px;

    > p { 
        font-size: 1.125rem;
        font-weight: 400;
        line-height: 150%;

        color: var(--text-color);

        > a {
            color: var(--color-logo);
        }
    }

    > a {
        margin-top: 64px;
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
        display: flex;
        flex-direction: column;

        > strong {
            width: 100%;

            font-size: 3.125rem;
            font-weight: bold;
            text-aling: center;

            color: var(--text-color);
        }

        > p {
            width: 100%;

            font-size: 1.25rem;
            font-weight: 500;
            text-aling: center;

            color: var(--subtitle-color);
        }
    }
`

export const NewsSection = styled.div`
    grid-area: TS;

    display: flex;
    aling-img: center;
    margin-right: 80px;
`
