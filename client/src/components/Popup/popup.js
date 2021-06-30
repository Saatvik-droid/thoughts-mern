import { Grid, Paper, Typography, Slide } from "@material-ui/core";

import useStyles from "./styles";

const Popup = ({ actionDone }) => {
  const classes = useStyles();

  return (
    <Slide
      className={classes.slide}
      direction="up"
      in={actionDone}
      mountOnEnter
      unmountOnExit
    >
      <Grid container>
        <Paper className={classes.paper}>
          <Typography>Deleting</Typography>
        </Paper>
      </Grid>
    </Slide>
  );
};

export default Popup;
