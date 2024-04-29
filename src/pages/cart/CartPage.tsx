import { Link, useParams } from "react-router-dom";
import IProduct from "../../types";
import { useEffect, useState } from "react";
import axios from "../../service/index";
import { renderStarts } from "../../components/renderStarts";

const CartPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<null | IProduct>(null);
  const [starts, setStarts] = useState<null | string[]>(null);
  const [discount, setDiscount] = useState<number | string>();

  const calcPrice = () => {
    const newPrice = 100 - Math.trunc((300 * 100) / +250);

    setDiscount(newPrice);
  };

  useEffect(() => {
    const response = axios.get(`/products/${id}`);

    console.log(response);

    // if(response.)
  }, []);

  useEffect(() => {
    const start = renderStarts(4);
    calcPrice()
    setStarts(start);
  }, []);

  return (
    <div className="container cart-detalies">
      <div className="title-page">
        <Link to={"/"}>Home</Link> {">"} <Link to={"/shop"}>Shop {">"} </Link>{" "}
        <Link to={`/shop/${id}`}>T-shirt</Link>
      </div>
      <div className="product-detalist flex items-center justify-between">
        <div className="product-imgs">
          <div className="imgs">
            <img src="sssssss" alt="" />
            <img src="sssssss" alt="" />
            <img src="sssssss" alt="" />
          </div>
          <div className="main-img">
            <img src="ss" alt="product img" />
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-title">One Life Graphic T-shirt</div>
          <div className="starts flex items-center">
            <div>
              {starts?.map((start: string, index) => (
                <img src={start} alt="start" key={`${index} ${id}`} />
              ))}
            </div>
            <p>
              {4}/<span>5</span>
            </p>
          </div>
          <div className="price flex items-center">
          ${300}{" "}
          {250 && (
            <>
              <span>${250}</span>{" "}
              <div className="extra">-{discount}%</div>
            </>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
