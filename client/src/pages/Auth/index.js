import { Grid } from "@material-ui/core";

import AuthForm from "../../components/AuthForm/form";
import useStyles from "./styles";

const AuthPage = () => {
  const classes = useStyles();

  return (
    <Grid justify="center" container>
      <Grid item xs={11} sm={8} md={6}>
        <AuthForm />
      </Grid>
    </Grid>
  );
};

export default AuthPage;
