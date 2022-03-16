import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    grid-gap: 24px;

    width: 100%;
    height: 50px;

    padding: 48px 3rem;

    .logo{
        min-width: 96px;
    }

    .sidebarIcon{
        display: none;
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        > button{
            display:none;
        }

        .sidebarIcon{
            display: flex;
        }
    }
`


export const Pages = styled.div`
    display: flex;
    align-items: center;

    grid-gap: 32px;

    @media (max-width: 1024px) {
        display: none;
    }
`

export const NavLink = styled(Link)`
    position: relative;

    font-size: 1.125rem;

    text-decoration: none;
    color: var(--text-color);
    cursor: pointer;

    transition: 0.3s ease-out;

    &::before {
      position: absolute;
      width: 0%;
      height: 3px;

      background-color: var(--color-logo);

      left: 0;
      bottom: -10px;
      content: '';

      transition: width 0.3s ease-out;
    }

    &:hover {
        color: var(--color-logo);

        &::before {
          width: 100%;
          display: inline;
        }
    }

    &.active {
      color: var(--color-logo);
      font-weight: bold;

      &::before {
        width: 100%;
        display: inline;
      }

    }
`

