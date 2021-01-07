import { SortsItem } from 'types/sorts'
import './style.scss'

type SortsProps = {
  sortsItems: SortsItem[]
  activeSortItem: string
  onChangeSortItem: (id: string) => void
}

export const Sorts: React.FC<SortsProps> = ({ sortsItems, activeSortItem, onChangeSortItem }) => {
  return (
    <>
      <ul className='sorts-wrapper'>
        {sortsItems.map(sort => {
          return (
            <li
              key={sort.id}
              className={sort.id === activeSortItem ? 'sort-item sort-item--active' : 'sort-item'}
              onClick={() => {
                onChangeSortItem(sort.id)
              }}
            >
              {sort.displayValue}
            </li>
          )
        })}
      </ul>
    </>
  )
}
