import React from "react";
import styled from "styled-components";
import { useResourceContext } from "../Context/ResourceContext";

const Footer: React.FC = () => {
	const { CONSTANTS } = useResourceContext();
	return (
		<FootWrapper device={CONSTANTS.DEVICES}>
			Probably will put some Mili lyrics here
		</FootWrapper>
	);
};

const FootWrapper = styled.div<{ device: { [key: string]: any } }>`
	height: 30px;
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

export default Footer;
