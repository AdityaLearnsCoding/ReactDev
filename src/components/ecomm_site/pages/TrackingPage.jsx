import { formatDate } from '../utils/util';
import PageHeader from './Header';
import './TrackingPage.css';
import { NavLink, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from '../utils/util';
import dayjs from 'dayjs';

const TrackingPage = ({ cart }) => {
    const { orderId, productId } = useParams(); // Fetch URL Params
    const [ordersForTracking, setOrdersForTracking] = useState([])
    useEffect(() => {
        // Fetch orders
        axios.get(`${baseUrl}/api/orders?expand=products`)
            .then((orderResponse) => {
                setOrdersForTracking(orderResponse.data)
            })
    }, [orderId]); // dependent on orderId (rerun when orderId changes in URL Param)

    return (
        <>
            <title>Tracking</title>
            <PageHeader cart={cart} />
            <div className="tracking-page">
                {ordersForTracking.length > 0 &&
                    ordersForTracking.map((orderForTracking) => {
                        return orderForTracking.products.map((selectedProduct) => {
                            if (selectedProduct.productId === productId) {
                                return (
                                    <div key={selectedProduct.product.productId} className="order-tracking">
                                        <NavLink className="back-to-orders-link link-primary" to="/orders" end>
                                            View all orders
                                        </NavLink>

                                        {(() => {
                                            let totalDeliveryTimeMs = selectedProduct.estimatedDeliveryTimeMs - orderForTracking.orderTimeMs
                                            let timePassedInMs = dayjs().valueOf() - orderForTracking.orderTimeMs;
                                            let deliveryProgress = timePassedInMs / totalDeliveryTimeMs * 100
                                            return (
                                                <>
                                                    <div className="delivery-date">
                                                        { !(deliveryProgress >= 100) || totalDeliveryTimeMs === 0? "Arriving on" : "Delivered on"} on {formatDate(selectedProduct.estimatedDeliveryTimeMs)}
                                                    </div>

                                                    <div className="product-info">
                                                        {selectedProduct.product.name}
                                                    </div>

                                                    <div className="product-info">
                                                        Quantity: {selectedProduct.product.quantity}
                                                    </div>

                                                    <img className="product-image" src={selectedProduct.product.image} />

                                                    <div className="progress-labels-container">
                                                        <div className="progress-label">
                                                            Preparing
                                                        </div>
                                                        <div className="progress-label current-status">
                                                            Shipped
                                                        </div>
                                                        <div className="progress-label">
                                                            Delivered
                                                        </div>
                                                    </div>

                                                    <div className="progress-bar-container">
                                                        <div className="progress-bar" style={{ width: `${deliveryProgress}%` }}></div>
                                                    </div>
                                                </>
                                            )
                                        })()
                                        }
                                    </div>
                                )
                            }
                        })
                    })
                }
            </div>

        </>
    )
}

export default TrackingPage;