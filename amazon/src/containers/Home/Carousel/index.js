import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption
} from "reactstrap";

import './index.css'


const Slider = ({type, count, items, carouselClass}) => {

	let itemLength = items.length

	// Do this to avoid extra empty sliders because the default reactstrap 
	// sliding mechanism relies on the length of the items supplied 

	// And since you have a customised length of items squeezed into a single
	// page slider, this compromises the expected number of sliders -- creating
	// extra blanks

	if (count) {
		itemLength = Math.ceil(items.length / count)
	}

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? itemLength - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};
	
	const slide = () => {

		let slides = []
		let tempCarousel = []

		// Condition to allow Carousel hold multiple images inside 1 carousel slide
		if (type === "multiImage") {

			items.forEach((item, index) => {
				tempCarousel = [
									...tempCarousel,
									(
										<li>
											<figure>
												<a key={index} href={item.href}>
													<img src={item.src} alt={item.altText} />
												</a>
												<figcaption>
													{/* {item.caption} */}
													<div className="secondary__carousel__card">
														<span className="secondary__carousel__price">$188.99</span>
														<span className="secondary__carousel__oldprice">$269.99</span>
														<span className="secondary__carousel__deal">Deal has ended</span>
													</div>
												</figcaption>
											</figure>
										</li>
									)
				]
				
				// Only wrap with <Carousel> once the number of multiple images reaches. 
				// In this case (6). Or wrap on last cycle. That makes one screen-wide slider.
				if ((((index + 1) % count) === 0) || (index + 1) === items.length) {
					slides = [
								...slides,
								<CarouselItem
									className={carouselClass ? carouselClass : ""}
									onExiting={() => setAnimating(true)}
									onExited={() => setAnimating(false)}
									key={index}
								>
									<ul className={`${carouselClass}__cards`}>{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})

		} else {
			
			slides = items.map((item) => {
				return (
					<CarouselItem
						className={carouselClass ? carouselClass : ""}
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
			{/* <CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/> */}
			{slide()}
			<CarouselControl
				className={`${carouselClass}__control`}
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				className={`${carouselClass}__control`}
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
};

export default Slider;
