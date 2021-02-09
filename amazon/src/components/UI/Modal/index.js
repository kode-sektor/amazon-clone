import React from "react";

import './index.css'

const Modal = ({modal}) => {
	return (
		<section tabindex="-1" className={`modal__parent ${modal}`}>
			<div class="">
				<div className="modal fade show" role="dialog" tabindex="-1" style={{ display: "block" }}>
					<div className="modal__dialog" role="document">
						<div className="modal__content"></div>
					</div>
				</div>
				<div className="modal__backdrop fade show"></div>
			</div>
		</section>
	);
};

export default Modal