import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  time: {
    fontSize: 12,
  },
  body: {
    wordBreak: "break-all",
  },
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardItem: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
