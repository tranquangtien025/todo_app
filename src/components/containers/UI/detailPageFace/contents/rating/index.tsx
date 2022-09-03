import { GoStar } from "react-icons/go"
import { GiTomato } from "react-icons/gi"
import { RiHomeHeartLine } from "react-icons/ri"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { StyledCursorPointer, StyledHomeHeart, StyledInformationCircle, StyledNumber, StyledNumberStarRating, StyledRating, StyledRatingInfos, StyledRatingInfosWrap, StyledStar, StyledStarRating, StyledTextRating, StyledTomato } from "./styles"

export const Rating = () => {
  return (
    <StyledRating>
      <StyledRatingInfosWrap>
        <StyledRatingInfos>
          <StyledStarRating>
            <StyledNumberStarRating>
              <StyledNumber>
                4,2
                <StyledStar>
                  <GoStar />
                </StyledStar>
              </StyledNumber>
            </StyledNumberStarRating>
            <StyledTextRating>366 bài đánh giá</StyledTextRating>
          </StyledStarRating>
          <StyledStarRating>
            <StyledNumberStarRating>
              <span>
                <StyledTomato>
                  <GiTomato />
                </StyledTomato>
                100%
              </span>
            </StyledNumberStarRating>
            <StyledTextRating>Tomatometer</StyledTextRating>
          </StyledStarRating>
          <StyledStarRating>
            <StyledNumberStarRating>
              <span>
                <span>R</span>
              </span>
            </StyledNumberStarRating>
            <StyledTextRating>Mức phân loại</StyledTextRating>
          </StyledStarRating>
          <StyledStarRating>
            <StyledNumberStarRating>
              <div>
                <StyledHomeHeart>
                  <RiHomeHeartLine />
                </StyledHomeHeart>
              </div>
            </StyledNumberStarRating>
            <StyledTextRating>
              Đủ điều kiện
              <StyledCursorPointer>
                <StyledInformationCircle>
                  <HiOutlineInformationCircle />
                </StyledInformationCircle>
              </StyledCursorPointer>
            </StyledTextRating>
          </StyledStarRating>
        </StyledRatingInfos>
      </StyledRatingInfosWrap>
    </StyledRating>
  )
}