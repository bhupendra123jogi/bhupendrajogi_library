'use client';
import list from '../../public/list.json';
import { Card as CCard } from './Card';
import { SimpleGrid, Flex } from '@mantine/core';
import { useEffect, useState } from 'react';

import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	card: {
		transition: 'transform 150ms ease, box-shadow 150ms ease',

		'&:hover': {
			transform: 'scale(1.4)',
			boxShadow: theme.shadows.md,
		},
	},
}));

export function ArticlesCardsGrid() {
	const { classes } = useStyles();
	let [cols, setCols] = useState(4);
	let [maxWidth, setMaxWidth] = useState(1800);

	let l;

	useEffect(() => {
		// set the number of columns
		let cols = 4,
			maxWidth = 1800;
		if (window.innerWidth < 1800) {
			cols = 3;
			maxWidth = 1200;
		}
		if (window.innerWidth < 1200) {
			cols = 2;
			maxWidth = 800;
		}
		if (window.innerWidth < 800) {
			cols = 1;
			maxWidth = 400;
		}
		setCols(cols);
		setMaxWidth(maxWidth);
	}, []);

	// sort the list by name and tags
	l = list.list
		.sort((a, b) => {
			if (a.name > b.name) return 1;
			else if (a.name < b.name) return -1;
			else return 0;
		})
		.sort((a, b) => {
			if (a.tags.length > b.tags.length) return 1;
			else if (a.tags.length < b.tags.length) return -1;
			else return 0;
		});

	const cards = l.map((book, i) => {
		return (
			<Flex
				key={book.name}
				direction='column'
				align='center'
				justify='center'>
				<CCard
					key={book.name}
					image={book.image}
					link={book.link}
					name={book.name}
					tags={book.tags}
				/>
			</Flex>
		)
	});

	return (
		<>
			<SimpleGrid
				cols={cols}
				spacing={100}
				mt={10}
				mx='auto'
				style={{ maxWidth: maxWidth }}
				className='mt-full'>
				{cards}
			</SimpleGrid>

			{/* // scroll back to top button like the back button from search page smooth scrolling */}
			<div className='fixed bottom-0 right-0 mb-10 mr-10'>
				<button
					onClick={() => {
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
					className='btn btn-accent btn-circle btn-lg'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 text-white'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
					</svg>
				</button>
			</div>
		</>
	);
}
