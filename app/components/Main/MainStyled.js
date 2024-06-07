import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    height: 100vh;
    position: relative;

    .main-title {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 10rem;
        p {
            -moz-user-select: -moz-none;
            -o-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            color: #fff;
            font-size: 5rem;
            padding: 0 2rem;
        }
    }

    .main-image {
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;

        .patern {
            width: 100%;
            max-width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    @media (max-width: 1200px) {
        .main-title p {
            font-size: 4rem;
        }
    }

    @media (max-width: 768px) {
        .main-title p {
            font-size: 3.5rem;
            padding: 0 1rem;
        }
    }

    @media (max-width: 576px) {
        .main-title p {
            font-size: 3rem;
            padding: 0 0.5rem;
        }
    }

    @media (max-width: 400px) {
        height: 90vh;
        .main-title p {
            font-size: 2rem;
        }
    }
`;
