export type Card = {
  id: string
  titulo: string
  conteudo: string
  lista: string
}

export type NewCard = {
  titulo: string
  conteudo: string
}

export type Column = {
  name: string
  cards: Card[]
}

