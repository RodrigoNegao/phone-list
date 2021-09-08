import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import Todo from "../../components/Todo";
import Form from "../../components/Form";
import FilterBox from "../../components/FilterBox";

const DATA = [
  { name: "Model 1" }, //, checked: true
];

export default function Home() {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [tasks, setTask] = useState([]);

  const taskList = tasks.map((task) => <Todo name={task.name} />);

  function addTask(value) {
    const newTask = { name: value };
    setTask([...tasks, newTask]);
  }

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("1", value);
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTask(value);
      console.log("2", value);
    }
  }

  function handleClick() {
    addTask(value);
    console.log("3", value);
  }

  useEffect(() => {
    setTask(taskList);
  }, [value]);

  return (
    <Container fixed>
      <Grid>
        <Form
          value={value}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onClick={handleClick}
        />
        <FilterBox />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          Agenda
        </Typography>
        <div>{taskList}</div>
      </Grid>
    </Container>
  );
}
