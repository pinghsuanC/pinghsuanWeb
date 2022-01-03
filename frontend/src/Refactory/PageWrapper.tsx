import styled from "styled-components";
import React from "react";

const PageWrapper: React.FC<{
	children: React.ReactNode;
	getThemeColor: (arg0: string) => string;
	device: deviceType;
}> = ({ children, getThemeColor, device }) => {
	return (
		<PageDiv getThemeColor={getThemeColor} device={device}>
			{children}
		</PageDiv>
	);
};

const PageDiv = styled.div<{
	device: deviceType;
	getThemeColor: (arg0: string) => string;
}>`
	width: auto;
	min-height: 100vh;
	padding-top: 20px;
	background: ${(props) => props.getThemeColor("PAGE_BACKGROUND_COLOR")};

	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
	}
	@media ${(props) => props.device.tablet} {
	}
	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
	}
`;

export default PageWrapper;
