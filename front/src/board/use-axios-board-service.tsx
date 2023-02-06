import { useEffect } from "react"
import { Card, NewCard } from "../card"
import { useAxios } from "../http-client/use-axios"
import { BoardContextType } from "./board-context"
import { useBoardService } from "./use-board-service"

export const useAxiosBoardService = (): BoardContextType => {
  const axios = useAxios()
  const { newCard, updateCard, deleteCard, moveCardLeft, moveCardRight, setColumns, ...rest } = useBoardService()

  useEffect(() => {
    axios.get<Card[]>(`${import.meta.env.VITE_API_URL}/cards`).then(res => {
      if (!res.data) return
      const todo = res.data.filter(c => c.lista === 'To Do')
      const doing = res.data.filter(c => c.lista === 'Doing')
      const done = res.data.filter(c => c.lista === 'Done')

      setColumns([
        { name: 'To Do', cards: todo },
        { name: 'Doing', cards: doing },
        { name: 'Done', cards: done },
      ])
    })
  }, [])
  return {
    ...rest,
    setColumns,
    newCard: async (nCard: NewCard) => {
      const card = await newCard(nCard)
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/cards`, { ...nCard, lista: 'To Do' })
      setColumns((columns) => {
        const column = columns.findIndex(c => card.lista === c.name)
        if (column < 0) return
        columns[column].cards = columns[column].cards.map(c => c.id === card.id ? response.data : c)
        return [...columns]
      })
    },
    updateCard: async (updated: Card) => {
      updateCard(updated)
      await axios.put(`${import.meta.env.VITE_API_URL}/cards/${updated.id}`, updated)
    },
    moveCardRight: async (card: Card) => {
      const moved = await moveCardRight(card)
      await axios.put(`${import.meta.env.VITE_API_URL}/cards/${card.id}`, { ...card, lista: moved })
      return moved
    },
    moveCardLeft: async (card: Card) => {
      const moved = await moveCardLeft(card)
      await axios.put(`${import.meta.env.VITE_API_URL}/cards/${card.id}`, { ...card, lista: moved })
      return moved
    },

    deleteCard: async (card: Card) => {
      deleteCard(card)
      await axios.delete(`${import.meta.env.VITE_API_URL}/cards/${card.id}`)
    },
  }
}
