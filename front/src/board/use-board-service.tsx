import { useState } from "react"
import { Card, Column, NewCard } from "../card"
import { BoardContextType } from "./board-context"

export const columnStateMachine: Record<string, { 'left': string | null, 'right': string | null }> = {
  'To Do': { 'right': 'Doing', 'left': null },
  'Doing': { 'right': 'Done', 'left': 'To Do' },
  'Done': { 'right': null, 'left': 'Doing' },
}

export const useBoardService = (): BoardContextType => {
  const [columns, setColumns] = useState<Column[]>([])

  const move = (card: Card, orientation: 'right' | 'left'): string | null => {
    const previous = columns.find(c => c.name === card.lista)
    if (!previous) return null

    const nextName = columnStateMachine[previous.name][orientation]
    if (!nextName) return null

    const next = columns.find(c => c.name === nextName)
    if (!next) return null

    previous.cards = previous.cards.filter(c => c.id !== card.id)
    card.lista = next.name
    next.cards.push(card)
    setColumns((columns) => columns.map(c => {
      if (c.name === previous.name) {
        return previous
      }
      if (c.name === next.name) {
        return next
      }
      return c
    }))
    return next.name
  }

  return {
    columns,
    setColumns,
    newCard: async (newCard: NewCard) => {
      const todo = columns.findIndex(c => c.name === 'To Do')
      if (todo < 0) return
      const card: Card = {
        id: crypto.randomUUID(),
        titulo: newCard.titulo,
        conteudo: newCard.conteudo,
        lista: 'To Do',
      }
      columns[todo].cards.push(card)
      setColumns([...columns])
      return card
    },
    updateCard: async (updated: Card) => {
      const todo = columns.findIndex(c => c.name === updated.lista)
      if (todo < 0) return
      columns[todo].cards = columns[todo].cards.map(c => c.id === updated.id ? updated : c)
      setColumns([...columns])
    },
    canCardLeft: (card: Card) => (columnStateMachine[card.lista].left !== null),
    canCardRight: (card: Card) => (columnStateMachine[card.lista].right !== null),
    moveCardRight: async (card: Card) => {
      return move(card, 'right')
    },
    moveCardLeft: async (card: Card) => {
      return move(card, 'left')
    },

    deleteCard: async (card: Card) => {
      setColumns((columns) => columns.map(c => c.name !== card.lista ? c : { ...c, cards: c.cards.filter(ca => ca.id !== card.id) }))
    },
  }
}
