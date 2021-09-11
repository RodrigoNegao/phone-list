import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Checkbox,
  Box,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import useStyles from "./style";

export default function Todo(props) {
  const { id, name } = props;
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <ListItem className={classes.root} id={id} key={id}>
        <Checkbox checked={checked} onChange={handleChange} />
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
        <Button variant="contained" className={classes.button}>
          Editar
        </Button>
        <Button variant="contained" className={classes.button}>
          Deletar
        </Button>
      </ListItem>
      {/* <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            Eat
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li> */}
    </>
  );
}
