import './OrdersPage.css';
import PageHeader from './Header';
import { NavLink } from 'react-router';
import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { baseUrl, formatDate, formatMoney } from '../utils/util';

const OrdersPage = ({ cart }) => {
    const [ orders, setOrders ] = useState([])
    useEffect( () => {
        axios.get(`${baseUrl}/api/orders?expand=products`)
        .then( (orderResponse) => {
            setOrders(orderResponse.data)
        })
    },[])

    return (
        <>
            <title>Orders</title>
            <PageHeader cart = { cart }/>

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    { orders.map( (order) => {
                        return (
                        <Fragment key={order.id}>
                        <div className="order-container">

                        <div className="order-header">
                            <div className="order-header-left-section">
                            <div className="order-date">
                                <div className="order-header-label">Order Placed:</div>
                                <div>{ formatDate(order.orderTimeMs) }</div>
                            </div>
                            <div className="order-total">
                                <div className="order-header-label">Total:</div>
                                <div>{ formatMoney(order.totalCostCents) }</div>
                            </div>
                            </div>

                            <div className="order-header-right-section">
                            <div className="order-header-label">Order ID:</div>
                            <div>{ order.id }</div>
                            </div>
                        </div>

                        <div className="order-details-grid">
                            { order.products.map( (orderedProduct) => {
                                
                                return (
                                    <Fragment key={orderedProduct.productId}>
                                        <div className="product-image-container">
                                            <img src={ orderedProduct.product.image } alt={orderedProduct.product.name} />
                                        </div>

                                        <div className="product-details">
                                        <div className="product-name">
                                           { orderedProduct.product.name }
                                        </div>
                                        <div className="product-delivery-date">
                                            Arriving on: { formatDate(orderedProduct.product.estimatedDeliveryTimeMs) }
                                        </div>
                                        <div className="product-quantity">
                                            Quantity: { orderedProduct.product.quantity }
                                        </div>
                                        <button className="buy-again-button button-primary">
                                            <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                            <span className="buy-again-message">Add to Cart</span>
                                        </button>
                                        </div>

                                        <div className="product-actions">
                                        <NavLink to={`/tracking/${order.id}/${orderedProduct.productId}`} end>
                                            <button className="track-package-button button-secondary">
                                            Track package
                                            </button>
                                        </NavLink>
                                        </div>
                                    </Fragment>
                                )})
                            }
                           
                            
                        </div>
                        </div>
                        </Fragment>
                        )
                    })}
                </div>
                </div>
        </>
    )
}

export default OrdersPage;