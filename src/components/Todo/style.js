import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: 10,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default useStyles;
