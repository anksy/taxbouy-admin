import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { store } from "./store";
import Routes from "./routes";
import "./styles/global.scss";
import themeDefaults from "./styles/theme";


const theme = createTheme(themeDefaults);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                    <Router basename={process.env.REACT_APP_BASENAME}>
                        <Routes />
                    </Router>
                </StyledThemeProvider>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
