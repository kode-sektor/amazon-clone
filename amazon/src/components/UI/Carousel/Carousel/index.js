import React, { useState } from "react"
import { Link } from 'react-router-dom'

import { BiPlay } from 'react-icons/bi'
import { AiOutlinePlus, AiFillStar } from 'react-icons/ai'
import { BiBookmarkPlus } from 'react-icons/bi'
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs'
import { RiPlayCircleLine } from 'react-icons/ri'
import { IoMdPhotos } from 'react-icons/io'
import { GrUnorderedList } from 'react-icons/gr'

import { Carousel, CarouselItem, CarouselControl, CarouselCaption, CarouselIndicators
} from "reactstrap";
import { PrimaryBtn, CartBtnSmall, CartBtn, BtnBook } from '../../Button'
import { BestSellerAux } from '../../Badge'

import './index.css'

const Slider = ({type, count, items, carouselClass, carouselID, id, giftCardAux,
	 cartBtnSmall, reorderStarPrice, interval=5000, addToCart=false, onlyCaption=false }) => {

	let itemLength = items.length

	// Do this to avoid extra empty sliders because the default reactstrap 
	// sliding mechanism relies on the length of the items supplied 

	// And since you have a customised length of items squeezed into a single
	// page slider, this compromises the expected number of sliders -- creating
	// extra blanks

	if (count) {
		itemLength = Math.ceil(items.length / count)
	}
	if (type === "music-nonagon") {
		itemLength = Math.ceil(items.length / 9)
	}

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === itemLength - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	}

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? itemLength - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	}

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	}
	
	const slide = () => {

		let slides = []
		let tempCarousel = []

		// Condition to allow Carousel hold multiple images inside 1 carousel slide
		if (type === "multi-image") {

			items.forEach((item, index) => {
				const { dealOfTheDay, href, src, altText, caption, extraCaption, price, priceRange, 
					percentOff, category, prime, date, similarItems, buyingOptions, viewDeal } = item

				tempCarousel = [
					...tempCarousel,
					(
						/*Create room for 'Add to Cart' button for Orders page*/
						<li className={(addToCart || viewDeal) && 'order__slider'}>
							{
								item.bestSellerAux && (
									<BestSellerAux/>
								)
							}
							<figure>
								<Link key={index} to={href}>
									<img src={src} alt={altText} />
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
									{caption ? 
										(
											<>
												{
													
												}
												<Link to={href}>
													<div className="amzn__carousel__caption">{item.caption}</div>
												</Link>
												{extraCaption && 
													(<span className="amzn__extra__caption d-block">
														{extraCaption}
													</span>)
												}
												{/*Reorder price and stars if on Gift cards page*/}
												{ // For bottom (2nd) slider on Gift page
													((carouselID === "amzn__gift__cards" && giftCardAux) || reorderStarPrice) && (
														<span className={`amzn__carousel__star ${carouselID}`}></span>
													)
												}
												{
													// Only show price on bottom (2nd) slider on GiftCard Page
													// or on Carousel of other pages
													((carouselID !== "amzn__gift__cards" && !giftCardAux) || giftCardAux || reorderStarPrice) ?
													(
														<span className="amzn__carousel__count"> 1,833 </span>
													) : 
													""
												}
												{
													price && 
														(	
															<div className="a__spacing__micro" style={{clear: "left"}}>
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
													((carouselID === "amzn__gift__cards" && !giftCardAux) && !reorderStarPrice) && (
														<span className={`amzn__carousel__star ${carouselID}`}></span>
													)
												}
												{
													(carouselID === "amzn__gift__cards" && !giftCardAux && !reorderStarPrice) ?
													(
														<span className="amzn__carousel__count"> (1,833) </span>
													) : 
													""
												}
												<span className="amzn__carousel__offers"> </span>
												{
													category && !giftCardAux &&
													(
														<Link to="/" className="a__size__small a__link__normal amzn__best__seller" >
															<i className="a__icon a__icon__addon amzn__icon__bestSeller">
																#1 Best Seller
															</i>
															<span className="a__size__small a__color__secondary">in&nbsp; 
																<span className="a__color__link amzn__carousel__delivery">
																	{category}
																</span>
															</span>
															&nbsp;
														</Link>
													)
												}
												{
													carouselID !== "amzn__gift__cards" && price && 
													(<span className="a__color__price d-block">$269.99</span>)
												}
												{prime && (	// Only on Order Page
													<span className="amzn__prime__badge d-block">
														<span className="amzn__prime__badge__icon"></span>&nbsp;
													</span>
												)}
												{(category || date) && (
													<span className="a__size__small a__color__secondary amzn__carousel__dateOfPurchase">Purchased Jan 2021 </span>
												)}
												{
													cartBtnSmall && 
													(	<>
															<br/>
															<CartBtnSmall/>
														</>
													)
												}	
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
									<ul className={carouselClass && `${carouselClass}__cards`}>{tempCarousel}</ul>
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
									<img src={item.avatar} alt="carousel testimonial avatar" />
									<cite className="carouselTestimonial__citation d-flex flex-column">
										<strong>{item.author}</strong>
										<span>{item.title}</span>
									</cite>
								</section>
							</blockquote>
							<Link to="/" className="carouselTestimonial__videoLink">
								<img src={item.img} alt="carousel testimonial video display" />
							</Link>
						</section>
					</CarouselItem>
				)
			})
		} 
		// else if (type === "affiliate") {
		// 	slides = items.map((item, index) => {
		// 		const {caption, text, src} = item
		// 		return (
		// 			<CarouselItem
		// 				onExiting={() => setAnimating(true)}
		// 				onExited={() => setAnimating(false)}
		// 				key={item.src}
		// 			>
		// 				<section>
		// 					<CarouselCaption
		// 						captionText={text}
		// 						captionHeader={caption}
		// 					/>
		// 				</section>
		// 			</CarouselItem>
		// 		)
		// 	})
		// }
		else if (type === "music") {
			items.forEach((item, index) => {
				const { href, src, altText, caption, tags } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li>
							<figure>
								<Link to={href}>
									<img className="music__carouselImg" src={src} alt={altText} />
								</Link>
								<figcaption>
									<em>{caption}</em><br/>
									{ tags && (<span>{tags}</span>) }
								</figcaption>
								<button className="music__carouselBtn">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path fill="#fff" id="ic_chevron_caretright-a" d="M10,18 C9.744,18 9.488,17.902 9.293,17.707 C8.902,17.316 8.902,16.684 9.293,16.293 L13.586,12 L9.293,7.707 C8.902,7.316 8.902,6.684 9.293,6.293 C9.684,5.902 10.316,5.902 10.707,6.293 L15.707,11.293 C16.098,11.684 16.098,12.316 15.707,12.707 L10.707,17.707 C10.512,17.902 10.256,18 10,18 Z"></path>
									</svg>
								</button>
							</figure>
						</li>
					)
				]
				if ((((index + 1) % count) === 0) || (index + 1) === items.length) {
					slides = [
								...slides,
								<CarouselItem
									className="music__carousel amzn__carousel"
									onExiting={() => setAnimating(true)}
									onExited={() => setAnimating(false)}
									key={index}
								>
									{/* Forcing 6 images inside one ul (which is screen-wide) */}
									{/* Pick the last class if 2 classes are passed 
									e.g. "music__carousel amzn__carousel" to "amzn__carousel" */}
									<ul className="amzn__carousel__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "music-nonagon") {	
			items.forEach((item, index) => {
				const { href, src, altText, caption, tags } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li>
							<figure>
								<Link to={href}>
									<img className="music__nonagonImg" src={src} alt={altText} />
								</Link>
								<figcaption>
									<em>{caption}</em>
									{ tags && (<span>{tags}</span>) }
								</figcaption>
								<button className="music__carouselBtn">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path fill="#fff" id="ic_chevron_caretright-a" d="M10,18 C9.744,18 9.488,17.902 9.293,17.707 C8.902,17.316 8.902,16.684 9.293,16.293 L13.586,12 L9.293,7.707 C8.902,7.316 8.902,6.684 9.293,6.293 C9.684,5.902 10.316,5.902 10.707,6.293 L15.707,11.293 C16.098,11.684 16.098,12.316 15.707,12.707 L10.707,17.707 C10.512,17.902 10.256,18 10,18 Z"></path>
									</svg>
								</button>
							</figure>
							<section className="music__nonagonImgCtrl">
								<div className="music__nonagonImgPlay">
									<button><BiPlay /></button>
								</div>
								<div className="music__nonagonImgMainCtrl">
									<button><AiOutlinePlus /></button>
									<button><BsThreeDots /></button>
								</div>
							</section>
						</li>
					)
				]
				// Leave 'count' in case programmer decides to retain its use
				if ((((index + 1) % count) === 0) || (((index + 1) % 9) === 0) || (index + 1) === items.length) {
					slides = [
								...slides,
								<CarouselItem
									className="musicNonagon__carousel"
									onExiting={() => setAnimating(true)}
									onExited={() => setAnimating(false)}
									key={index}
								>
									{/* Forcing 6 images inside one ul (which is screen-wide) */}
									{/* Pick the last class if 2 classes are passed 
									e.g. "music__carousel amzn__carousel" to "amzn__carousel" */}
									<ul className="amznMusic__carousel__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "books") {
			items.forEach((item, index) => {
				const { href, src, altText, caption, author, rating, price, oldPrice } = item
				const save = oldPrice ? parseFloat(oldPrice) - parseFloat(price) : parseFloat(price)
				const discount = oldPrice ? Math.floor((save / parseFloat(oldPrice)) * 100) : ""

				tempCarousel = [
					...tempCarousel,
					(
						<li>
							<figure>
								<Link to={href}>
									<img className="" src={src} alt={altText} />
									<div className="savings__splat">
										{discount}%<br/>
										off
									</div>
								</Link>
								<figcaption>
									<h3 className="amazonBook__carouselCaption">
										<Link to="/">{caption}</Link>
									</h3>
									<p className="amazonBook__carouselAuthor">
										<Link to="/">{author}</Link>
									</p>
									<section className="d-inline-block">
										<Link to="/" className="amazonBook__carouselRating">
											{rating}
										</Link>
									</section>
									<section className="amazonBook__carouselPrices">
										<span className="amazonBook__carouselPrice ">C${price}</span>&nbsp;&nbsp;
										<span className="amazonBook__carouselOldPrice">C${oldPrice}</span>
										<section className="amazonBook__carouselFraction">
											<span>Save: C${save}</span>
										</section>
									</section>
									<BtnBook />
								</figcaption>
							</figure>
						</li>
					)
				]
				if ((((index + 1) % count) === 0) || (index + 1) === items.length) {
					slides = [
								...slides,
								<CarouselItem
									className="book__carousel amzn__carousel"
									onExiting={() => setAnimating(true)}
									onExited={() => setAnimating(false)}
									key={index}
								>
									{/* Forcing 6 images inside one ul (which is screen-wide) */}
									{/* Pick the last class if 2 classes are passed 
									e.g. "music__carousel amzn__carousel" to "amzn__carousel" */}
									<ul className="book__carousel__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "advertising") {
			slides = items.map((item, index) => {
				return (
					<CarouselItem
						className={carouselClass ? carouselClass + " " + item.banner : item.banner}
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={index}
					>	
						<section className="advertising__carousel__caption">
							<CarouselCaption
								captionHeader={item.heading}
								captionText={
									<>
										{item.caption} 
										<span className="d-block">
											<Link to={item.href} className="learn__more">
												Learn More
											</Link>
										</span>
									</>
								}
							/>
						</section>
					</CarouselItem>
				)
			})
		}
		else if (type === "imdb") {
			slides = items.map((item, index) => {
				const { img, imgAppendix, caption, captionSubheading, runtime } = item
				return (
					<CarouselItem
						className={carouselClass}
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={index}
					>	
						<section className="position-relative h-100">
							<figure className="d-flex">
								<section className="imdb__appendixImg">
									<div className="imdb__appendixRibbon">
										<span className="d-block h-100">
											<BiBookmarkPlus />
										</span>
									</div>
									<section className="imdb__appendixImgContainer">
										{imgAppendix}
									</section>
								</section>
								<section className="imdb__carouselFeatured">
									<section className="imdb__carouselFeaturedImg">
										{img}
									</section>
									<section className="imdb__carouselFeaturedOverlay">
										<figcaption>
											<div className="imdb__carouselCirclePlay display-4">
												<RiPlayCircleLine />
											</div>
											<section className="imdb__carouselFeaturedTitle">
												<section className="imdb__carouselFeaturedTxt">
													<span className="imdb__carouselFeaturedName">
														{caption}
													</span>
													<span className="imdb__carouselRuntime">
														{runtime}
													</span>
												</section>
												<section className="imdbcarouselFeaturedSlide">
													{captionSubheading}
												</section>
											</section>
										</figcaption>
									</section>
								</section>
							</figure>
						</section>
					</CarouselItem>
				)
			})
		}
		else if (type === "imdb-secondary") {
			slides = items.map((item, index) => {
				const { href, img, img_two, list, runtime } = item
				return (
					<CarouselItem
						className={carouselClass}
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={index}
					>	
					{/* Always try to wrap the main content of the slider with a parent tag
					because the main transpiled element ".carousel-item" usually has a 
					"display: none" ruling. Without this extra parent, you may have to resort
					to styling that same ".carousel-item" parent with a different display property
					like "flex", "block" etc. which would eventually mess up the carousel */}
						<section>
							<figure>
								{img}
								<Link to={href}>
									<div className="imdb__slideSecOverlay"></div>
									<section className="imdb__lockupContent">
										<span className="imdb__slideSecIcon">
											{
												list ? <GrUnorderedList/> : <IoMdPhotos />
											}	
										</span>
										{
											list ? "List" : "Photos"
										}
									</section>
								</Link>
								<figcaption>
									<Link to="/">
										Most Anticipated New TV Shows Coming in 2022
									</Link>
								</figcaption>
							</figure>
							<figure>
								{img_two}
								<Link to="/">
									<div className="imdb__slideSecOverlay"></div>
									{
										runtime ? (
											<section className="imdb__lockupContent">
												<span className=""imdb__slideSecIcon>
													<RiPlayCircleLine />
												</span>
												{runtime}
											</section>
										) : 
										(
											<section className="imdb__lockupContent">
												<span className="imdb__slideSecIcon">
													<IoMdPhotos />
												</span>
												Photos
											</section>
										)
									}
								</Link>
								<figcaption>
									<Link to="/">
										Most Anticipated New TV Shows Coming in 2022
									</Link>
								</figcaption>
							</figure>
						</section>
					</CarouselItem>
				)
			})
		}
		else if (type === "imdb-secondary-regular") {
			items.forEach((item, index) => {
				const { href, img, vote, list, runtime, caption } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li>
							<figure>
								{img}
								<Link to={href}>
									<div className="imdb__slideSecOverlay"></div>
									{
										!runtime && (
											<section className="imdb__lockupContent">
												<span className="imdb__slideSecIcon">
													{
														(list || vote) ? <GrUnorderedList/> : <IoMdPhotos />
													}	
												</span>
												{
													list ? "List" : vote ? "Vote now" : "Photos"
												}
											</section>
	
										)
									}
									{
										runtime && (
											<section className="imdb__lockupContent">
												<span className=""imdb__slideSecIcon>
													<RiPlayCircleLine />
												</span>
												{runtime}
											</section>
										) 
										// : (
										// 	<section className="imdb__lockupContent">
										// 		<span className="imdb__slideSecIcon">
										// 			<IoMdPhotos />
										// 		</span>
										// 		Photos
										// 	</section>
										// )
									}
								</Link>
								<figcaption>
									<Link to="/">
										{caption}
									</Link>
								</figcaption>
							</figure>
						</li>
					)
				]
				
				// Only wrap with <Carousel> once the number of multiple images reaches. 
				// In this case (6). Or wrap on last cycle. That makes one screen-wide slider.
				if ((((index + 1) % 3) === 0) || (index + 1) === items.length) {
					slides = [
								...slides,
								<CarouselItem
									className={carouselClass ? carouselClass : ""}
									onExiting={() => setAnimating(true)}
									onExited={() => setAnimating(false)}
									key={index}
								>
									<ul className={carouselClass && `${carouselClass}__cards`}>{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "imdb-fav") {
			
			items.forEach((item, index) => {
				count = count ? count : 6
				const { href, title, src, alt, rating } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li className="ipc__poster__card ">
							<figure>
								<button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
									<BiBookmarkPlus />
								</button>
								<Link key={index} to={href} className="ipc__poster ipc__media ipc__image__media__ratio--poster-27x40 ipc__media--poster-m ipc__media--baseAlt ipc__poster__poster__image ipc__media__img w-100">
									<img className="ipc__image" src={src} alt={alt} />
								</Link>
								{
									onlyCaption ? (
										<figcaption>
											<section className="imdb__figcaption">
												<Link className="ipc__poster__card__title ipc__poster__card__title--clamp-2 ipc-poster-card__title--clickable" >
													{title}
												</Link>
											</section>
										</figcaption>
									) : 
									(
										<figcaption>
											<section className="ipc__poster__card__rating__star__group">
												<span className="ipc__rating__star ipc__rating__star--baseAlt ipc__rating__star--imdb">
													<span className="ipc__icon">
														<AiFillStar />
													</span>
													{rating}
												</span>
												<button className="ipc__rate__button ipc__rate__button--unrated ipc__rate__button--baseAlt">
													<span className="ipc__rating__star ipc__rating__star--baseAlt ipc__rating__star--rate">
														<AiFillStar />
													</span>
												</button>
											</section>
											<section className="imdb__figcaption">
												<Link className="ipc__poster__card__title ipc__poster__card__title--clamp-2 ipc-poster-card__title--clickable" >
													{title}
												</Link>
											</section>
										</figcaption>
									)
								}
							</figure>
							{
								!onlyCaption && (
									<section className="imdb__mediaCta ipc__poster__card__actions">
										<button class="ipc__button ipc__button--full-width justify-content-center ipc__button--default-height ipc__button--core-baseAlt ipc__button--theme-baseAlt ipc__button--on-accent2 ipc__secondary__button">
												<AiOutlinePlus />&nbsp;&nbsp;
												<div className="ipc__button__text">
													Watchlist
												</div>
										</button>
										<div className="imdb__trailerBtn">
											<Link to="/" className="ipc__button ipc__text__button ipc__button--single-padding ipc__button--default-height justify-content-center ipc__button--core-baseAlt">
												<span className="ipc__button__icon--pre">
													<BsFillPlayFill />
												</span>
												<span className="ipc__button__text">
													Trailer
												</span>
											</Link>
										</div>
									</section>		
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
									<ul className="imdb__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "imdb-originals") {

			items.forEach((item, index) => {
				count = count ? count : 3
				const { href, title, src, alt, runtime, bookmark, date } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li className="ipc__poster__card">
							<figure className="ipc__slate">
								<button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
									<BiBookmarkPlus />
								</button>
								<img className="ipc__image" src={src} alt={alt} />
								<figcaption>
									<Link to={href}>
										<section className="d-flex align-items-center">
											<RiPlayCircleLine />
											{runtime}
										</section>
									</Link>
								</figcaption>
							</figure>
							<section className="ipc__slate__card__content">
								<div className="ipc__slate__card__text__container">
									{
										bookmark ? (
											<section className="d-inline-flex">
												<div className="imdb__boxRibbon imdb__captionedRibbon">
													<button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
														<BiBookmarkPlus />
													</button>
												</div>
												<Link to="/" className="imdb__boxTitle">
													<section className="imdb__boxTitleText">
														{date}
													</section>
													<section className="imdb__boxPrice">
														{title}
													</section>
												</Link>
											</section>
										) : 
										(
											<Link to="/" className="ipc__slate__card__title">
												{title}
											</Link>
										)
									}
								</div>
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
									<ul className="imdb__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "imdb-coming-soon") {

			items.forEach((item, index) => {
				count = count ? count : 3
				const { href, title, src, alt, runtime } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li className="ipc__poster__card">
							<figure className="ipc__slate">
								<img className="ipc__image" src={src} alt={alt} />
								<figcaption>
									<Link to={href}>
										<section className="d-flex align-items-center">
											<RiPlayCircleLine />
											{runtime}
										</section>
									</Link>
									<section className="ipc__slate__card__content">
										<button className="ipc__watchlist__ribbon ipc__poster__watchlist__ribbon ipc__watchlist__ribbon--baseAlt ipc__watchlist__ribbon--m">
											<BiBookmarkPlus />
										</button>
										<div className="ipc__slate__card__text__container">
											<Link to="/" className="ipc__slate__card__title">
												{title}
											</Link>
										</div>
									</section>
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
									{/* Forcing 6 images inside one ul (which is screen-wide) */}
									<ul className="imdb__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "imdb-spheres") {

			items.forEach((item, index) => {
				count = count ? count : 6
				const { href, img, caption, age } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li className="ipc__poster__card">
							<figure className="ipc__slate">
								<Link to={href}  className="ipc__media ipc__media--baseAlt ipc__avatar__avatar__image ipc__image__media__ratio--avatar">
									{img}
								</Link>
								<figcaption>
									<div>{caption}</div>
									<div>{age}</div>
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
									{/* Forcing 6 images inside one ul (which is screen-wide) */}
									<ul className="imdb__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "imdb-news") {

			items.forEach((item, index) => {
				count = count ? count : 3
				const { href, img, caption, date, source } = item

				tempCarousel = [
					...tempCarousel,
					(
						<li className="ipc__poster__card">
							<Link to={href}>
								<figure className="ipc__slate">
									<section className="imdb__newsImg ipc__media ipc__media__img ipc__media--baseAlt ipc__image__media__ratio--poster-27x40">
										{img}
									</section>
									<figcaption className="flex-grow-1 pl-3">
										<section className="imdb__newsHeadline">
											{caption}
										</section>
										<section className="imdb__newsMeta">
											<span>{date}</span>
											<span className="imdb__newsSource">{source}</span>
										</section>
									</figcaption>
								</figure>
							</Link>
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
									<ul className="imdb__cards">{tempCarousel}</ul>
								</CarouselItem>
					]
					tempCarousel = []
				}
			})
		}
		else if (type === "wholefoods") {

			slides = items.map((item, index) => {
				const { href_one, img_one, caption_one,
						href_two, img_two, caption_two,
						href_three, img_three, caption_three
				 }  = item
				return (
					<CarouselItem
						className={carouselClass}
						onExiting={() => setAnimating(true)}
						onExited={() => setAnimating(false)}
						key={index}
					>	
						<ul className="wholesaleFoods__cards">
							<li>
								<section className="d-flex w-100">
									{img_one}
								</section>
								<section className="wholefoods__carouselTxt">
									<p>
										<Link to={href_one} className="wholefoods__link">
											<span>
												{caption_one}
											</span>
										</Link>
									</p>
								</section>
							</li>
							<li>
								<section className="d-flex w-100">
									{img_two}
								</section>
								<section className="wholefoods__carouselTxt">
									<p>
										<Link to={href_two} className="wholefoods__link">
											<span>
												{caption_two}
											</span>
										</Link>
									</p>
								</section>
							</li>
							<li>
								<section className="d-flex w-100">
									{img_three}
								</section>
								<section className="wholefoods__carouselTxt">
									<p>
										<Link to={href_three} className="wholefoods__link">
											<span>
												{caption_three}
											</span>
										</Link>
									</p>
								</section>
							</li>
						</ul>
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
			{/* {(type === "prime" || type === "affiliate") && // Carousel indicators should show for only prime slider
				( */}
					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				{/* )
			} */}
			{slide()}
			{/* {
				!giftCardAux || (type !== "affiliate") ( */}
					<>
						<CarouselControl
							className={carouselClass && (`${carouselClass.substring(carouselClass.lastIndexOf(" "))}__control`)}
							direction="prev"
							directionText="Previous"
							onClickHandler={previous}
						/>
						<CarouselControl
							className={carouselClass && (`${carouselClass.substring(carouselClass.lastIndexOf(" "))}__control`)}
							direction="next"
							directionText="Next"
							onClickHandler={next}
						/>
					</>
				{/* )
			} */}
			{
				// Add hr in HomeImprovement page
				id === "homeImprovement" && (
					<section className="position-relative" style={{clear: "both", paddingTop: "42px"}}>
						<hr className="a__divider__normal"/>
						<Link to="/" className="float-right">Restrictions Apply</Link>
					</section>
				)
			}
		</Carousel>
	);
};

export default Slider
