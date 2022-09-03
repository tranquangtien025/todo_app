import { Rating } from "./rating"
import { StyledContents } from "./styles"
import { Title } from "./title"

export const Contents = () => {
  return (
    <StyledContents>
      <Title />
      <Rating />
    </StyledContents>
  )
}