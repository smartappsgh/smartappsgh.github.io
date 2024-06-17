import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center; 
    padding: 0 2rem;
    
    img {
        width: 100%;
        height: auto;

    }

    .main-title {

        .title {
            padding: 40% 0;
        }

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
        bottom: 0; 
        left: 0;
        margin: 2% 0;

        .patern {
            max-width: 87%;
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
        .main-title p {
            font-size: 2.5rem;
            padding: 0 1rem;
        }
    }

    @media (max-width: 576px) {
        .main-title p {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 400px) {
        .main-title p {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 260px) {
        .main-title p {
            font-size: 1.5rem;
        }
    }
`;
