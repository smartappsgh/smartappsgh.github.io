import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    height: 100vh;
    padding: 0 2rem;
        .about-img {
            display: flex;
            flex: 1 1 400px;
            justify-content: center;
            align-items: center;
            .mainQlogo {
                width: 100%;
                max-width: 100%;
                height: auto;
                object-fit: contain;
            }
        }
        .about-container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1 1 400px;
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
                        margin: 1rem 0;
                        line-height: 1.5;
                        text-align: justify;
                    }
                }
    }

    @media (max-width: 1400px) {
        justify-content: center;
        align-items: center;
        height: auto;
            .mainQlogo {
                width: 100%;
                max-width: 400px;
                height: auto;
                object-fit: contain;    
            }
            .about-container {
                max-width: 70%;
                .about-text {
                    text-align: left;
                    margin-top: 6rem;
                    margin-bottom: 10rem;
                        span {
                            font-size: 1rem;
                        }
                        h1 {
                            font-size: 2rem;
                        }
                        p {
                            font-size: 1rem;
                        }
                }
                .linesPatern {
                    display: none;
                }
            }
    }
    @media screen and (max-width: 768px) {
        height: auto;
        .about-container {
            max-width: 400px;
            margin-bottom: 2rem;
            .about-text {
                margin: 0;
                h1 {
                    font-size: 2rem;
                }
                p {
                    font-size: 1rem;
                }
            }
        }
    }
    @media screen and (max-width: 460px) {
        height: auto;
            .mainQlogo {
                max-width: 300px;
            }
        .about-container {
            max-width: 300px;
            padding: 1rem;
            .about-text {
                h1 {
                    font-size: 1.5rem;
                }
                p {
                    font-size: 1rem;
                }
            }
        }
    }
`;
