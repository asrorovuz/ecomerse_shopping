import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ICustomerProduct } from "../../types";
import axios from "../../service/index";
import { deleteProductData } from "../../slice/productSlice";

const Basket = () => {
  const [counter, setCounter] = useState<number>(1);
  const [data, setData] = useState<null | undefined | ICustomerProduct[]>(null);

  const dispatch = useDispatch();

  const deleteProduct = (id: number) => {
    //@ts-ignore
    dispatch(deleteProductData(id));

    const newData: ICustomerProduct[] | undefined = data?.filter(elem => elem.id !== id)
    setData(newData)
  };

  useEffect(() => {
    const response = axios.get(`/userProduct`);
    response.then((res: any) => {
      if (res.status === 200) setData(res.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="basket">
        <div className="title-page">
          <Link to={"/"}>Home</Link> {">"} <Link to={"/cart"}>Cart</Link>
        </div>
        <div className="basket-wrapper">
          <div className="title">your cart</div>
          <div className="flex carts">
            <div className="left-cart">
              {data && data.length > 0 ?
                data?.map((item: ICustomerProduct) => {
                  return (
                    <div className="cart flex" key={item.id}>
                      <div className="cart-img">
                        <img src={item.img} alt="product img" />
                      </div>
                      <div className="cart-content">
                        <div className="cart-content-title flex justify-between">
                          {item.name}
                          <span onClick={() => deleteProduct(item?.id)}>delete</span>
                        </div>
                        <div className="cart-content-info flex">
                          <p>
                            Size: <span>{item.size}</span>
                          </p>
                          <p>
                            Color: <span>{item.color}</span>
                          </p>
                        </div>
                        <div className="cart-content-price flex justify-between">
                          <h4>${item.price}</h4>
                          <div className="counter flex">
                            <button
                              onClick={() =>
                                counter > 0
                                  ? setCounter((prev) => prev - 1)
                                  : setCounter(counter)
                              }
                            >
                              -
                            </button>
                            <span>{counter}</span>
                            <button
                              onClick={() => setCounter((prev) => prev + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }): "not product"}
            </div>
            <div className="right-cart">
              <div>
                <div></div>
              </div>
              <div className="checkout">
                <h3>Order Summury</h3>
                <div className="total-prices flex">
                  <p className="flex justify-between">
                    Subtotal <span>$365</span>
                  </p>
                  <p className="flex justify-between">
                    Discount <span>-$113</span>
                  </p>
                  <p className="flex justify-between">
                    Delivery Fee <span>$15</span>
                  </p>
                </div>
                <div className="total">
                  <p className="flex justify-between">
                    Total<span>$467</span>
                  </p>
                </div>
                <button className="black-btn">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
