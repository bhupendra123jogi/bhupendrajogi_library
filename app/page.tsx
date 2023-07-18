'use client';

import { HeaderSearch as Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroContentLeft as Hero } from './components/Hero';
import { ArticlesCardsGrid } from './components/ArticlesCardsGrid';

export default function Home() {
	return (
		<div className='bg-base-100'>
			<Navbar />
			<div style={{ marginTop: 56, marginBottom: -50 }} className='bg-base-100'>
				<Hero />
			</div>

			{/* write a section for small description about the website */}
			{/* Welcome to our web application dedicated to promoting educational equality. Our platform provides free and open-source books on various topics, including computer programming, web development, mobile app development, data analysis, software engineering, and more. We believe in bridging the educational gap by offering easily accessible learning materials contributed by a passionate community of educators and professionals. Join us in our mission to make quality education accessible to all. Explore our extensive library of books on programming languages, web frameworks, data analysis tools, and software engineering practices. Together, let's create a more equitable and inclusive educational landscape, empowering individuals to unlock their full potential. */}
			<div className='bg-base-100 mt-[10rem]'>
				<div className='container mx-auto'>
					<div className='text-center'>
						<h1 className='text-4xl font-bold'>About</h1>
						<p className='text-xl mt-5'>
							Welcome to our web application dedicated to promoting educational
							equality. Our platform provides free and open-source books on
							various topics, including computer programming, web development,
							mobile app development, data analysis, software engineering, and
							more. We believe in bridging the educational gap by offering
							easily accessible learning materials contributed by a passionate
							community of educators and professionals.
						</p>
						<p className='text-xl mt-5'>
							Join us in our mission to make quality education accessible to
							all. Explore our extensive library of books on programming
							languages, web frameworks, data analysis tools, and software
							engineering practices. Together, let's create a more equitable and
							inclusive educational landscape, empowering individuals to unlock
							their full potential.
						</p>
					</div>
				</div>
			</div>

			<div className='bg-base-100 mt-[10rem]'>
				<ArticlesCardsGrid />
			</div>
			<Footer />
		</div>
	);
}
