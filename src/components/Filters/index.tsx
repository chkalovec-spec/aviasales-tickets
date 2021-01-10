import React from 'react'
import classes from './style.module.scss'
import { FiltersItem } from 'types/filters'

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
          {filters.map(filter => {
            return (
              <li key={filter.id} onClick={() => onChangeFilter(filter.id)}>
                <input
                  type='checkbox'
                  className={classes.realInput}
                  checked={activeFilters.includes(filter.id)}
                  readOnly
                />
                <span className={classes.fakeInput}></span>
                {filter.displayValue}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
