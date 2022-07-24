import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById } from "../../services/apiService";
import StatusUsers from "../StatusUsers/StatusUsers";
import singleCardavatar from "../../images/avatar/singleCardAvatar.png";
import {
  SingleUser,
  SingleContainer,
  AvatarUser,
  NameOfUser,
  OtherInformation,
} from "./SingleCard.styled";

const SingleCard = () => {
  const [oneUser, setOneUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUserById(id).then((user) => setOneUser(user));
  }, [id]);
  return (
    <SingleContainer>
      <StatusUsers />
      {oneUser && (
        <SingleUser>
          <AvatarUser>
            <img src={singleCardavatar} alt="Avatar" />
          </AvatarUser>
          <NameOfUser>
            <p>{oneUser.name}</p>
            <p>{oneUser.company.catchPhrase}</p>
          </NameOfUser>
          <OtherInformation>
            <p>Adress</p>
            <p>
              {oneUser.address.street}, {oneUser.address.suite},{" "}
              {oneUser.address.city}, {oneUser.address.zipcode}
            </p>
            <p>Phone</p>
            <p>{oneUser.phone}</p>
            <p>Website</p>
            <a target="_blank" rel="noreferrer" href={oneUser.website}>
              {oneUser.website}
            </a>
          </OtherInformation>
        </SingleUser>
      )}
    </SingleContainer>
  );
};

export default SingleCard;
