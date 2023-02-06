import { Card } from '../card'
import { Column as ColumnType } from '../use-board'
import S from './style'

type ColumnProps = {
    column: ColumnType
}

export const Column: React.FC<ColumnProps> = ({ column }) => {
    return (
        <S.Column>
            <h2>{column.name}</h2>
            {column.cards.map(c => <Card key={c.id} card={c} />)}
        </S.Column>
    )
}