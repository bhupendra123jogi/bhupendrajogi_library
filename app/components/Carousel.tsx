import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
	createStyles,
	Paper,
	Text,
	Title,
	Button,
	useMantineTheme,
	rem,
} from '@mantine/core';
import {
	IconArrowLeft,
	IconArrowRight,
	IconSignLeft,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
	card: {
		height: 495,
		width: 350,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontWeight: 900,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: rem(32),
		marginTop: theme.spacing.xs,
	},

	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: 'uppercase',
	},

	download: {
		backgroundColor: `rgba(100, 26, 230, .8)`,
		color: theme.white,
		fontWeight: 700,
		borderRadius: theme.radius.md,
		padding: [theme.spacing.xs, theme.spacing.md],
		fontSize: rem(14),
		border: 0,
		cursor: 'pointer',
		outline: 0,
		transition: 'all 250ms ease',
		'&:hover': {
			backgroundColor: `rgba(100, 26, 230, 1)`,
			transform: 'scale(1.05)',
		},
		width: '100%',
		top: '400px',
		position: 'relative',
		boxShadow: '0 1px 10px rgba(0, 0, 0, 1)',
	},
}));

interface CardProps {
	image: string;
	link: string;
	name: string;
}

function Card({ image, link, name }: CardProps) {
	const { classes } = useStyles();

	return (
		<Paper
			shadow='md'
			p='xl'
			radius='md'
			sx={{
				backgroundImage: `url(${image})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			className={classes.card}
			onClick={() => window.open(name)}>
			<button className={classes.download} onClick={() => window.open(link)}>
				Download
			</button>
		</Paper>
	);
}

interface CardsCarouselProps {
	data: {
		image: string;
		link: string;
		name: string;
	}[];
}

export function CardsCarousel({ data }: CardsCarouselProps) {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const slides = data.map((item, index) => (
		<Carousel.Slide key={item.name}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
		<Carousel
			slideSize='20%'
			breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
			slideGap='xl'
			align='start'
			slidesToScroll={mobile ? 1 : 2}
			withControls
			loop
			withIndicators
			nextControlIcon={<IconArrowRight size='2rem' color='red' />}
			previousControlIcon={<IconArrowLeft size='2rem' color='red' />}>
			{slides}
		</Carousel>
	);
}
