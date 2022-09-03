import { StyledImage, StyledName, StyledPublish, StyledPublishInfo, StyledTitle } from "./styles"

export const Title = () => {
  return (
    <StyledTitle>
      <StyledImage src="https://play-lh.googleusercontent.com/FPrJOrlUyg4lg-KVCm_8a47oeMZRAxyvFNLPXH8VsL9y0TSKlphKrlGRIIgiOMOWZIOZOS6FAR28tG6Odw=w240-h480-rw" />
      <div>
        <StyledName>
          <span>The Unbearable Weight of Massive Talent</span>
        </StyledName>
        <StyledPublish>
          <StyledPublishInfo>
            2022 •
            <span>106 phút</span>
          </StyledPublishInfo>
        </StyledPublish>
      </div>
    </StyledTitle>
  )
}