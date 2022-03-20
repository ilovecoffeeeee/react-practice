import { atom, selector } from "recoil";

export interface ITodo {
    id: number;
    text: string;
    board: string;
}

interface IToDoState {
    [key:string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
    key: "toDo",
    default : {"To Do":[],"Doing":[],"Done":[]},
    // default : JSON.parse(localStorage.getItem("toDo") || `{"To Do":[],"Doing":[],"Done":[]}`) 
    // default : JSON.parse(sessionStorage.getItem("toDo") || `{"To Do":[],"Doing":[],"Done":[]}`)
})