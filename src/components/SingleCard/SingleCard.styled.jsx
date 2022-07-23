import styled from "styled-components";
import background from "../../images/background/background.png";

export const SingleContainer = styled.div`
  height: 1605px;
`;

export const SingleUser = styled.div`
  width: 1097px;
  height: 870px;
  background-color: #fff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  margin: 35px 30px 0 30px;
`;

export const OtherInformation = styled.div`
  padding-left: 53px;
  p:nth-child(odd) {
    font-family: "Mulish";
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: 0.4px;
    color: #000000;
    margin-bottom: 14px;
  }

  p:nth-child(even) {
    font-family: "Mulish";
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: #000000;
    margin-bottom: 24px;
  }

  a {
    font-family: "Mulish";
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.4px;
    text-decoration-line: underline;
    color: #3851ff;
  }
`;

export const AvatarUser = styled.div`
  position: relative;
  width: 100%;
  height: 222px;
  background-image: url(${background});

  img {
    position: absolute;
    width: 145px;
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    bottom: -50px;
    border: 4px solid #fff;
  }
`;

export const NameOfUser = styled.div`
  margin-top: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Mulish";
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: 0.4px;
    color: #252733;

    &:last-child {
      font-size: 24px;
      line-height: 30px;
      color: #797a84;
      margin-bottom: 80px;
    }
  }
`;
