import React from "react";
import { TextField, Button, Box } from "@material-ui/core";
import useStyles from "./style";

export default function Form(props) {
  const { value, onKeyPress, onChange, onClick } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TextField
        id="standard-basic"
        label="Agenda"
        value={value}
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
      <Button variant="contained" onClick={onClick}>
        Adicionar
      </Button>
    </Box>
  );
}
