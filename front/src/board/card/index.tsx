import { useState } from 'react'
import { Card as CardType } from '../../card'
import { useBoard } from '../use-board'
import { CardMode } from './card-mode'
import { DisplayCard } from './display-card'
import { EditCard } from './edit-card'

export type CardProps = {
  card: CardType
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { canCardRight, canCardLeft, deleteCard, moveCardRight, moveCardLeft, updateCard } = useBoard() 
  const [cardMode, setCardMode] = useState(CardMode.DISPLAYING)

  const onUpdate = async (update: CardType) => {
    await updateCard(update)
    setCardMode(CardMode.DISPLAYING)
  }

  const renderCard = (mode: CardMode) => {
    if (mode === CardMode.DISPLAYING) {
      return <DisplayCard 
        card={card} 
        onEdit={() => setCardMode(CardMode.EDITING)} 
        onDelete={() => deleteCard(card)}
        onRight={() => moveCardRight(card)}
        onLeft={() => moveCardLeft(card)}
        disableLeft={!canCardLeft(card)}
        disableRight={!canCardRight(card)}
      />
    }
    return <EditCard card={card} onCancel={() => setCardMode(CardMode.DISPLAYING)} onUpdate={onUpdate} />
  }

  return renderCard(cardMode)
}

