'use client';

import {
	createStyles,
	Header,
	Autocomplete,
	Group,
	Burger,
	rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
	IconBook,
	IconBook2,
	IconBooks,
	IconHomeSearch,
	IconList,
	IconSearch,
	IconSortAscendingLetters,
} from '@tabler/icons-react';
import list from '../../public/list.json';

const useStyles = createStyles((theme) => ({
	header: {
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		backgroundColor: '#212f4d',
		boxShadow: '0 1px 10px rgba(0, 0, 0, 1)',
		position: 'fixed',

		[theme.fn.smallerThan('xs')]: {
			paddingLeft: theme.spacing.xs,
			paddingRight: theme.spacing.xs,
			height: rem(112),
		},
	},

	inner: {
		height: rem(56),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	search: {
		[theme.fn.smallerThan('xs')]: {
			// move the search bar to the center
			position: 'absolute',
			left: '50%',
			transform: 'translateX(-50%)',
			width: 'calc(100% - 2rem)',
			maxWidth: 'calc(100% - 2rem)',
			zIndex: 100,
			// and below the title
			top: 'calc(100% - 3.5rem)',
		},
		width: '300px',
	},
}));

interface HeaderSearchProps {
	links: { link: string; label: string }[];
}

export function HeaderSearch() {
	const { classes } = useStyles();
	const [value, setValue] = useState('');
	let [size, setSize] = useState(0);

	let autocomplete: any[];
	// set the data for the autocomplete to search for tags and names
	autocomplete = list.list.map((book) => book.tags);
	autocomplete = autocomplete.flat();
	autocomplete = autocomplete.map((tag) => splitCombinedWords(tag));

	// FIXME: Unable to find books if searched by book name
	// autocomplete = autocomplete.concat(list.list.map((book) => book.name));

	autocomplete = autocomplete.sort();
	autocomplete = autocomplete.filter(
		(item, index) => autocomplete.indexOf(item) === index
	);

	const data = list.list.map((book) => book.name);
	data.sort();

	useEffect(() => {
		let search;
		setSize(window.innerWidth);

		if (value) {
			search = list.list.filter((book) =>
				book.name.toLowerCase().includes(value.toLowerCase())
			);
			if (search.length == 0) {
				search = list.list.filter((book) =>
					book.tags.some((tag) =>
						tag.toLowerCase().includes(value.toLowerCase())
					)
				);
				if (search.length == 0) {
					alert('No books found');
				}
			}
			document.addEventListener('keydown', function (event) {
				if (event.key === 'Enter') {
					window.location.href = `/search?query=${value}`;
				}
			});
		}
	}, [value]);

	return (
		<>
			{size < 768 ? (
				<Header
					height={112}
					className={classes.header}
					style={{
						paddingLeft: '1rem',
						paddingRight: '1rem',
					}}>
					<div className={classes.inner}>
						<Group
							style={{
								fontSize: '1.1rem',
								fontWeight: '700',
							}}>
							<IconBooks size='1.5rem' />
							Koding Books
						</Group>

						<Group>
							<Autocomplete
								className={classes.search}
								placeholder='Search'
								icon={<IconSearch size='1rem' stroke={1.5} />}
								data={autocomplete}
								limit={10}
								value={value}
								onChange={setValue}
								radius={15}
								bg={'#212f4d'}
								rightSection={<div className='kbd kbd-sm'>/</div>}
							/>
						</Group>
					</div>
				</Header>
			) : (
				<Header height={56} className={classes.header}>
					<div className={classes.inner}>
						<Group
							style={{
								fontSize: '1.1rem',
								fontWeight: '700',
							}}>
							<IconBooks size='1.5rem' />
							Koding Books
						</Group>

						<Group>
							<Autocomplete
								className={classes.search}
								placeholder='Search'
								icon={<IconSearch size='1rem' stroke={1.5} />}
								data={autocomplete}
								limit={10}
								value={value}
								onChange={setValue}
								radius={15}
								bg={'#212f4d'}
								rightSection={<div className='kbd kbd-sm'>/</div>}
							/>
						</Group>
					</div>
				</Header>
			)}
		</>
	);
}

import _, { size } from 'lodash';
import { MutableRefObject, useContext, useEffect, useState } from 'react';
import { Hash } from 'crypto';

function splitCombinedWords(str: string) {
	var words = str.split(/(?=[A-Z])/); // Split at uppercase letters

	var result = _.map(words, function (word: string, index: number) {
		if (index > 0 && word === word.toUpperCase()) {
			return ' ' + word;
		}
		return _.startCase(word.toLowerCase());
	});

	return result.join(' ');
}
