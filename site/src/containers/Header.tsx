import { Flex, theme, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { HeaderExtras } from '../Components/HeaderExtras';
import { Logo } from '../Components/Logo';
import { Nav } from '../Components/Nav';
import { Social } from '../Components/Social';

export const Header = () => {
	const { colorMode } = useColorMode();

	const textColor = { light: 'black', dark: 'white' };

	return (
		<Flex
			w='full'
			flexDir={{ base: 'column', md: 'row' }}
			justifyContent='space-around'
			p='5'
			color={textColor[colorMode]}
			zIndex={3}
		>
			<Logo />

			<Nav />

			<Social />

			<HeaderExtras />
		</Flex>
	);
};
