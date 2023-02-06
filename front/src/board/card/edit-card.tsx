import MDEditor from "@uiw/react-md-editor"
import React, { useState } from "react"
import { FaSave, FaTimes } from "react-icons/fa"
import rehypeSanitize from "rehype-sanitize"
import { Card } from "../../card"
import S from './style'

type EditCardProps = {
  card: Card
  onCancel: () => void
  onUpdate: (updated: Card) => void
}

export const EditCard: React.FC<EditCardProps> = ({ card, onCancel, onUpdate }) => {
  const [title, setTile] = useState(card.titulo)
  const [content, setContent] = useState(card.conteudo)
  return (
    <S.Card>
      <header>
        <S.Input type="text" value={title} onChange={(ev) => setTile(ev.target.value)} />
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
        <S.Button onClick={() => onUpdate({...card, titulo: title, conteudo: content })}><FaSave size={24} /></S.Button>
      </footer>
    </S.Card>
  )

}