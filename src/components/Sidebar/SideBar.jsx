import { NavLink } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import { NavPages } from "./SideBar.styled";

const setActive = ({ isActive }) => ({
  backgroundColor: isActive ? `rgba(159, 162, 180, 0.08)` : "",
  borderLeft: isActive ? `2px solid #DDE2FF` : "",
});

const SideBar = () => {
  return (
    <NavPages>
      <NavLink to="/" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-overview`}></use>
        </svg>
        Overview
      </NavLink>
      <NavLink to="/users" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-users`}></use>
        </svg>
        Users
      </NavLink>
      <NavLink to="/ideas" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-ideas`}></use>
        </svg>
        Ideas
      </NavLink>
      <NavLink to="/contacts" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-contacts`}></use>
        </svg>
        Contacts
      </NavLink>
      <NavLink to="/agents" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-agents`}></use>
        </svg>
        Agents
      </NavLink>
      <NavLink to="/articles" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-articles`}></use>
        </svg>
        Articles
      </NavLink>
      <NavLink to="/settings" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-settings`}></use>
        </svg>
        Settings
      </NavLink>
      <NavLink to="/subcvription" style={setActive}>
        <svg>
          <use href={`${sprite}#icon-subscription`}></use>
        </svg>
        Subscription
      </NavLink>
    </NavPages>
  );
};

export default SideBar;
