import { Box, Heading, SimpleGrid } from '@chakra-ui/core';
import React from 'react';
import { ServiceCard } from '../Components/ServiceCard';

export const Service = () => {
	return (
		<Box id='service' w='full' py='10' bg='blue.100'>
			<Heading as='h2' m={{ base: '2', md: '10', xl: '24' }}>
				What I do
			</Heading>

			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={10}
				mx={{ base: '2', md: '10', xl: '24' }}
			>
				{[1, 2, 3, 4].map((item) => (
					<ServiceCard />
				))}
			</SimpleGrid>
		</Box>
	);
};
