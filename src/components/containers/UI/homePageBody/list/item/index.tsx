import { Info } from "./info/info"
import { No } from "./no/no"
import { StyledItem, StyledThumbnailInfo } from "./styles"
import { Thumbnail } from "./thumbnail"

export const Item = (props: any) => {
  return (
    <StyledItem>
      <No  no={props.no} />
      <StyledThumbnailInfo>
        <Thumbnail thumbnail={props.thumbnail} />
        <Info 
        name={props.name}
        rating={props.rating}
        category={props.category}
        starRating={props.starRating}
        rent={props.rent} />
      </StyledThumbnailInfo>
    </StyledItem>
  )
}