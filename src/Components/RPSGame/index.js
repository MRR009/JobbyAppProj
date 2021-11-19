import './index.css'

import {Image, GameContainer, Button} from './styledComponents'

const RPSGame = props => {
  const {choicesList} = props

  return (
    <GameContainer>
      {choicesList.map(eachChoice => {
        const {id, imageUrl} = eachChoice
        const smallId = id.toLowerCase()
        return (
          <Button type="button" key={id} data-testid={`${smallId}Button`}>
            <Image src={imageUrl} alt={id} />
          </Button>
        )
      })}
    </GameContainer>
  )
}

export default RPSGame
