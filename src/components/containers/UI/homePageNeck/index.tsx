import React, { useState } from "react";
import { StyledListCategory, StyledPageNeck, StyledText } from "./styles"

export const HomePageNeck = (props: any) => {

  const clicked = { "backgroundColor": "#f9e8ee", "color": "#8a0d37", "border": "none" };
  const [actionStyle, setActionStyle] = useState<Object | {}>(clicked);
  const [cartoonStyle, setCartoonStyle] = useState<Object>({});

  const changeStyle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const name = event.currentTarget.name;
    if (name === "Hành động và phiêu lưu") {
      setActionStyle(clicked);
      setCartoonStyle({});
    } else {
      setActionStyle({});
      setCartoonStyle(clicked);
    }
    props.onChangeFilter(name);
  };

  return (
    <StyledPageNeck>
      <StyledListCategory
        style={actionStyle}
        name="Hành động và phiêu lưu"
        onClick={changeStyle}>
        <StyledText>Hành động và phiêu lưu</StyledText>
      </StyledListCategory>
      <StyledListCategory
        style={cartoonStyle}
        name="Hoạt hình"
        onClick={changeStyle}>
        <StyledText>Hoạt hình</StyledText>
      </StyledListCategory>
    </StyledPageNeck>
  )
}