import { Info } from "../../homePageBody/list/item/info/info"
import { StyledThumbnailInfo } from "../../homePageBody/list/item/styles"
import { Thumbnail } from "../../homePageBody/list/item/thumbnail"
import { DescriptionTitle } from "../mainContents/description/descriptionTitle"
import { StyledDiv3, StyledList, StyledSubContents, StyledSubContents2 } from "./styles"

export const SubContents = () => {
  return (
    <StyledSubContents>
      <div>
        <StyledSubContents2>
          <DescriptionTitle title="Most popular movies" />
          <StyledList>
            <StyledDiv3>
              <StyledThumbnailInfo>
                <Thumbnail />
                <Info />
              </StyledThumbnailInfo>
            </StyledDiv3>
            <StyledDiv3>
              <StyledThumbnailInfo>
                <Thumbnail />
                <Info />
              </StyledThumbnailInfo>
            </StyledDiv3><StyledDiv3>
              <StyledThumbnailInfo>
                <Thumbnail />
                <Info />
              </StyledThumbnailInfo>
            </StyledDiv3>
          </StyledList>
        </StyledSubContents2>
      </div>
    </StyledSubContents>
  )
}