import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const OrderSuccessful = () => {
    const { order } = useSelector((state) => state.order);
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3 className="card-title">Order Successful</h3>
                                <p className="card-text">
                                    Your order has been placed successfully. Your order number is{" "}
                                    <strong>{order._id}</strong>
                                </p>
                                <Link to="/orders/me" className="btn btn-primary">
                                    Go to Orders
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OrderSuccessful;