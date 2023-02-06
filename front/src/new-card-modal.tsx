import ReactModal from "react-modal"
import { NewCard } from "./board/card/new-card"
import { useBoard } from "./board/use-board"

const customReactModalStyle: ReactModal.Styles = {
  content: {
    background: '#484e5c',
    position: 'unset',
    padding: '10px',
    borderRadius: '10px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    width: "50%",
    height: "50%",
    gap: '20px',
    textAlign: 'center'
  },
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 4,
  }
}

export default function NewCardModal(props: ReactModal.Props) {
  const {newCard} = useBoard()

  return (
    <ReactModal
      {...props}
      style={customReactModalStyle}
      shouldCloseOnOverlayClick={true}
      contentLabel="Criar novo Card"
    >
      <h2>Novo card</h2>
      <NewCard 
      onNew={(card) => {
        newCard(card)
        if (props.onRequestClose) props.onRequestClose({} as any)
      }
      }
      onCancel={() => {
        if (props.onRequestClose) props.onRequestClose({} as any)
      }} />
    </ReactModal>
  )
}