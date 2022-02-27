import styled from 'styled-components';

export const AppFooter = styled.footer`
    display: flex;
    align-items: center;
    height: 64px;
    border-bottom: .5px solid #fefefe;
    background-color: #fff;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, .20);
    position: fixed;
    width: calc(100% - 280px);
    bottom: 0;
    left: 280px;
    text-align: center;

    .parts {
        flex: 1;
        .icons-nav{
            display: flex;
            justify-content: flex-end;
        }
    }
`;