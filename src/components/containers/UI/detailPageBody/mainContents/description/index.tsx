import { DescriptionContent } from "./descriptionContent"
import { DescriptionTitle } from "./descriptionTitle"
import { StyledDescription } from "./styles"

export const Description = () => {
  return (
    <div>
      <div>
        <StyledDescription>
          <DescriptionTitle title="Thông tin về bộ phim này" />
          <DescriptionContent />
        </StyledDescription>
      </div>
    </div>
  )
}