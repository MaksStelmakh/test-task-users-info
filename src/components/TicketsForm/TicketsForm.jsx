import { useState } from "react";
import { TicketsContainer, UpperBlock } from "./TIcketsForm.styled";

const TicketsForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    { name: "Waiting on Feature Request", number: 4238 },
    { name: "Awaiting Customer Response", number: 1005 },
    { name: "Awaiting Developer Fix", number: 914 },
    { name: "Pending", number: 281 },
  ]);

  return (
    <TicketsContainer>
      <UpperBlock>
        <div>
          <p>Unresolved tickets</p>
          <p>
            Group: <span>Support</span>
          </p>
        </div>
        <button type="button">View details</button>
      </UpperBlock>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.name}>
              <p>{task.name}</p>
              <p>{task.number}</p>
            </li>
          );
        })}
      </ul>
    </TicketsContainer>
  );
};

export default TicketsForm;
