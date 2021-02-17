import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption
} from "reactstrap";

import './index.css'

const items = [
	{

        href: '/',
		src:
			"https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/ZTgxNjE2MzAt/ZTgxNjE2MzAt-N2Y1NDA1NjEt-w1500._CB660003685_.jpg",
		altText: "Slide 1",
		caption: "Slide 1",
	},
	{

        href: '/',
		src:
			"https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Consumer_Electronics/XCM_Manual_1304922_1560048_CA_ca_ce_business_3653451_1500x600_1X_en_CA._CB662528803_.jpg",
		altText: "Slide 2",
		caption: "Slide 2",
	},
	{

        href: '/',
		src:
			"https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Certified_Refurbished/XCM_Manual_1307770_1572703_CA_ca_gw_pc_tallhero_2x_ca_en_3671684_1500x600_1X_en_CA._CB661537907_.jpg",
		altText: "Slide 3",
		caption: "Slide 3",
	},
	{

        href: '/',
		src:
			"https://images-na.ssl-images-amazon.com/images/G/15/AmazonMusic/2021/ACQ/HDUpgrade_02152021/Gateway/DV1a/CA-EN_012721_HDUpgradeRefreshQ1_ACQ_GW_Hero_D_1500x600_CV14._CB659600230_.jpg",
		altText: "Slide 4",
		caption: "Slide 4",
	},
	{

        href: '/',
		src:
			"https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/Other/BHM21/GW/DesktopGatewayHero_RB-3678_CAPV_BHM21_ENG_1500x600._CB661210702_.jpg",
		altText: "Slide 5",
		caption: "Slide 5",
	}
];

const Slider = (props) => {
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

	const slides = items.map((item) => {
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
	});

	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slides}
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
