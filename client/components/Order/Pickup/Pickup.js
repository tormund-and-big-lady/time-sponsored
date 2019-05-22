import React from 'react'
import './Pickup.css'

const Pickup = ({toggleModal,route_changer}) => {
	return(
		<section className="order-delivery-container">

			<section className="order-delivery-exit">
				<button onClick={toggleModal}>X</button>
				<h3>Your order settings</h3>
			</section>

			<section className="order-pickup-delivery-buttons">
				<button onClick={()=>route_changer("delivery")}>Delivery</button>
				<button>Pickup</button>
			</section>

			<section className="order-delivery-whenwouldyou">
				<h5>When would you like your order?</h5>
				<button onClick={()=>route_changer("schedule")}>ASAP (35–45m)</button>
			</section>

			<section className="order-delivery-update">
				<button onClick={toggleModal}>Update</button>
			</section>

		</section>
		)
}

export default Pickup;