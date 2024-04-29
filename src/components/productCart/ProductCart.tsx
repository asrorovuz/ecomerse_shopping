import { useEffect, useState } from "react";
import { renderStarts } from "../renderStarts";
import { useNavigate } from "react-router-dom";

const ProductCart = ({ product }: any) => {
  const [starts, setStarts] = useState<null | string[]>(null);
  const [discount, setDiscount] = useState<number | string>();
  const { id, name, img, price, rating, extraPrice } = product;

  const calcPrice = () => {
    const newPrice = 100 - Math.trunc((price * 100) / +extraPrice);

    setDiscount(newPrice);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const start = renderStarts(rating);
    calcPrice();
    setStarts(start);
  }, []);

  return (
    <div>
      <div className="product-img">
        <img src={img} alt="product img" />
        <div className="add-cart">
          <button
            className="white-btn"
            onClick={() => {
              navigate(`/shop/${id}`);
            }}
          >
            add to cart
          </button>
        </div>
      </div>
      <div className="product-content">
        <div className="product-name">{name}</div>
        <div className="starts flex items-center">
          <div>
            {starts?.map((start: string, index) => (
              <img src={start} alt="start" key={`${index} ${id}`} />
            ))}
          </div>
          <p>
            {rating}/<span>5</span>
          </p>
        </div>
        <div className="price flex items-center">
          ${price}{" "}
          {extraPrice && (
            <>
              <span>${extraPrice}</span>{" "}
              <div className="extra">-{discount}%</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
