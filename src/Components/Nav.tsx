import { Flex, List, ListItem } from '@chakra-ui/core';
import React from 'react';

export const Nav = () => {
	return (
		<Flex>
			<List display='inline-flex'>
				<ListItem p='2'>Services</ListItem>
				<ListItem p='2'>Portfolio</ListItem>
				<ListItem p='2'>About</ListItem>
				<ListItem p='2'>Contact</ListItem>
			</List>
		</Flex>
	);
};
