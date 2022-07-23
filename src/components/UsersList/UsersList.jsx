import { Link } from "react-router-dom";
import avatar from "../../images/avatar/avatar.png";
import sprite from "../../images/sprite.svg";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  UserItem,
  UserPhoto,
  CompanyNames,
  EmailAdress,
  Distance,
} from "./UsersList.styled";

const USersList = ({ users }) => {
  return (
    <ul>
      <Scrollbars style={{ width: 1097, height: 735 }}>
        {users &&
          users.map(({ id, name, address, company, email, website }) => {
            return (
              <UserItem key={id}>
                <Link to={`/users/${id}`}>
                  <UserPhoto>
                    <img src={avatar} alt="avatar" />
                    <div>
                      <p>{name}</p>
                      <p>{address.city}</p>
                    </div>
                  </UserPhoto>
                  <CompanyNames>
                    <p>{company.name}</p>
                    <p>{company.bs}</p>
                  </CompanyNames>
                  <EmailAdress>
                    <p>{email}</p>
                    <p>{website}</p>
                  </EmailAdress>
                  <Distance>High</Distance>
                  <button>
                    <svg>
                      <use href={`${sprite}#icon-info`}></use>
                    </svg>
                  </button>
                </Link>
              </UserItem>
            );
          })}
      </Scrollbars>
    </ul>
  );
};

export default USersList;

// address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
// company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"
