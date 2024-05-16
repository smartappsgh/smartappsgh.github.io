import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    height: 100vh;
    padding: 2rem;
        .main-title {
            width: 70%;
            padding: 5rem;
            color: #fff;
            font-size: 6rem;
                p {
                    -moz-user-select: -moz-none;
                    -o-user-select: none;
                    -khtml-user-select: none;
                    -webkit-user-select: none;
                    user-select: none;
                }
        }
        .patern {
            width: 100%;
            max-width: 100%;
            height: 100%;
            object-fit: contain;
        }
@media (max-width: 1024px) {
    height: auto;
        .main-title {
            font-size: 5rem;
        }
}
@media (max-width: 768px) {
    height: auto;
        .main-title {
            width: 100%;
            font-size: 3.5rem;
        }
}
@media screen and (max-width: 500px){
    padding: 0;
    height: auto;
        .main-title {
            font-size: 2rem;
        }
}
`;