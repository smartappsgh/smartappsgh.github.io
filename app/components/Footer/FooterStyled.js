import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    margin: 1% 9%;
    align-items: center;
    padding: 1rem 2rem;
    -moz-user-select: -moz-none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    
        .footer__logo{
            display: flex;
            align-items: center;
                
                .footer__title {
                    font-size: 1.3rem;
                    color: #fff;
                }
        }
        
        .footer__text {
            color: #777;
            font-size: 1rem;
            text-align: center;
        }

        .footer__logo-email {
           
                .footer__img-email {
                    width: 180px;
                    height: auto;
                }
        }

    @media screen and (max-width: 1200px) {
        flex-direction: column;
            .footer__logo {
            
                margin-bottom: 1rem;
            }
            .footer__text {
                text-align: center;
                margin-bottom: 1rem;
            }
    }
`;