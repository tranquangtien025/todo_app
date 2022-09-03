import { MainContents } from "./mainContents"
import { StyledDetail, StyledDetailWrap } from "./styles"
import { SubContents } from "./subContents"

export const DetailPageBody = () => {
  return (
    <StyledDetailWrap>
      <StyledDetail>
        <MainContents />
        <SubContents />
      </StyledDetail>
    </StyledDetailWrap>
  )
}