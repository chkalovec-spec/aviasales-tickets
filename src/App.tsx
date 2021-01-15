import { Provider } from 'react-redux'

import { store } from 'store'

import { Header } from 'components/Header'
import { FiltersContainer } from 'containers/Filters'
import { SortContainer } from 'containers/Sorts'
import { TicketsContainer } from 'containers/Tickets'

import classes from './App.module.scss'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className={classes.wrapper}>
          <aside className={classes.leftSide}>
            <FiltersContainer />
          </aside>
          <main className={classes.content}>
            <SortContainer />
            <TicketsContainer />
          </main>
        </div>
      </Provider>
    </>
  )
}

export default App
