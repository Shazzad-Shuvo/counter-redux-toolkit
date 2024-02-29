
import './App.css'
import CounterView from './features/counter/CounterView'

function App() {

  return (
    <>
      <div className='text-center space-y-4'>
        <h2 className='text-4xl font-bold text-cyan-500'>Counter App with Redux Toolkit</h2>
        <CounterView/>
      </div>
    </>
  )
}

export default App
