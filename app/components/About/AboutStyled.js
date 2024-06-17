import styled, { keyframes } from "styled-components";

const fadeInWithBounce = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-1000px);
    }
    40% {
        opacity: 1;
        transform: translateY(-50px);
    }
    60% {
        transform: translateY(20px);
    }
    80% {
        transform: translateY(-10px);
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
    width: 100%;
    padding: 10% 0;
    overflow-x: hidden;

    .about-img {
        width: 35%;

        .mainQlogo {
            width: 100%;
            height: auto;
            opacity: 0;
            transform: translateY(-100px);
            transition: opacity 1.5s ease-out, transform 1.5s ease-out;
            &.animate {
                animation: ${fadeInWithBounce} 2s ease-out forwards;
            }
        }
    }

    .about-text {
        width: 350px;
        opacity: 0;
        transform: translateY(-100px);
        transition: opacity 1.5s ease-out, transform 1.5s ease-out;
        &.animate {
            opacity: 1;
            transform: translateY(0);
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

    @media (min-width: 900px) {
        .about-text {
            width: 500px;
        }
    }

    @media (min-width: 1500px) {
        padding: 5% 0;
    }

    @media (max-width: 899px) {

        .about-text {
            h1 {
                font-size: 2rem;
            }

            p {
                font-size: 0.8rem;
            }
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
        .about-text {
            align-items: center;
            padding: 0;
            text-align: center;
            display: flex;
            flex-direction: column;

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
