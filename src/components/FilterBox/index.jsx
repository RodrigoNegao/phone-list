import React from "react";
import { Button, Box } from "@material-ui/core";
import useStyles from "./style";

export default function FilterBox() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button variant="contained" className={classes.button}>
        Mostrar Tudo
      </Button>
      <Button variant="contained" className={classes.button}>
        Mostrar os Ativos
      </Button>
      <Button variant="contained" className={classes.button}>
        Mostrar os Completos
      </Button>
    </Box>
  );
}
