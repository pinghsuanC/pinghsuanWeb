import React, { useState } from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { useResourceContext } from "../Context/ResourceContext";

const StyledButton: React.FC<{ buttonText: string }> = ({ buttonText }) => {
	const { useTheme } = useResourceContext();
	const { getThemeColor } = useTheme();
	return <Button>{buttonText}</Button>;
};

const Button = styled.button``;
export default StyledButton;
