import { BsBookmarkPlusFill } from "react-icons/bs"
import { FiPlay } from "react-icons/fi"
import { StyledBookMark, StyledBookMark2, StyledBookMarkButton, StyledButton, StyledButton2, StyledButton4, StyledButton7, StyledButton8, StyledButton9, StyledButtons, StyledText1, StyledText2, StyledTrailer, StyledTrailer2, StyledTrailer3, StyledTrailer4 } from "./styles"

export const Buttons = () => {
  return (
    <StyledButtons>
      <StyledButton>
        <StyledButton2>
          <div>
            <StyledButton4>
              <div>
                <div>
                  <StyledButton7>
                    <StyledButton8>
                      <StyledText1>
                        <StyledText2>
                          19,99 US$
                        </StyledText2>
                        Mua 4K: 10,99 US$
                      </StyledText1>
                    </StyledButton8>
                  </StyledButton7>
                </div>
              </div>
              <div>
                <div>
                  <StyledButton7>
                    <StyledButton9>
                      <StyledButton8>
                        <StyledText1>
                          <span>
                            Thuê 4K: 5,99 US$
                          </span>
                        </StyledText1>
                      </StyledButton8>
                    </StyledButton9>
                  </StyledButton7>
                </div>
              </div>
            </StyledButton4>
          </div>
        </StyledButton2>
      </StyledButton>
      <StyledBookMark>
        <div>
          <div>
            <StyledBookMarkButton>
              <StyledBookMark2>
                <BsBookmarkPlusFill />
              </StyledBookMark2>
            </StyledBookMarkButton>
          </div>
        </div>
      </StyledBookMark>
      <StyledTrailer>
        <StyledTrailer2>
          <StyledTrailer3>
            <StyledTrailer4>
              <FiPlay />
            </StyledTrailer4>
            Đoạn giới thiệu
          </StyledTrailer3>
        </StyledTrailer2>
      </StyledTrailer>
    </StyledButtons>
  )
}