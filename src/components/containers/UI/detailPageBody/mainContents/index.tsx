import { Description } from "./description"
import { MakeComment } from "./makeComment"
import { Rating } from "./rating"
import { StyledMainContents } from "./styles"

export const MainContents = () => {
  return (
    <StyledMainContents>
      <Description />
      <Rating />
      <MakeComment />
    </StyledMainContents>
  )
}