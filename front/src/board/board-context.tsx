import { createContext } from "react"
import { Card, Column, NewCard } from "../card"

export type BoardContextType = {
  columns: Column[]
  setColumns: (columns: Column[]) => void
  canCardLeft: (card: Card) => boolean
  canCardRight: (card: Card) => boolean
  moveCardRight: (card: Card) => Promise<string | null>
  moveCardLeft: (card: Card) => Promise<string | null>
  deleteCard: (card: Card) => Promise<void>
  newCard: (card: NewCard) => Promise<Card>
  updateCard: (card: Card) => Promise<void>
}

export const BoardContext = createContext<BoardContextType>(null!!)
