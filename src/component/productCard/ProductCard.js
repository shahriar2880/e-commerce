import React from "react";
import "./ProductCard.css";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const {grid} = props
  let location = useLocation();
  console.log(grid)
  return (
    <>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} pb-2`}>
          <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                  <Link>
                      <img src="images/wish.svg" alt="wishlist" />
                  </Link>
              </div>
              <div className="product-image">
                <img className="img-fluid" src="images/watch.jpg" alt="product img" />
                <img className="img-fluid" src="images/watch-1.png" alt="product img" />
              </div>
              <div className="product-details">
                <h6 className="brand">Havels</h6>
                <h5 className="product-title">
                  Kids headphones bulk 10 pack multi colored for student
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  value="4"
                  edit={false}
                  activeColor="#ffd700"
                  />
                  <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>
                      The technology company is, like it or not, a major presence in the watch industry.
                      Since its introduction in 2015, the Apple Watch has gone on to outpace the entire Swiss watch industry in terms of units sold.
                  </p>
                <p className="price">$100</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column">
                    <Link>
                        <img src="images/prodcompare.svg" alt="compare" />
                    </Link>
                    <Link>
                        <img src="images/view.svg" alt="view" />
                    </Link>
                    <Link>
                        <img src="images/add-cart.svg" alt="addCart" />
                    </Link>
                </div>
            </div>
          </div>
      </div>
      <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} pb-2`}>
          <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                  <Link>
                      <img src="images/wish.svg" alt="wishlist" />
                  </Link>
              </div>
        <div className="product-image">
          <img className="img-fluid" src="images/watch.jpg" alt="product img" />
          <img className="img-fluid" src="images/watch-1.png" alt="product img" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for student
          </h5>
          <ReactStars
            count={5}
            size={24}
            value="4"
            edit={false}
            activeColor="#ffd700"
            />
            <p className={`description ${grid ===12 ? "d-block" : "d-none"}`}>
                The technology company is, like it or not, a major presence in the watch industry.
                Since its introduction in 2015, the Apple Watch has gone on to outpace the entire Swiss watch industry in terms of units sold.
            </p>
          <p className="price">$100</p>
        </div>
          <div className="action-bar position-absolute">
                  <div className="d-flex flex-column">
                      <Link>
                          <img src="images/prodcompare.svg" alt="compare" />
                      </Link>
                      <Link>
                          <img src="images/view.svg" alt="view" />
                      </Link>
                      <Link>
                          <img src="images/add-cart.svg" alt="addCart" />
                      </Link>
                  </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductCard;
