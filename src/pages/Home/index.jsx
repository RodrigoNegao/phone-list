import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import Todo from "../../components/Todo";
import Form from "../../components/Form";
import FilterBox from "../../components/FilterBox";

export default function Home() {
  const classes = useStyles();

  const [title, setTitle] = useState("");
  const [tasks, setTask] = useState([]);

  const taskList = tasks.map((task) => <Todo id={task.id} name={task.name} />);

  function addTask(title) {
    const newTask = { id: "todo-" + nanoid(), name: title };
    setTask([...tasks, newTask]);
  }

  console.log('tasks>>',tasks)

  const handleChange = (e) => {  
    setTitle(e.target.value);
    console.log("1", title);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask(title);
      console.log("2", title);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    addTask(title);
    console.log("3", title);
  }


  // const markup = useCallback(
  //   (count) => {
  //     const stringCountCorrection = count + 1;
  //     return (
  //       // Some markup that references the sections prop
  //     );
  //   },
  //   [count, /* and any other dependencies the react linter suggests */]
  // );

  // useEffect(() => {
  //   setTask(taskList);
  // },[title]);

  // useEffect(() => {
  //   if (taskList.length) {
  //       setTask(taskList);   // YOU CAN USE IT TO SET SOME OTHER STATE
  //    }    
  // },[title,taskList]);

  return (
    <Container fixed>
      <Grid>
        <Form
          value={title}
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
