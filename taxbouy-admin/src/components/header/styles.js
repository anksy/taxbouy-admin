import styled from 'styled-components';

export const AppHeader = styled.header`
    display: flex;
    align-items: center;
    height: 64px;
    border-bottom: .5px solid #fefefe;
    background-color: #fff;
    box-shadow: 0 4px 7px 0 rgba(0, 0, 0, .20);
    .parts {
        flex: 2;
        &.lefty {
            padding-right: 60px;
        }
        &.middle {
            flex: .5;
        }
        &.righty{
            flex: .5;
        }
        .icons-nav{
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
`;