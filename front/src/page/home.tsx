import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import Board from "../board"
import { AxiosBoardProvider } from "../board/axios-board-provider"
import NewCardModal from "../new-card-modal"
import S from './style'

export function Home() {
  const [isNewOpen, setIsNewOpen] = useState(false)

  return (
    <S.Container>
      <S.Header>
        <S.Title>Kanban</S.Title>
        <S.Button onClick={() => setIsNewOpen(true)}>
          <FaPlus size={24} />
        </S.Button>
      </S.Header>
      <AxiosBoardProvider>
        <Board />
        <NewCardModal
          isOpen={isNewOpen}
          onRequestClose={() => setIsNewOpen(false)}
        />
      </AxiosBoardProvider>
    </S.Container>
  )
}