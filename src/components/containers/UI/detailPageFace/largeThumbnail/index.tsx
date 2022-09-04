import { StyledImage, StyledThumbnail } from "./styles"

export const LargeThumbnail = (props: any) => {
  
  return (
    <StyledThumbnail>
      <StyledImage src={props.largeThumbnail} />
    </StyledThumbnail>
  )
}