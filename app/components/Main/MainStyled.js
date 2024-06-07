import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center; 
    height: 87vh;
    padding: 0 2rem;
    position: relative;

    .main-title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%; 
        position: absolute;
        bottom: 10%;
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
        display: flex;
        justify-content: center;
        align-items: flex-end; 
        width: 100%;
        height: 100%; 
        position: absolute;
        bottom: 0; 
        left: 0;

        .patern {
            max-width: 90%;
            height: auto; 
            object-fit: contain;
        }
    }

    @media (max-width: 1200px) {
        .main-title p {
            font-size: 3rem;
        }
    }

    @media (max-width: 768px) {
        height: 60vh;

        .main-title p {
            font-size: 2.5rem;
            padding: 0 1rem;
        }
    }

    @media (max-width: 576px) {
        .main-title p {
            font-size: 1.8rem;
            padding: 0 1.5rem;
        }
    }

    @media (max-width: 400px) {
        height: 50vh;
        .main-title p {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 260px) {
        height: 40vh;
        .main-title p {
            font-size: 1.5rem;
        }
    }
`;
