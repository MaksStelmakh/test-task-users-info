import styled from "styled-components";
import chekbox from "../../images/check.svg";

export const TasksContainer = styled.div`
  width: 534px;
  height: 336px;
  background-color: #fff;
  margin-right: 30px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  overflow: hidden;

  form {
    margin-top: 4px;
    position: relative;
    width: 100%;
    input {
      font-family: inherit;
      border: 0;
      border-bottom: 1px solid #dfe0eb;
      width: 470px;
      font-size: 1.3rem;
      padding: 18px 32px;
      background: inherit;
      transition: border-color 0.2s;
      outline: none;
      font-family: "Mulish";
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #c5c7cd;

      &::placeholder {
        font-family: "Mulish";
        font-weight: 600;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
        color: #c5c7cd;
      }
    }

    button {
      width: 24px;
      height: 24px;
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 32px;
      background: #f0f1f7;
      border-radius: 8px;
      border: none;
      color: #9fa2b4;
      font-size: 23px;
      line-height: 18px;
    }
  }

  li {
    list-style: none;
  }
`;

export const UpperBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 32px 4px 32px;

  div {
    p {
      font-family: "Mulish";
      font-weight: 700;
      font-size: 19px;
      line-height: 24px;
      letter-spacing: 0.4px;
      color: #252733;

      &:nth-of-type(2) {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.1px;
        color: #9fa2b4;
        margin-top: 8px;
      }
    }
  }

  button {
    cursor: pointer;
    border: none;
    background-color: inherit;
    font-family: "Mulish";
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #3751ff;
    padding: 0;
  }
`;

export const TasksList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    padding: 18px 32px 18px 32px;
    border-bottom: 1px solid #dfe0eb;

    &:last-child {
      border: none;
    }

    label {
      font-family: "Mulish";
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #252733;
      margin-left: 50px;
      display: block;
      position: relative;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      & input {
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
      input:checked ~ span {
        background-color: #2196f3;
        border: 2px solid #2196f3;
      }
      span {
        position: absolute;
        top: -1px;
        left: -45px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: inherit;
        border: 2px solid #c5c7cd;

        &:after {
          content: "";
          position: absolute;
          display: none;
        }
      }
    }
    label input:checked ~ span:after {
      display: block;
    }
    label span:after {
      left: 7px;
      top: 2px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export const TaskStatus = styled.p`
  padding: 5px 12px;
  border-radius: 8px;
  font-family: "Mulish";
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  ${({ color }) => {
    if (color === "new") {
      return `background: #29CC97;
      color: #FFFFFF;`;
    } else if (color === "urgent") {
      return `background: #FEC400;
      color: #FFFFFF;`;
    } else {
      return `background: #F0F1F7;`;
    }
  }}
`;
