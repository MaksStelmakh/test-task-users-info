import { StatusUserContainer } from "./StatusUsers.styled";

const StatusUser = () => {
  return (
    <StatusUserContainer>
      <div>
        <p>Active</p>
        <p>60</p>
      </div>
      <div>
        <p>Online</p>
        <p>16</p>
      </div>
      <div>
        <p>Filtered</p>
        <p>43</p>
      </div>
      <div>
        <p>Banned</p>
        <p>64</p>
      </div>
    </StatusUserContainer>
  );
};

export default StatusUser;
