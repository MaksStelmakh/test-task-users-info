import sprite from "../../images/sprite.svg";
import { useState } from "react";
import avatar from "../../images/avatar/avatar.png";
import { HeaderContainer, UsersInfo } from "./Header.styled";

const Header = () => {
  const [notification, setNotification] = useState(false);

  return (
    <HeaderContainer>
      <h2>Users</h2>
      <div>
        <svg>
          <use href={`${sprite}#icon-search`}></use>
        </svg>
        <svg
          onClick={() => {
            setNotification((notification) => !notification);
          }}
        >
          {notification ? (
            <use href={`${sprite}#icon-message`}></use>
          ) : (
            <use href={`${sprite}#icon-clear`}></use>
          )}
        </svg>
        <UsersInfo>
          <p>Jones Ferdinand</p>
          <img src={avatar} alt="avatarUser" />
        </UsersInfo>
      </div>
    </HeaderContainer>
  );
};

export default Header;
