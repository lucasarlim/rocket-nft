import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50px;

    padding: 48px 0px;
`

export const Pages = styled.div`
    display: flex;
    align-items: center;

    grid-gap: 32px;

    > a {
        font-size: 1.125rem;

        text-decoration: none;
        color: var(--text-color);
    }
`

export const ButtonMetamask = styled.div`
    display: flex;
    align-items: center;

    padding: 10px 16px;
    cursor: pointer;

    background-color: var(--text-color);

    > span {
        font-size: 1rem;
        font-weight: bold;

        margin-left: 16px;

        color: var(--black-text);
    }
`
