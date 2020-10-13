import { Box, Flex, useColorMode } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { HeroText } from '../Components/HeroText';

export const Hero = () => {
	const { colorMode } = useColorMode();

	const textColor = { light: 'black', dark: 'white' };

	const images = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "images/me.jpeg" }) {
				childImageSharp {
					fluid {
						aspectRatio
						base64
						src
						srcSet
						sizes
						srcSetWebp
						srcWebp
					}
				}
			}
		}
	`);

	return (
		<Flex
			w='full'
			justifyContent='center'
			alignItems='center'
			p='5'
			my={{ base: '5', lg: '32' }}
			color={textColor[colorMode]}
		>
			<Flex
				w='full'
				h='full'
				flexDir={{ base: 'column', lg: 'row' }}
				justifyContent='space-evenly'
				alignItems='center'
				p='5'
				color={textColor[colorMode]}
			>
				<HeroText />

				<Box
					size={{ base: 'xs', md: 'md' }}
					borderTopLeftRadius={{ base: 'lg', lg: 'full' }}
					borderTopRightRadius={{ base: 'lg', lg: 'full' }}
					borderBottomRightRadius={{ base: 'lg', lg: 'full' }}
					borderBottomLeftRadius='lg'
					overflow='hidden'
					objectFit='cover'
					my={{ base: '16', md: '3' }}
					shadow='lg'
				>
					<Img
						fluid={images.file.childImageSharp.fluid}
						alt='Profile image'
						style={{ width: '100%', height: '100%' }}
					/>
				</Box>
			</Flex>
		</Flex>
	);
};
