import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption
} from "reactstrap";

import './index.css'


const Slider = ({type, count, items}) => {

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};


	let carouselItem = []

	// const slides = (type==="multiImage") ?

	// 	items.map((item, i) => {

	// 		++i

	// 		if ((i % count) === 1) {
	// 			carouselItem = []
	// 		}

	// 		carouselItem.push(<a href={item.href}>
	// 							<figure>
	// 								<img src={item.src} alt={item.altText} />
	// 								<figcaption>{item.caption}</figcaption>
	// 							</figure>
	// 						</a>)

	// 		console.log(item.caption)

	// 		if (i > 3) {
	// 			return (
	// 				<CarouselItem
	// 					onExiting={() => setAnimating(true)}
	// 					onExited={() => setAnimating(false)}
	// 					key={item.src}
	// 				>
	// 					<a href={item.href}>
	// 						<img src={item.src} alt={item.altText} />
	// 					</a>
	// 					<CarouselCaption
	// 						captionText={item.caption}
	// 						captionHeader={item.caption}
	// 					/>
	// 				</CarouselItem>
	// 			)
	// 		} else {
	// 			if (i < 0) {
	// 				return (
	// 					<CarouselItem
	// 						onExiting={() => setAnimating(true)}
	// 						onExited={() => setAnimating(false)}
	// 						key={item.src}
	// 					>
	// 						<a href={item.href}>
	// 							<img src={item.src} alt={item.altText} />
	// 						</a>
	// 						<CarouselCaption
	// 							captionText={item.caption}
	// 							captionHeader={item.caption}
	// 						/>
	// 					</CarouselItem>
	// 				)
	// 			} else {
	// 				return ""
	// 			}
	// 		}
			
			// if ((i % count) === 1 || i === count) {
			// 	return(
			// 		<CarouselItem
			// 			onExiting={() => setAnimating(true)}
			// 			onExited={() => setAnimating(false)}
			// 			key={item.src}
			// 		>
			// 			{carouselItem}
			// 			<CarouselCaption
			// 				captionText={item.caption}
			// 				captionHeader={item.caption}
			// 			/>
			// 		</CarouselItem>
			// 	)
			// } else {
			// 	return ("")
			// }

		// }) 
		
	
	const slide = () => {

		let slides = []

		if (type === "multiImage") {

			items.forEach(item => {
				slides = [ ...slides, 
								<CarouselItem
									onExiting={() => setAnimating(true)}
									onExited={() => setAnimating(false)}
									key={item.src}
								>
									<a href={item.href}>
										<img src={item.src} alt={item.altText} />
									</a>
									<CarouselCaption
										captionText={item.caption}
										captionHeader={item.caption}
									/>
								</CarouselItem>
				]
			})
		} else {
			slides = items.map((item) => {
				return (
					<CarouselItem
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={item.src}
					>
						<a href={item.href}>
							<img src={item.src} alt={item.altText} />
						</a>
						<CarouselCaption
							captionText={item.caption}
							captionHeader={item.caption}
						/>
					</CarouselItem>
				);
			})
		}

		return slides

	}


	return (
		<Carousel 
			activeIndex={activeIndex} 
			next={next} 
			previous={previous}
			interval={false}
		>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slide()}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
};

export default Slider;
