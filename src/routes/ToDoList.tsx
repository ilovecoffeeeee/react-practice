import { DragDropContext, DropResult} from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";
import Board from "../Components/Borad";


const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display:flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  margin-top: 50px;
`;

interface RouteRarams {
  result: string
}

function ToDoList() {
  const { result } = useParams<RouteRarams>();
  const [toDos, setToDos] = useRecoilState(toDoState)
  const onDragEnd = (info:DropResult) => {
    const {destination, draggableId, source} = info;
    if(!destination) return;
    if(destination?.droppableId === source.droppableId) {
      // same board movement.
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index]
        boardCopy.splice(source.index, 1)
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId] : boardCopy
        };
      });
    }
    if(destination.droppableId !== source.droppableId) {
      // cross board movement
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index]
        const newId = taskObj.id
        const newText = taskObj.text
        const newBoard = taskObj.board.replaceAll(source.droppableId, destination.droppableId)
        const resultObj = {id: newId, text: newText, board: newBoard}
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index, 1)
        destinationBoard.splice(destination?.index, 0, resultObj);

        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId] : destinationBoard,
        }
      })
    }
    // setToDos((oldToDos) => {
      // const toDosCopy = [...oldToDos];
      // toDosCopy.splice(source.index, 1)
      // console.log("Put back", draggableId, "on", destination.index);
      // toDosCopy.splice(destination?.index, 0, draggableId);
      // return toDosCopy
    // });
  };
  // localStorage.setItem("toDo", JSON.stringify(toDos))
  // sessionStorage.setItem("toDo", JSON.stringify(toDos));
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map(boardId => <Board boardId={boardId} key={boardId} toDos={toDos[boardId]}/>)}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default ToDoList;
