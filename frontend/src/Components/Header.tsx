import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { useResourceContext } from "../Context/ResourceContext";

import Tab from "../Refactory/Tab";

const Header: React.FC = () => {
	const { CONSTANTS, LINK_DEF, useTheme, useLan } = useResourceContext();
	const { getText } = useLan();
	const TAB_LABELS = getText("TAB_LABELS");
	const { getThemeColor } = useTheme();

	return (
		<HeaderWrapper device={CONSTANTS.DEVICES}>
			{Object.keys(TAB_LABELS).map((k) => {
				return (
					<NavButton
						to={LINK_DEF["TAB_LABELS"][k]}
						device={CONSTANTS.DEVICES}
						getThemeColor={getThemeColor}
					>
						<Tab key={k} tabName={getText("TAB_LABELS." + k)}></Tab>
					</NavButton>
				);
			})}
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.div<{ device: { [key: string]: any } }>`
	height: 40px;
	width: 100%;
	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
		display: flex;
	}
	@media ${(props) => props.device.tablet} {
	}
	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
	}
`;

const NavButton = styled(NavLink)<{
	device: deviceType;
	getThemeColor: (arg0: string) => string;
}>`
	line-height: 40px;
	background-color: ${(props) => props.getThemeColor("MAIN_COLOR_INACTIVE")};
	&.active {
		background-color: ${(props) => props.getThemeColor("MAIN_COLOR_ACIVE")};
	}

	color: ${(props) => props.getThemeColor("TAB_TEXT_COLOR")};
	text-align: center;
	border-left: 1px solid ${(props) => props.getThemeColor("TAB_TEXT_COLOR")};

	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
		width: 33.3%;
		font-size: 15px;
	}
	@media ${(props) => props.device.tablet} {
	}
	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
	}
`;

export default Header;
