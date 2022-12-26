import React from "react";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";

const ModeSwitcher = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	cursor: pointer;
	text-transform: capitalize;
`;

const ThemeSwitcher = () => {
	const [theme, toggleTheme] = useTheme();

	return (
		<ModeSwitcher onClick={toggleTheme}>
			{theme === "light" ? (
				<IoMoonOutline size="14px" />
			) : (
				<IoMoon size="14px" />
			)}
			{theme} Mode
		</ModeSwitcher>
	);
};

export default ThemeSwitcher;
