import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CloseButton from "react-bootstrap/CloseButton";

function Todolist(props) {
  const { index, item, deleteItem } = props;
  return (
    <>
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          {item}{" "}
          <CloseButton
            onClick={(e) => {
              deleteItem(index);
            }}
          />
        </ListGroup.Item>
      </ListGroup>
      {/* <CloseButton /> */}
    </>
    // <li className="list-item">
    //   {props.item}
    //   <span className="icons">
    //     <i
    //       className="fa-solid fa-trash-can icon-delete"
    // onClick={(e) => {
    //   props.deleteItem(props.index);
    // }}
    //     ></i>
    //   </span>
    // </li>
  );
}

export default Todolist;
