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
                .navbar__img {
                    width: 50px;
                    height: 50px;
                }
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
                        a {
                            text-decoration: none;
                            color: #fff;
                            font-size: 1.3rem;
                        }
                }
        }
        
`;