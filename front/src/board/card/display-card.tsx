import MDEditor from "@uiw/react-md-editor"
import { FaAngleLeft, FaAngleRight, FaEdit, FaTrash } from "react-icons/fa"
import rehypeSanitize from "rehype-sanitize"
import { Card } from "../../card"
import S from './style'

type DisplayCardProps = {
  card: Card
  disableLeft: boolean
  disableRight: boolean
  onEdit: () => void
  onRight: () => void
  onLeft: () => void
  onDelete: () => void
}

export const DisplayCard: React.FC<DisplayCardProps> = ({
  card,
  onEdit,
  onLeft,
  onDelete,
  onRight,
  disableLeft,
  disableRight,
}) => {
  return (
    <S.Card>
      <header>
        <h3>{card.titulo}</h3>
        <S.Button onClick={() => onEdit()}><FaEdit size={24} /></S.Button>
      </header>
      <main>
        <MDEditor
          textareaProps={{ 'aria-label': 'md-textarea' }}
          data-color-mode="light"
          preview={'preview'}
          hideToolbar
          height={200}
          value={card.conteudo}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />
      </main>
      <footer>
        <S.Button onClick={() => onLeft()} disabled={disableLeft}><FaAngleLeft size={24} /></S.Button>
        <S.Button onClick={() => onDelete()}><FaTrash size={24} /></S.Button>
        <S.Button onClick={() => onRight()} disabled={disableRight}><FaAngleRight size={24} /></S.Button>
      </footer>
    </S.Card>
  )
}
