import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

import './App.css'

import RPSGame from './Components/RPSGame'
import Header from './Components/Header'
import Footer from './Components/Footer'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const App = () => (
  <BrowserRouter>
    <div className="bg-container">
      <Header />
      <RPSGame choicesList={choicesList} />
    </div>
    <Footer />
  </BrowserRouter>
)

export default App
