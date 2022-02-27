import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Grid, Typography, FormControl, FormHelperText } from "@material-ui/core";
import Button from "../../components/form/Button";
import { loginApi } from "../../apis";
import { displayToastMessage, toggleLoader } from "../../store/common/application.slice";
import { FormWrapper, LoginForm, PoweredBy } from "./styles";

const validationSchema = yup.object({
    username: yup
        .string('Enter your username')
        .required('Username is required'),
    password: yup
        .string('Enter your password')
        .min(6, 'Password should be of minimum 6 characters length')
        .required('Password is required'),
});

const Login = () => {
    const dispatch = useDispatch();

    const onFormSubmit = useCallback((values) => {
        dispatch(toggleLoader(true));

        loginApi(values)
            .then(({ data: { token, user } }) => {
                dispatch(toggleLoader(false));
                /* set token */
                localStorage.setItem('token', token);
                /* set user profile */
                localStorage.setItem('profile', JSON.stringify(user));
                /* redirect to dashboard */
                // console.log(history);
                window.location.reload();
            })
            .catch(error => {
                dispatch(toggleLoader(false));
                dispatch(displayToastMessage({
                    open: true,
                    type: "error",
                    message: error.message
                }));
            });
    }, [dispatch]);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            onFormSubmit(values);
        }
    });
    return (
        <LoginForm>
            <FormWrapper>
                <Grid>
                    <Typography variant="h5" align="left">
                        Log In
                    </Typography>
                </Grid>

                <form onSubmit={formik.handleSubmit}>
                    <Grid className="mt2">
                        <FormControl fullWidth>
                            <div className="form-row">
                                <TextField
                                    label="Username"
                                    fullWidth
                                    id="username"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    error={formik.touched.username && Boolean(formik.errors.username)}
                                    helperText={formik.touched.username && formik.errors.username}
                                />
                            </div>

                            <div className="form-row plus2">
                                <TextField
                                    fullWidth
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                />
                            </div>

                            <div className="form-row text-center m0">
                                <Button variant="contained" color="primary" fullWidth type="submit">Log in</Button>
                            </div>

                        </FormControl>

                        <FormHelperText className="text-center">
                            <br />
                            Forgot your credentials? Contact to customer support to get your Username or Password.
                        </FormHelperText>
                    </Grid>
                </form>

            </FormWrapper>

            <PoweredBy>
                <Typography variant="h6">
                    <span className="text1">&nbsp;&nbsp;Made with</span>
                    <p style={{ position: "relative" }}>
                        <span className="heart"></span>
                    </p>
                    <span className="text2">&nbsp;By Ninealgo</span>
                </Typography>
                <img src="https://ninealgo.com/images/ninelogo-white.png" width="80" alt="ninealgo" />
            </PoweredBy>
        </LoginForm>
    );
}

export default withRouter(Login);