import { PropsWithChildren } from "react"
import { BoardProvider } from "./board-provider"
import { useAxiosBoardService } from "./use-axios-board-service"

export const AxiosBoardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const board = useAxiosBoardService()
  return (
    <BoardProvider board={board}>{children}</BoardProvider>
  )
}