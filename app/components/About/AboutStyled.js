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
                    width: 50%;
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                    align-self: flex-start;
                    margin-top: -12rem;
                    margin-right: -5rem;
                }
    }

    @media (max-width: 1400px) {
        justify-content: center;
        align-items: center;
        height: auto;
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
                        margin-bottom: 2rem;
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
