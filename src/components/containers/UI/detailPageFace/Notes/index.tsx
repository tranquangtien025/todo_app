import { StyledNote, StyledNoteLink, StyledNotes, StyledSymbol } from "./styles"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { MdWarningAmber } from "react-icons/md"

export const Notes = (props: any) => {
  return (
    <StyledNotes>
      <StyledNote>
        <StyledSymbol><HiOutlineInformationCircle /></StyledSymbol>
        {props.info}&nbsp;
        {props.info && <StyledNoteLink href="https://support.google.com/googleplay/answer/10066529">Tìm hiểu thêm</StyledNoteLink>}
      </StyledNote>
      <StyledNote>
        {props.warning && <StyledSymbol><MdWarningAmber /></StyledSymbol>}
        <span>{props.warning}</span>
      </StyledNote>
    </StyledNotes>
  )
}