import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    -moz-user-select: -moz-none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
        .navbar__logo{
            display: flex;
            align-items: center;
                .navbar__title {
                    font-size: 1.5rem;
                    color: #fff;
                }
        }
        .navbar__menu {
            display: flex;
            align-items: center;
                .navbar__menu-item {
                    list-style: none;
                    text-decoration: none;
                    color: #fff;
                    font-size: 1.3rem;
                    cursor: pointer;
                }
        }
    @media screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
            .navbar__logo {
                margin-bottom: 1rem;
            }
            .navbar__menu {
                text-align: center;
                margin-bottom: 1rem;
                margin-left: 2rem;     
            }
    }
`;