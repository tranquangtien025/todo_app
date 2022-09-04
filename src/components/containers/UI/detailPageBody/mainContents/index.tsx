import { Description } from "./description"
import { MakeComment } from "./makeComment"
import { Rating } from "./rating"
import { StyledMainContents } from "./styles"

export const MainContents = (props: any) => {
  return (
    <StyledMainContents>
      <Description description={props.description} />
      <Rating />
      <MakeComment />
    </StyledMainContents>
  )
}