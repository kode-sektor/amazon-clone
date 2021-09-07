import React, { useState } from "react"
import { Link } from 'react-router-dom'

import { Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators
} from "reactstrap";
import { PrimaryBtn, CartBtnSmall, CartBtn } from '../../Button'
import Badge from '../../Badge'

import './index.css'


const Slider = ({type, count, items, carouselClass, carouselID, id, giftCardAux,
	 cartBtnSmall, interval=5000, addToCart=false}) => {

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
				const { dealOfTheDay, href, caption, extraCaption, price, priceRange, 
					percentOff, category, prime, date, similarItems, buyingOptions, viewDeal } = item

				tempCarousel = [
					...tempCarousel,
					(
						/*Create room for 'Add to Cart' button for Orders page*/
						<li className={(addToCart || viewDeal) && 'order__slider'}>
							{
								item.bestSellerAux && (
									<Badge/>
								)
							}
							<figure>
								<Link key={index} to={item.href}>
									<img src={item.src} alt={item.altText} />
								</Link>
								<figcaption>
									{
										dealOfTheDay && (
											<section className="overflow-auto">
												<span className="dotdBadge a__size__mini">
													DEAL OF THE DAY
												</span>
												<span className="badgeSkew a__size__mini a__color__secondary"></span>
											</section>
										)
									}
									{
										priceRange && (
											<section className="a__spacing__mini">
												<span className="dealPriceExpiredText a__size__medium__ii">
													{priceRange}
												</span>
											</section>
										)
									}
									{
										percentOff && (
											<section className="a__spacing__mini">
												<span className="a__size__base a__color__base">
													List: $35.99 ({percentOff}% off)
												</span>
											</section>
										)
									}
									{item.caption ? 
										(
											<>
												{
													
												}
												<Link to={item.href}>
													<div className="amzn__carousel__caption">{item.caption}</div>
												</Link>
												{item.extraCaption && 
													(<span className="amzn__extra__caption d-block">
														{item.extraCaption}
													</span>)
												}
												{/*Reorder price and stars if on Gift cards page*/}
												{ // For bottom (2nd) slider on Gift page
													(carouselID === "amzn__gift__cards" && giftCardAux) && (
														<span className={`amzn__carousel__star ${carouselID}`}></span>
													)
												}
												{
													// Only show price on bottom (2nd) slider on GiftCard Page
													// or on Carousel of other pages
													((carouselID !== "amzn__gift__cards" && !giftCardAux) || giftCardAux) ?
													(
														<span className="amzn__carousel__count"> 1,833 </span>
													) : 
													""
												}
												{
													item.price && 
														(
															<div className="a__spacing__micro">
																<span className="amzn__price">
																	<span class="amzn__price__symbol">$</span>
																	<span class="amzn__price__whole">40
																		<span class="amzn__price__decimal">.</span>
																	</span>
																	<span class="amzn__price__fraction">00</span>
																</span>
															</div>
														)
												}
												{	// Show the stars below the price for 1st kind of slider in Gift page
													// For top (1st) slider on Gift page
													(carouselID === "amzn__gift__cards" && !giftCardAux) && (
														<span className={`amzn__carousel__star ${carouselID}`}></span>
													)
												}
												{
													(carouselID === "amzn__gift__cards" && !giftCardAux) ?
													(
														<span className="amzn__carousel__count"> (1,833) </span>
													) : 
													""
												}
												<span className="amzn__carousel__offers"> </span>
												{
													item.category && !giftCardAux &&
													(
														<Link to="/" className="a__size__small a__link__normal amzn__best__seller" >
															<i className="a__icon a__icon__addon amzn__icon__bestSeller">
																#1 Best Seller
															</i>
															<span className="a__size__small a__color__secondary">in&nbsp; 
																<span className="a__color__link amzn__carousel__delivery">
																	{item.category}
																</span>
															</span>
															&nbsp;
														</Link>
													)
												}
												{
													carouselID !== "amzn__gift__cards" && item.price && 
													(<span className="a__color__price d-block">$269.99</span>)
												}
												{item.prime && (	// Only on Order Page
													<span className="amzn__prime__badge d-block">
														<span className="amzn__prime__badge__icon"></span>&nbsp;
													</span>
												)}
												{(item.category || item.date) && (
													<span className="a__size__small a__color__secondary amzn__carousel__dateOfPurchase">Purchased Jan 2021 </span>
												)}
												{cartBtnSmall && (<CartBtnSmall/>)}	
											</>
										)
										: 
										(
											<div className="amzn__carousel__card">
												<span className="amzn__carousel__price">$188.99 </span>
												<span className="amzn__carousel__oldprice">$269.99 </span>
												<span className="amzn__carousel__deal">Deal has ended </span>
											</div> 
										)	
									} 
								</figcaption>
							</figure>
							{ addToCart && (
								<PrimaryBtn
									mTop={"mt-auto"}
									text={
										buyingOptions ? "See buying options" : similarItems ? "Similar items" : "Add to Cart"
									}
								/>
							)}
							{
								viewDeal && (
									(viewDeal === "Deal has ended" || viewDeal === "Sold Out") ? 
									<span className="viewDeal">{viewDeal}</span> : 
									<CartBtn
										text={
											viewDeal
										}
									/>
								)
							}
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
									{/* Forcing 6 images inside one ul (which is screen-wide) */}
									<ul className={`${carouselClass}__cards`}>{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})

		} else if (type === "prime") {
			slides = items.map((item, index) => {
				return (
					<CarouselItem
						className={carouselClass ? `${carouselClass} ${item.carouselStyle}` : ""}
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={index}
					>
						<CarouselCaption
							captionHeader={<span className="carousel-cardText">{item.heading}</span>}
							captionText={item.tag}
						/>
					</CarouselItem>
				)
			})
		} else if (type === "mini") {
			slides = items.map((item, index) => {
				return (
					<CarouselItem
						className={carouselClass ? `${carouselClass} ${item.carouselStyle}` : ""}
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={index}
					>
						<Link to={item.href}>
							<img src={item.src} alt={item.altText} />
						</Link>
					</CarouselItem>
				)
			})
		} else if (type === "coupon") {
			items.forEach((item, index) => {
				tempCarousel = [
					...tempCarousel,
					(
						/*Create room for 'Add to Cart' button for Orders page*/
						<li className={addToCart && 'order__slider'}>
							<section className="coupon__slideBox">
								<figure className="coupon__slideImg">
									<Link to={item.href} className="a__size__base">
										<img alt={item.altText} src={item.src} />
									</Link>
								</figure>
								{item.save && (<span className="coupon__itemPrice a__color__success a__size__medium font-weight-bold d-block">Save ${item.save}</span>)}
								<section className="coupon__itemTitle">
									<Link to={item.href} className="coupon__titleText a__size__base" title={item.caption}>
										{item.caption}
									</Link>
								</section>
								<PrimaryBtn 
									text={"Clip Coupon"}
								/>
							</section>
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
									{/* Forcing 6 images inside one ul (which is screen-wide) */}
									<ul className={`${carouselClass}__cards`}>{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		} else if (type === "testimonial") {
			slides = items.map((item, index) => {
				return (
					<CarouselItem
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={item.src}
					>
						<header className="carouselTestimonial__heading">
							<h4 className="carouselTestimonial__headingText">
								{item.title}
							</h4>
							<section className="carouselTestimonial__navControl">
								<span className="carouselTestimonial__currentSlide">
									{items.length < 10 && (0)}{activeIndex + 1}/ 
									{items.length < 10 && (0)}{items.length}
								</span>
							</section>
						</header>
						<section className="carouselTestimonial__quotes">
							<blockquote className="carouselTestimonial__quote">
								<p className="carouselTestimonial__Text">
									{item.caption}
								</p>
								<section className="carouselTestimonial__quoteAttribution d-flex align-items-center">
									<img src={item.avatar} />
									<cite className="carouselTestimonial__citation d-flex flex-column">
										<strong>{item.author}</strong>
										<span>{item.title}</span>
									</cite>
								</section>
							</blockquote>
							<Link to="/" className="carouselTestimonial__videoLink">
								<img src={item.img}/>
							</Link>
						</section>
					</CarouselItem>
				)
			})
		} else if (type === "affiliate") {
			slides = items.map((item, index) => {
				const {caption, text, src} = item
				return (
					<CarouselItem
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={item.src}
					>
						<section>
							<CarouselCaption
								captionText={text}
								captionHeader={caption}
							/>
						</section>
					</CarouselItem>
				)
			})
		}
		else {
			slides = items.map((item) => {
				return (
					<CarouselItem
						className={carouselClass ? carouselClass : ""}
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={item.src}
					>
						<Link to={item.href}>
							<img src={item.src} alt={item.altText} />
						</Link>
						<CarouselCaption
							captionText={item.caption}
							captionHeader={item.caption}
						/>
					</CarouselItem>
				)
			})
		}
		return slides
	}


	return (
		<Carousel 
			activeIndex={activeIndex} 
			next={next} 
			previous={previous}
			interval={interval}
		>
			{(type === "prime" || type === "affiliate") && // Carousel indicators should show for only prime slider
				(
					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				)
			}
			{slide()}
			{
				!giftCardAux || (type !== "affiliate") (
					<>
						<CarouselControl
							className={carouselClass && (`${carouselClass}__control`)}
							direction="prev"
							directionText="Previous"
							onClickHandler={previous}
						/>
						<CarouselControl
							className={carouselClass && (`${carouselClass}__control`)}
							direction="next"
							directionText="Next"
							onClickHandler={next}
						/>
					</>
				)
			}
			{
				// Add hr in HomeImprovement page
				id=="homeImprovement" && (
					<section className="position-relative" style={{clear: "both", paddingTop: "42px"}}>
						<hr className="a__divider__normal"/>
						<Link to="/" className="float-right">Restrictions Apply</Link>
					</section>
				)
			}
		</Carousel>
	);
};

export default Slider;
