import StatusUser from "../../components/StatusUsers/StatusUsers";
import AllUsers from "../../components/AllUsers/AllUsers";
import TaskForm from "../../components/TaskForm/TaskForm";
import TicketsForm from "../../components/TicketsForm/TicketsForm";
import { WorkingForms } from "./UserPage.styled";

const UserPage = () => {
  return (
    <>
      <StatusUser />
      <AllUsers />
      <WorkingForms>
        <TicketsForm />
        <TaskForm />
      </WorkingForms>
    </>
  );
};

export default UserPage;
