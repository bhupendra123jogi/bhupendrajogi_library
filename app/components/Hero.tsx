'use client';

import {
	createStyles,
	Overlay,
	Container,
	Title,
	Button,
	Text,
	rem,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
	hero: {
		position: 'relative',
		backgroundImage:
			'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		boxShadow: '0 10px 10px 5px rgba(0, 0, 0, .1)',
		height: rem(825),
	},

	container: {
		height: rem(750),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		paddingBottom: `calc(${theme.spacing.xl} * 6)`,
		zIndex: 1,
		position: 'relative',
		fontFamily: 'JetBrains Mono, monospace',

		[theme.fn.smallerThan('sm')]: {
			height: rem(500),
			paddingBottom: `calc(${theme.spacing.xl} * 3)`,
		},
	},

	title: {
		color: theme.white,
		fontSize: rem(60),
		fontWeight: 900,
		fontFamily: 'JetBrains Mono, monospace',
		lineHeight: 1.1,

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(40),
			lineHeight: 1.2,
		},

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(28),
			lineHeight: 1.3,
		},
	},

	description: {
		color: theme.white,
		maxWidth: 600,
		fontFamily: 'JetBrains Mono, monospace',
		textShadow: `0 0 ${theme.spacing.xs} ${theme.colors.dark[9]}`,

		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
			fontSize: theme.fontSizes.sm,
		},
	},

	control: {
		marginTop: `calc(${theme.spacing.xl} * 1.5)`,

		[theme.fn.smallerThan('sm')]: {
			width: '100%',
		},
	},
}));

export function HeroContentLeft() {
	const { classes } = useStyles();

	return (
		<div className={classes.hero}>
			<Overlay
				gradient='linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)'
				opacity={1}
				zIndex={0}
			/>
			<Container className={classes.container}>
				<Title className={classes.title}>A Online Book Library</Title>
				<Text className={classes.description} size='xl' mt='xl'>
					Welcome to the Book Library! Explore our comprehensive collection of
					programming notes for professionals. Discover valuable resources on
					Xamarin Forms, Visual Basic .NET, TypeScript, Swift, SQL, and more.
					Enhance your skills in mobile development, web development, scripting,
					and databases. Start your learning journey today and excel in your
					chosen field.
				</Text>

				<button
					className={'btn btn-secondary glass btn-wide' + ' ' + classes.control}
					onClick={() => {
						// scroll 100vh down
						window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
					}}>
					Get started
				</button>
			</Container>
		</div>
	);
}
