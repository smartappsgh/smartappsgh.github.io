import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    //flex-wrap: wrap;
    justify-content: center;
    gap: 10%;
    align-items: center;
    background-color: #fff;
    min-height: 100vh; 
    width: 100%;
    padding-bottom: 5rem; 

    .about-img {
        width: 35%;

        .mainQlogo {
            width: 100%;
            height: auto;
        }
    }

    .about-text {
        width: 500px;

        span {
           color: #cdd500;
           font-size: 1.3rem;
           text-transform: uppercase;
           font-weight: 700;
        }

        h1 {
           color: #000;
           font-size: 2.5rem;
           margin: 1rem 0;
           max-width: fit-content;
        }

        p {
           color: #000;
           font-size: 1.3rem;
           max-width: 95%;
           line-height: 1.5;
           text-align: justify;
        }
    }

    @media (max-width: 1200px) {
        .about-img {
            max-width: 50%;
        }
        .about-container .about-text h1 {
            font-size: 2.5rem;
        }

        .about-container .about-text p {
            font-size: 1.1rem;
            max-width: 85%;
        }
    }

    @media (max-width: 899px) {
        min-height: 80vh;
        padding-bottom: 5rem;

        .about-container {
            justify-content: center;
            flex-wrap: wrap;
            padding-left: 6rem;

            .about-text h1 {
                font-size: 2rem;
            }

            .about-text p {
                font-size: 0.8rem;
                max-width: 80%;
            }
        }   
    }

    @media (max-width: 400px) {
        
        .about-container {
            padding-left: 5rem;

            .about-text h1 {
                font-size: 1rem;
            }

            .about-text span {
                font-size: 0.7rem;
            }
            .about-text p {
                font-size: 0.7rem;
                max-width: 70%;
            }
        }
    }

    @media (max-width: 250px) {
        .about-container {
            padding-left: 4rem;

            .about-text h1 {
                font-size: 0.8rem;
            }

            .about-text p {
                font-size: 0.6rem;
                max-width: 60%;
            }
        }
    }
`;
