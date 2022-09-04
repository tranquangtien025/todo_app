import { MainContents } from "./mainContents"
import { StyledDetail, StyledDetailWrap } from "./styles"
import { SubContents } from "./subContents"

export const DetailPageBody = (props: any) => {
  return (
    <StyledDetailWrap>
      <StyledDetail>
        <MainContents description={props.movieDetail.description} />
        <SubContents />
      </StyledDetail>
    </StyledDetailWrap>
  )
}