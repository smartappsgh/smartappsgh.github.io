import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 100vh;

    .about-img {
        display: flex;
        flex: 1 1 400px;
        justify-content: center;
        align-items: center;

        .mainQlogo {
            width: 100%;
            max-width: 80%;
            height: auto;
            object-fit: contain;
        }
    }

    .about-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 1 500px;
        flex-direction: row;

        .about-text {
            text-align: left;
            max-width: 500px;

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
                line-height: 1.5;
                text-align: justify;
            }
        }
    }

    @media (max-width: 1200px) {
        .about-container .about-text h1 {
            font-size: 2.5rem;
        }

        .about-container .about-text p {
            font-size: 0.9rem;
            max-width: 90%;
        }
    }

    @media (max-width: 899px) {
        .about-img {
            max-width: 70%;
        }
        .about-container {
            flex-direction: column;
            text-align: center;
            max-width: 70%;
            .about-text {
                max-width: 100%;
                margin-left: 5rem;
                padding: 0 1rem;
            }
        }

        .about-container .about-text h1 {
            font-size: 2rem;
        }

        .about-container .about-text p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        height: 90vh;
        .about-container {
            flex-direction: column;
            text-align: center;

            .about-text {
                max-width: 100%;
                padding: 0 1rem;
            }
        }

        .about-container .about-text h1 {
            font-size: 1.75rem;
        }

        .about-container .about-text p {
            font-size: 0.85rem;
        }
    }

    @media (max-width: 576px) {
        .about-container { 
            .about-text {
                margin-left: 3rem;
            }
        }

        .about-container .about-text p {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 400px) {
        .about-container .about-text h1 {
            font-size: 1.25rem;
        }

        .about-container .about-text p {
            font-size: 0.75rem;
        }
    }
`;
