import { Box, Heading, PseudoBox, SimpleGrid } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export const Portfolio = () => {
	const images = useStaticQuery(graphql`
		query {
			allFile(
				filter: {
					extension: { regex: "/(png)/" }
					name: { regex: "/(portfolio)/" }
				}
			) {
				edges {
					node {
						name
						childImageSharp {
							fluid(quality: 80) {
								aspectRatio
								base64
								sizes
								src
								srcSet
								srcSetWebp
								srcWebp
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Box id='service' w='full' py='10'>
			<Heading as='h2' m={{ base: '2', md: '10', xl: '24' }}>
				Portfolio
			</Heading>

			<SimpleGrid
				columns={{ base: 1, md: 3 }}
				spacing={10}
				mx={{ base: '2', md: '10', xl: '24' }}
			>
				{images.allFile.edges.map((image, key) => (
					<PseudoBox
						key={key}
						size='sm'
						rounded='lg'
						overflow='hidden'
						objectFit='cover'
						my={{ base: '16', md: '3' }}
						_hover={{ boxShadow: '5px 5px 15px #000000' }}
					>
						<Img
							fluid={image.node.childImageSharp.fluid}
							alt='Profile image'
							style={{ width: '100%', height: '100%' }}
						/>
					</PseudoBox>
				))}
			</SimpleGrid>
		</Box>
	);
};
