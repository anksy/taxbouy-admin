import styled from 'styled-components';

export const AppWrapper = styled.div`
    &.login-bg {
        background-image: url(https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/gallery/flat-bg.jpg);
        height: 100vh;
        background-size: cover;
        background-position: center center;
    }
`;

export const AppContent = styled.div`
        position: relative;
        left: 280px;
        width: calc(100% - 280px);
`;

export const AppMainContent = styled.div`
        padding: 20px;
        height: 100vh;
`;