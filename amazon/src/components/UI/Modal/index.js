import React, { useState } from "react";

import './index.css'

const Modal = (props) => {

    const {modal, toggleModal} = props

	return (
		<div className={`modal ${modal}`} onMouseOver={toggleModal} role="dialog"></div>
	);
};

export default Modal