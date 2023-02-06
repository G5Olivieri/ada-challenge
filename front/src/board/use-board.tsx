import { useContext } from "react";
import { BoardContext } from "./board-context";

export const useBoard = () => {
  return useContext(BoardContext)
}
