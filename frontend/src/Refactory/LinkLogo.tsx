import React, { useState } from "react";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { useResourceContext } from "../Context/ResourceContext";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

const LinkLogo: React.FC<{ linkInfo: linkInfoType }> = ({ linkInfo }) => {
	const { useTheme, useLan, CONSTANTS } = useResourceContext();
	const { getThemeColor } = useTheme();
	const { PERSONAL_LINK_TOOLTOPS } = useLan().text;
	const [isOver, setIsOver] = useState(false);

	return (
		<LinkWrapper
			onMouseEnter={() => setIsOver(true)}
			onMouseLeave={() => setIsOver(false)}
		>
			{/* tooltip are not showing on mobile screens */}
			<Tooltip
				placement="top"
				trigger={["hover"]}
				overlay={
					<div>
						<p style={{ textAlign: "center" }}>{linkInfo.name}</p>
						<p>{PERSONAL_LINK_TOOLTOPS[linkInfo.name]}</p>
					</div>
				}
			>
				<Anchor
					href={linkInfo.link}
					target="_blank"
					rel="noreferrer"
					device={CONSTANTS.DEVICES}
				>
					<IconContext.Provider
						value={{
							color: isOver
								? getThemeColor("MAIN_COLOR_ZERO")
								: getThemeColor("MAIN_COLOR_DARK"),
						}}
					>
						<linkInfo.logo />
					</IconContext.Provider>
					<LinkInfoDiv device={CONSTANTS.DEVICES}>
						<p>{PERSONAL_LINK_TOOLTOPS[linkInfo.name]}</p>
					</LinkInfoDiv>
				</Anchor>
			</Tooltip>
		</LinkWrapper>
	);
};

const LinkWrapper = styled.div`
	margin: 0;
	max-width: 90%;
	margin: 10px 0px 10px 0px;
`;
const Anchor = styled.a<{
	device: deviceType;
}>`
	@media ${(props) => props.device.mobileXs},
		${(props) => props.device.mobileS},
		${(props) => props.device.mobileM},
		${(props) => props.device.mobileL} {
		display: flex;

		align-items: center;
		justify-content: flex-start;
		font-size: 12px;
		text-align: left;
	}
	@media ${(props) => props.device.tablet} {
		margin: 10px 0px 10px 30px;
		font-size: 15px;
	}
	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
		margin: 10px 20px 10px 20px;
		font-size: 20px;
	}
`;

const LinkInfoDiv = styled.div<{
	device: deviceType;
}>`
	padding-left: 10px;

	@media ${(props) => props.device.laptop},
		${(props) => props.device.laptopL},
		${(props) => props.device.desktop} {
		display: none;
	}
`;

export default LinkLogo;
