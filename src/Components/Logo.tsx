import { Box, Icon, Text, useColorMode } from '@chakra-ui/core';
import React from 'react';

export const Logo = () => {
	const { colorMode } = useColorMode();

	const textColor = { light: 'blue.500', dark: 'blue.300' };

	return (
		<Box display='inline-flex' color={textColor[colorMode]} p='2'>
			<Icon name='at-sign' size='6' />
			<Text fontSize='lg' fontWeight='bold'>
				_mdrj
			</Text>
		</Box>
	);
};
