import { useState, useEffect } from "react";
import * as EmailValidator from "email-validator";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Grid, Paper, Typography, Button } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { signIn, signUp } from "../../redux/actions/auth";
import CustomTextField from "../CustomTextField/customTextField";
import useStyles from "./styles";

const AuthForm = () => {
  const user = useSelector((state) => state.authState.authData);

  const [authData, setAuthData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLogIn, setIsLogIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (user) dispatch(push("/"));
  }, [user]);

  const handleChnage = (e) =>
    setAuthData({ ...authData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!EmailValidator.validate(authData.email)) setEmailError(true);
    else if (emailError) setEmailError(false);
    if (!isLogIn) {
      if (authData.password !== authData.confirmPassword)
        setPasswordError(true);
      else if (passwordError) setPasswordError(false);
    }

    if (!(passwordError && emailError)) {
      if (isLogIn) dispatch(signIn(authData));
      else dispatch(signUp(authData));
    }
  };

  return (
    !user && (
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom>
          {isLogIn ? "Log In" : "Sign Up"}
          <LockIcon className={classes.lockIcon} />
        </Typography>
        <form className={classes.formContainer} onSubmit={handleSubmit}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {!isLogIn && (
              <>
                <CustomTextField
                  name="firstName"
                  label="First Name"
                  placeholder="John"
                  handleChange={handleChnage}
                  autoFocus
                  half
                />
                <CustomTextField
                  name="lastName"
                  label="First Name"
                  placeholder="Doe"
                  handleChange={handleChnage}
                  half
                />
              </>
            )}
            <CustomTextField
              name="email"
              label="Email"
              placeholder="example@dummy.com"
              handleChange={handleChnage}
              error={emailError}
              autoFocus={isLogIn}
            />
            <CustomTextField
              name="password"
              label="Password"
              handleChange={handleChnage}
              type={showPassword ? "text" : "password"}
              handleShowPassword={() => {
                setShowPassword(!showPassword);
              }}
              half={!isLogIn}
            />
            {!isLogIn && (
              <CustomTextField
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChnage}
                error={passwordError}
                half
              />
            )}
            <Button
              className={classes.formItem}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              {" "}
              Submit{" "}
            </Button>
            <Button
              color="secondary"
              size="large"
              onClick={() => setIsLogIn(!isLogIn)}
            >
              {" "}
              {isLogIn ? "Don't have an account?" : "Already have an account"}
            </Button>
          </Grid>
        </form>
      </Paper>
    )
  );
};

export default AuthForm;
