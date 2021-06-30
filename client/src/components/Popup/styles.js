import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  slide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    left: 0,
    right: 0,
    bottom: theme.spacing(5),
  },
  paper: {
    display: "flex",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.success.light,
  },
}));
