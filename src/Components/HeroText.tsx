import { Button, Flex, Heading, Text } from '@chakra-ui/core';
import React from 'react';

export const HeroText = () => {
	return (
		<Flex flexDir='column' justifyContent='space-evenly' maxW='md'>
			<Heading as='h1' fontSize='6xl' fontWeight='bold' my='2'>
				Hey, I'm a<span style={{ color: '#3182CE' }}> digital </span>
				product developer
			</Heading>
			<Text my='2'>
				Hi, I’m Dheeraj a Web designer and Front-end developer, who
				loves crafting fast and easy to use web applications.
			</Text>
			<Button my='3' rounded='lg' variantColor='blue'>
				Find out more
			</Button>
		</Flex>
	);
};
