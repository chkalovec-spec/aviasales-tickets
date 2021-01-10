import { SortsItem } from 'types/sorts'
import classes from './style.module.scss'

type SortsProps = {
  sortsItems: SortsItem[]
  activeSortItem: string
  onChangeSortItem: (id: string) => void
}

export const Sorts: React.FC<SortsProps> = ({ sortsItems, activeSortItem, onChangeSortItem }) => {
  return (
    <>
      <ul className={classes.sorts}>
        {sortsItems.map(sort => {
          return (
            <li
              key={sort.id}
              className={sort.id === activeSortItem ? classes.activeItem : classes.item}
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
