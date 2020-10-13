import {
	Box,
	Flex,
	Heading,
	PseudoBox,
	Text,
	useColorMode,
} from '@chakra-ui/core';
import React from 'react';
import { FaTextHeight } from 'react-icons/fa';

export const ServiceCard = () => {
	const { colorMode } = useColorMode();

	const bgColor = { light: 'white', dark: 'gray.800' };

	return (
		<PseudoBox
			w='full'
			h='full'
			rounded='lg'
			p='5'
			shadow='lg'
			bg={bgColor[colorMode]}
			_hover={{ boxShadow: 'outline' }}
		>
			<Flex alignItems='center'>
				<Flex
					justifyContent='center'
					alignItems='center'
					p='5'
					rounded='full'
					bg='red.100'
					mx='3'
				>
					<Box as={FaTextHeight} size='12' color='red.500' />
				</Flex>
				<Heading as='h3' fontSize='xl' fontWeight='bold'>
					Branding & logo
				</Heading>
			</Flex>
			<Text p='5'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
				earum, fugiat veritatis vel deserunt ipsam suscipit nesciunt
				ipsa, atque velit ea voluptatem dolores, asperiores eaque.
				Doloribus vel dolorem labore nihil.
			</Text>
		</PseudoBox>
	);
};
