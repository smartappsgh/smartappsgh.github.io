import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    background-color: #fff;
    height: 100vh;

    .mainQlogo {
        width: 50%;
        max-width: 100%;
        height: auto;
        object-fit: contain;
        flex: 1 1 600px;
    }

    .about-container {
        display: flex;
        flex: 1 1 600px;
        justify-content: center;
        align-items: center;
        flex-direction: row;
 
        .about-text {
            text-align: left;

            span {
                color: #cdd500;
                font-size: 1rem;
                text-transform: uppercase;
                font-weight: 700;
            }

            h1 {
                color: #000;
                font-size: 3rem;
                margin: 1rem 0;
            }

            p {
                color: #000;
                font-size: 1rem;
                margin: 1rem 0;
                line-height: 1.5;
                text-align: justify;
            }
        }

        .linesPatern {
            width: 60%;
            max-width: 100%;
            height: auto;
            object-fit: contain;
            align-self: flex-start;
            margin-top: -12rem;
            margin-right: -5rem;
        }
    }

    @media (max-width: 1200px) {
        justify-content: center;
        align-items: center;
        .mainQlogo {
            width: 100%;
            max-width: 500px;
            height: auto;
            object-fit: contain;
            
        }

        .about-container {
           max-width: 400px;
            .about-text {
                text-align: left;
            }

            .linesPatern {
               display: none;
            }
        }
    }
    
`;
