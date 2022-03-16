import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ITodo, toDoState } from "../atoms";
import { constSelector, useRecoilState } from "recoil";

const Card = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
  & button {
    color: red;
  }
`;


interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
  toDoBoard: string;
}

function DragabbleCard({ toDoId, toDoText, index, toDoBoard }: IDragabbleCardProps) {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((allBoards) => {
      const boardCopy = [...allBoards[toDoBoard]];
      // const taskObj = boardCopy[index]
      // console.log(taskObj.text, "is deleted on", taskObj.board)
      boardCopy.splice(index, 1)
      return {
        ...allBoards,
        [toDoBoard]: boardCopy,
      }
    })
  }
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
          <button onClick={onClick}>X</button>
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);