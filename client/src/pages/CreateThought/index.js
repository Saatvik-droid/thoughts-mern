import { Grid } from "@material-ui/core";

import ThoughtsForm from "../../components/ThoughtsForm/form";
import useStyles from "./styles";

const CreateThoughtPage = () => {
  const classes = useStyles();

  return (
    <Grid justifyContent="center" container>
      <Grid item xs={11} sm={8} md={6}>
        <ThoughtsForm />
      </Grid>
    </Grid>
  );
};

export default CreateThoughtPage;
