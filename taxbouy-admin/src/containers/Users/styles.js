import styled from "styled-components";

export const LoginForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`;

export const FormWrapper = styled.div`
    width: 450px;
    background-color: rgba(255, 255, 255, .9);
    border-radius: 8px;   
    min-height: 300px;
    padding: 50px;
`;

export const PoweredBy = styled.div`
    margin-top: 10px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    h6 {
        display: flex;
    }
    .text1 {
        margin-right: 12px;
    }
    .text2 {
        margin-left: 18px;
    }
`;