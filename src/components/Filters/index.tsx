import './style.scss'
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
      <div className='filters-wrapper'>
        <p className='filters-title'>{title}</p>
        <ul className='filters-items'>
          {filters.map(filter => {
            return (
              <li key={filter.id} onClick={() => onChangeFilter(filter.id)}>
                <input
                  type='checkbox'
                  className='checkbox-input'
                  checked={activeFilters.includes(filter.id)}
                  readOnly
                />
                <span className='checkbox-fake'></span>
                {filter.displayValue}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
