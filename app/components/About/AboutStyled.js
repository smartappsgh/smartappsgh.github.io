import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-300px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const AboutContainer = styled.div`
    display: flex;
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
            opacity: 0;
            transform: translateY(-100px);
            transition: opacity 1s ease-out, transform 1.5s ease-out;
            &.animate {
                animation: ${fadeIn} 1s ease-out forwards;
            }
        }
    }

    .about-text {
        width: 500px;
        opacity: 0;
        transform: translateY(-100px);
        transition: opacity 1s ease-out, transform 1.5s ease-out;
        &.animate {
            animation: ${fadeIn} 1s ease-out forwards;
        }

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
        .about-text h1 {
            font-size: 2.5rem;
        }

        .about-text p {
            font-size: 1.1rem;
            max-width: 85%;
        }
    }

    @media (max-width: 899px) {
        min-height: 80vh;
        padding-bottom: 5rem;

        .about-text {
            justify-content: center;
            flex-wrap: wrap;
            padding-left: 6rem;

            h1 {
                font-size: 2rem;
            }

            p {
                font-size: 0.8rem;
                max-width: 80%;
            }
        }
    }

    @media (max-width: 400px) {
        .about-text {
            padding-left: 5rem;

            h1 {
                font-size: 1rem;
            }

            span {
                font-size: 0.7rem;
            }
            p {
                font-size: 0.7rem;
                max-width: 70%;
            }
        }
    }

    @media (max-width: 250px) {
        .about-text {
            padding-left: 4rem;

            h1 {
                font-size: 0.8rem;
            }

            p {
                font-size: 0.6rem;
                max-width: 60%;
            }
        }
    }
`;
