import React from 'react';
import { Header } from '../Containers/Header';
import { Hero } from '../Containers/Hero';
import { Portfolio } from '../Containers/Portfolio';
import { Service } from '../Containers/Service';

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Service />
			<Portfolio />
		</>
	);
}
