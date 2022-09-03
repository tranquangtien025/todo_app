import { StyledNote, StyledNoteLink, StyledNotes, StyledSymbol } from "./styles"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { MdWarningAmber } from "react-icons/md"

export const Notes = () => {
  return (
    <StyledNotes>
      <StyledNote>
        <StyledSymbol><HiOutlineInformationCircle /></StyledSymbol>
        Xem trong một trình duyệt web hoặc trên các thiết bị được hỗ trợ&nbsp;
        <StyledNoteLink href="https://support.google.com/googleplay/answer/10066529">Tìm hiểu thêm</StyledNoteLink>
      </StyledNote>
      <StyledNote>
        <StyledSymbol><MdWarningAmber /></StyledSymbol>
        <span>Không có âm thanh hay phụ đề bằng ngôn ngữ của bạn. Có phụ đề bằng Tiếng Anh.</span>
      </StyledNote>
    </StyledNotes>
  )
}