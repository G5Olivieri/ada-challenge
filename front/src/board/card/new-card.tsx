import MDEditor from "@uiw/react-md-editor"
import { useState } from "react"
import { FaSave, FaTimes } from "react-icons/fa"
import rehypeSanitize from "rehype-sanitize"
import { NewCard as NewCardType} from "../../card"
import S from './style'

type NewCardProps = {
  onCancel: () => void
  onNew: (newCard: NewCardType) => void
  className?: string
}

export const NewCard: React.FC<NewCardProps> = ({ onCancel, className, onNew }) => {
  const [title, setTile] = useState('')
  const [content, setContent] = useState('# Conteúdo (suporte à Markdown)')
  return (
    <S.Card className={className}>
      <header>
        <S.Input 
        type="text" 
        placeholder="Título" 
        value={title}
        onChange={(ev) => setTile(ev.target.value)}
        required 
        />
      </header>
      <main>
        <MDEditor
          textareaProps={{ 'aria-label': 'md-textarea' }}
          data-color-mode="light"
          preview={'edit'}
          hideToolbar
          height={200}
          value={content}
          onChange={(value) => setContent(value || '')}
          previewOptions={{
            rehypePlugins: [[rehypeSanitize]],
          }}
        />

      </main>
      <footer>
        <S.Button onClick={() => onCancel()}><FaTimes size={24} /></S.Button>
        <S.Button onClick={() => onNew({titulo: title, conteudo: content})}><FaSave size={24} /></S.Button>
      </footer>
    </S.Card>
  )

}