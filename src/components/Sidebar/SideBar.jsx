import { NavLink } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { NavPages } from "./SideBar.styled";

const SideBar = () => {
  return (
    <NavPages>
      <NavLink to="/">
        <svg>
          <use href={`${sprite}#icon-overview`}></use>
        </svg>
        Overview
      </NavLink>
      <NavLink to="/users">
        <svg>
          <use href={`${sprite}#icon-users`}></use>
        </svg>
        Users
      </NavLink>
      <NavLink to="/ideas">
        <svg>
          <use href={`${sprite}#icon-ideas`}></use>
        </svg>
        Ideas
      </NavLink>
      <NavLink to="/contacts">
        <svg>
          <use href={`${sprite}#icon-contacts`}></use>
        </svg>
        Contacts
      </NavLink>
      <NavLink to="/agents">
        <svg>
          <use href={`${sprite}#icon-agents`}></use>
        </svg>
        Agents
      </NavLink>
      <NavLink to="/articles">
        <svg>
          <use href={`${sprite}#icon-articles`}></use>
        </svg>
        Articles
      </NavLink>
      <NavLink to="/settings">
        <svg>
          <use href={`${sprite}#icon-settings`}></use>
        </svg>
        Settings
      </NavLink>
      <NavLink to="/subcvription">
        <svg>
          <use href={`${sprite}#icon-subscription`}></use>
        </svg>
        Subscription
      </NavLink>
    </NavPages>
  );
};

export default SideBar;
