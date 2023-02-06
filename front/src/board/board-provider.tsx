import { PropsWithChildren } from "react"
import { BoardContext, BoardContextType } from "./board-context"
import { useBoardService } from "./use-board-service"

type BoardProviderProps = {
  board?: BoardContextType
} & PropsWithChildren

export const BoardProvider: React.FC<BoardProviderProps> = ({ children, board }) => {
  const service = board ?? useBoardService()
  return (
    <BoardContext.Provider value={service}>
      {children}
    </BoardContext.Provider>
  )
}
