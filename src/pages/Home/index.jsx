import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import Todo from "../../components/Todo";
import Form from "../../components/Form";
import FilterBox from "../../components/FilterBox";

const DATA = [
  { name: "Model 1" }, //, checked: true
];

const taskList = DATA.map((task) => <Todo name={task.name} />);

export default function Home() {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [dense, setDense] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("1", value);
  };

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setValue(value);
      console.log("2", value);
    }
  }

  function handleClick() {
    setValue(value);
    console.log("3", value);
  }

  return (
    <Container fixed>
      <div>
        <h1>Home</h1>
        <h2>lista</h2>
        <h2>hooks</h2>
      </div>
      <Grid>
        <h1>TodoMatic</h1>
        <form>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span>all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span>Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          <Todo />
        </ul>
      </Grid>
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
