import Card from './Card/Card';
// import Slideshow from './Slideshow/Slideshow';
import scrubs from '../assets/pictures/products/scrubs.jpg';

export default function Content() {
	return (
		<main className='container'>
			{/* <Slideshow /> */}

			<h1 className='fw-bold'>Scrubs</h1>
			<div className='d-flex flex overflow-x-scroll'>
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
			</div>
			<br/><hr/><br/>
			<h1 className='fw-bold'>More Scrubs</h1>
			<div className='d-flex flex overflow-x-scroll'>
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
				<Card title='Scrub #1' img={scrubs} />
			</div>
		</main>
	);
}
