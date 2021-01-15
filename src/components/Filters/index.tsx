import { FiltersItem } from 'types/filters'
import classes from './style.module.scss'

type FiltersProps = {
  title: string
  filters: FiltersItem[]
  activeFilters: string[]
  onChangeFilter: (id: string) => void
}

export const Filters: React.FC<FiltersProps> = props => {
  const { title, filters, activeFilters, onChangeFilter } = props

  return (
    <>
      <div className={classes.filters}>
        <p className={classes.title}>{title}</p>
        <ul className={classes.items}>
          {filters.map(({ id, value, displayValue }) => {
            return (
              <li key={id} onClick={() => onChangeFilter(value)}>
                <input
                  type='checkbox'
                  className={classes.realInput}
                  checked={activeFilters.includes(value)}
                  readOnly
                />
                <span className={classes.fakeInput}></span>
                {displayValue}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
