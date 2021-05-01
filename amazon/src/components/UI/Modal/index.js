import React from "react";

import './index.css'

const Modal = (props) => {

    const {modal, toggleModal} = props

	return (
		<div className={`modal ${modal}`} onClick={() => toggleModal("hide", "all")} role="dialog">
		</div>
	);
};

export default Modal