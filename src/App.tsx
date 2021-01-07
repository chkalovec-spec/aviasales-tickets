import { Header } from 'components/Header'
import { FiltersContainer } from 'containers/Filters'
import { SortContainer } from 'containers/Sorts'
import { TicketsContainer } from 'containers/Tickets'
import './App.scss'

function App() {
  return (
    <>
      <Header />
      <div className='app-wrapper'>
        <aside className='left-side'>
          <FiltersContainer />
        </aside>
        <main className='content-block'>
          <SortContainer />
          <TicketsContainer />
        </main>
      </div>
    </>
  )
}

export default App
