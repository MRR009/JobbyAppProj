import {Component} from 'react'

import {
  HeaderContainer,
  HeadingContainer,
  Heading,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeadingContainer>
          <Heading>
            Rock <br /> Paper <br /> Scissors
          </Heading>
        </HeadingContainer>
        <ScoreContainer>
          <ScoreHeading>Score</ScoreHeading>
          <Score>0</Score>
        </ScoreContainer>
      </HeaderContainer>
    )
  }
}

export default Header
