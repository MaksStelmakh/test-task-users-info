import { useState, useEffect } from "react";
import sprite from "../../images/sprite.svg";
import { getAllUsers } from "../../services/apiService";
import { TableContainer, NameTable, TitleTable } from "./AllUsers.styled";
import USersList from "../UsersList/UsersList";

const AllUsers = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAllUsers().then((value) => setUsers(value));
  }, [setUsers]);

  return (
    <TableContainer>
      <NameTable>
        <p>All users</p>
        <button type="button">
          <svg>
            <use href={`${sprite}#icon-sort`}></use>
          </svg>
          Sort
        </button>
      </NameTable>
      <TitleTable>
        <p>User details</p>
        <p>Company name</p>
        <p>Email</p>
        <p>Distance</p>
      </TitleTable>
      <USersList users={users} />
    </TableContainer>
  );
};

export default AllUsers;
