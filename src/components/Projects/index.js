import React, { Component } from "react";
import { v4 as uuid } from "uuid";

import "./index.css";
import ProjectItems from "../ProjectItems";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      text: "",
      name: "Ramesh",
      todos: [],
      newTodo: {
        id: "",
        category: "threeD",
        title: "",
        description: "",
        videoLink: "",
      },
      removeStatus: false,
    };
  }

  componentDidMount() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.setState({ todos: JSON.parse(savedTodos) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newTodo: {
        ...prevState.newTodo,
        [name]: value,
      },
    }));
  };

  addTodo = () => {
    const { newTodo, todos } = this.state;
    const { category, title, description, videoLink } = newTodo;
    const id = uuid();
    if (title.trim() !== "") {
      this.setState({
        todos: [...todos, { id, category, title, description, videoLink }],
        newTodo: { category: "", title: "", description: "", videoLink: "" },
      });
    }
  };

  removeTodo = (index) => {
    const { todos } = this.state;
    console.log(index);
    const updatedTodos = todos.filter((i) => i.id !== index);
    this.setState({ todos: updatedTodos });
  };

  CheckMail = (e) => {
    this.setState({ text: e.target.value });
  };

  CheckCred = () => {
    const { text, name } = this.state;
    if (text === name) {
      this.setState({ status: true, removeStatus: true });
    }
  };

  render() {
    const { todos, status, removeStatus } = this.state;
    return (
      <div className="project-container">
        <input
          placeholder="Enter Password"
          onChange={this.CheckMail}
          type="text"
        />
        <button onClick={this.CheckCred} type="button">
          Click
        </button>
        <h2 className="project-text">Projects</h2>
        {status ? (
          <div className="card">
            <select
              name="category"
              value={this.state.newTodo.category}
              onChange={this.handleInputChange}
            >
              <option value="threeD">3D Design</option>
              <option value="Graphics">Graphics</option>
              <option value="Movie">Movie</option>
            </select>
            <input
              type="text"
              name="title"
              value={this.state.newTodo.title}
              onChange={this.handleInputChange}
              placeholder="Enter a task title"
            />
            <br />
            <input
              type="text"
              name="description"
              value={this.state.newTodo.description}
              onChange={this.handleInputChange}
              placeholder="Enter a task description"
            />
            <br />
            <input
              type="text"
              name="videoLink"
              value={this.state.newTodo.videoLink}
              onChange={this.handleInputChange}
              placeholder="Enter a video link"
            />
            <br />
            <button onClick={this.addTodo}>Add Task</button>
          </div>
        ) : null}

        <ProjectItems
          removeTodo={this.removeTodo}
          todos={todos}
          removeStatus={removeStatus}
        />
      </div>
    );
  }
}

export default Projects;
