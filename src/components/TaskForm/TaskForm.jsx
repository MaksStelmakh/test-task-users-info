import { useState } from "react";
import {
  TasksContainer,
  UpperBlock,
  TasksList,
  TaskStatus,
} from "./TaskForm.styled";
import { Scrollbars } from "react-custom-scrollbars-2";

const TaskForm = () => {
  const [tasks, setTasks] = useState([
    { name: "Finish ticket update", stage: "urgent" },
    { name: "Create new ticket example", stage: "new" },
    { name: "Update ticket report", stage: "default" },
  ]);

  const handleSubmit = (el) => {
    el.preventDefault();
    const newTask = { name: `${el.target.taskName.value}`, stage: "default" };
    setTasks([newTask, ...tasks]);
    el.target.reset();
  };
  return (
    <TasksContainer>
      <UpperBlock>
        <div>
          <p>Tasks</p>
          <p>Today</p>
        </div>
        <button type="button">View all</button>
      </UpperBlock>
      <form onSubmit={(el) => handleSubmit(el)}>
        <input type="text" name="taskName" placeholder="Create new task" />
        <button type="submit">+</button>
      </form>
      <TasksList>
        <Scrollbars autoHeight>
          {tasks.map((task) => {
            return (
              <li key={task.name}>
                <div>
                  <label>
                    {task.name}
                    <input
                      type="checkbox"
                      name="checkbox"
                      value="agree"
                    ></input>
                    <span></span>
                  </label>
                </div>
                <TaskStatus color={task.stage}>{task.stage}</TaskStatus>
              </li>
            );
          })}
        </Scrollbars>
      </TasksList>
    </TasksContainer>
  );
};

export default TaskForm;
