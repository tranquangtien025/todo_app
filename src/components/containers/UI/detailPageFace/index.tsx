import { Buttons } from "./buttons"
import { Contents } from "./contents"
import { LargeThumbnail } from "./largeThumbnail"
import { Notes } from "./Notes"
import { StyledDetail, StyledDetailWrap } from "./styles"

export const DetailPageFace = () => {
  return (
    <StyledDetailWrap>
      <StyledDetail>
        <LargeThumbnail />
        <Contents />
        <Buttons />
        <Notes />
      </StyledDetail>
    </StyledDetailWrap>
  )
}