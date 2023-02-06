import { Column } from './column'
import S from './style'
import { useBoard } from './use-board'

type BoardProps = {
  className?: string
}

const Board: React.FC<BoardProps> = ({ className }) => {
  const { columns } = useBoard()
  return (
    <S.Board className={className}>
      {columns.map(c => <Column key={c.name} column={c} />)}
    </S.Board>
  )
}

export default Board