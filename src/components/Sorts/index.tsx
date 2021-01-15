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
        {sortsItems.map(({ id, value, displayValue }) => {
          return (
            <li
              key={id}
              className={value === activeSortItem ? classes.activeItem : classes.item}
              onClick={() => {
                onChangeSortItem(value)
              }}
            >
              {displayValue}
            </li>
          )
        })}
      </ul>
    </>
  )
}
