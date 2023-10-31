'use client';

import books from '../../public/list.json';
import { BackButton } from '../components/BackButton';

interface Book {
	link: string;
	image: string;
	name: string;
}

function formatBookNameFromQuery(
	queryName: string,
	bookList: Book[]
): string | null {
	const formattedQueryName = decodeURIComponent(queryName); // Decode the query name if needed

	const book = bookList.find(
		(book) => book.name.toLowerCase() === formattedQueryName.toLowerCase()
	);

	if (book) {
		return book.name;
	}

	return null; // Return null if the book name is not found in the list
}

export default function Page({ params }: { params: { id: string } }) {
	// console.log(list.list.find(book => book.name == formatBookNameFromQuery(params.id, list.list)))

	return (
		<div className='scroll-m-3'>
			<BackButton position='bottom-5 right-5' tooltipPos='tooltip-left' />
			{params.id == 'tos' ? (
				<div className='p-10'>
					<h1 className='text-4xl font-bold'>Terms of Service</h1>
					<ul className='list-disc list-inside mt-4'>
						<li>
							This site is made as a submission for the IGNITE COMPETITION
						</li>
					</ul>
				</div>
			) : params.id == 'privacy' ? (
				<div className='p-10'>
					<h1 className='text-4xl font-bold'>Privacy Policy</h1>
					<ul className='list-disc list-inside mt-4'>
						<li>
							This site is made as a submission for the IGNITE COMPETITION
						</li>
					</ul>
				</div>
			) : books.list.find(
					(book) => book.name == formatBookNameFromQuery(params.id, books.list)
			  ) != undefined ? (
				// <meta httpEquiv='refresh' content={`0;URL=${list.list.find(book => book.name == params.id)!.link}`} />
				<div
					style={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						height: '100vh',
						width: '100vw',
					}}>
					<object
						data={
							books.list.find(
								(book) =>
									book.name == formatBookNameFromQuery(params.id, books.list)
							)!.link
						}
						className='bg-base-100'
						type='application/pdf'
						width='100%'
						height='100%'>
						<p>
							Alternative text - include a link{' '}
							<a
								href={
									books.list.find(
										(book) =>
											book.name ==
											formatBookNameFromQuery(params.id, books.list)
									)!.link
								}>
								to the PDF!
							</a>
						</p>
					</object>
				</div>
			) : (
				// 404 page
				<div className='p-10'>
					<h1 className='text-4xl font-bold'>404</h1>
					<p className='text-2xl'>Page not found</p>
				</div>
			)}
		</div>
	);
}
