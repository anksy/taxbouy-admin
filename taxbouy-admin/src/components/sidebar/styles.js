import styled from 'styled-components';

export const StyledSidebar = styled.aside`
    position: fixed;
    top: 0;
    left:0;
    z-index: 999;
    width: 280px;
    height: 100%;
    background: #0f152d; //linear-gradient(45deg,#6200ea,#1976d2)!important;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .56), 0 4px 25px 0px rgba(0, 0, 0, .12);
    
    .sidenav {
        top: 64px;
        overflow-y: auto;
        height: 100%;
        padding-bottom: 65px;
        -webkit-transition: auto!important;
        transition: auto!important;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: transparent;
        border: none;
        left: 0;
        width: inherit;
        box-shadow: 0 4px 7px 0 rgba(0, 0, 0, .20);
        z-index: 999;
        will-change: transform;
        margin: 10px 0 30px;

        &::-webkit-scrollbar-track
        {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 10px;
        }

        &::-webkit-scrollbar{
            width: 8px;
        }

        &::-webkit-scrollbar-thumb{
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #555;
        }

        &.sidenav-fixed {
            position: fixed;
        }

        li {
            &.navigation-header {
                font-size: .85rem;
                font-weight: 600;
                margin-top: 10px;
                padding: 0 23px;
                text-transform: uppercase;
                user-select: none;
                letter-spacing: 1px;
            }

            a {
                margin-right: 1.15rem;
                padding: 0 0 0 21px!important;
                color: #fff;
                line-height: 44px;
                height: 44px;
                display: flex;
                text-decoration: none;
                &.active {
                    background: linear-gradient(45deg,#0288d1,#26c6da)!important;
                    border-radius: 0 25px 25px 0;
                }
            }

            &.bold {
                cursor: pointer;

                a {
                    &:hover {
                        background: linear-gradient(45deg,#43a047,#1de9b6)!important;
                        border-radius: 0 25px 25px 0;
                    }
                }
            }
        }

        svg {
            line-height: 44px;
            height: 44px;
            margin: 0 15px 0 0;
        }
        .menu-title {
            visibility: visible;
            -webkit-transition: opacity .2s linear;
            transition: opacity .2s linear;
            opacity: 1;
        }
    }
`;

export const BrandSidebar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 64px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    width: inherit;
    border-bottom: .5px solid #3e3e3e;

    .brand-logo {
        font-size: 2.1rem;
        line-height: 0;
        position: absolute;
        display: inline-block;
        margin: 1px 0;
        padding: 22px 12px 22px 22px;
        color: #333;
    }

    span.logo-text {
        font-size: 24px;
        visibility: visible;
        padding-left: 8px;
        -webkit-transition: opacity .2s linear;
        transition: opacity .2s linear;
        opacity: 1;
        color: #fff;
        small {
            font-size: 12px;
        }
    }
`;