import styled, { keyframes } from "styled-components";

const moveFromRight = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const MainContainer = styled.div`
    text-align: center;
    padding: 0 2rem;
    opacity: 0;
    transform: translateY(-50px);
    overflow: hidden;

    &.animate {
        animation: ${fadeIn} 1s cubic-bezier(0.42, 0, 0.58, 1) forwards;
        opacity: 1;
        transform: translateY(0);
    }

    img {
        width: 100%;
        height: auto;
    }

    .main-title {
        .title {
            padding: 12% 0;
            animation: ${fadeIn} 1s ease-out forwards;
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
            animation: ${fadeIn} 1s ease-out forwards;
        }
    }

    .main-image {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        margin: 2% 0;

        .patern {
            max-width: 87%;
            height: auto;
            object-fit: contain;
            animation: ${moveFromRight} 1s ease-out forwards;
        }
    }

    @media (min-width: 1500px) {
        .main-title .title {
            padding: 12% 0;
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
        .main-title .title {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 260px) {
        .main-title p {
            font-size: 1.5rem;
        }
    }
`;
