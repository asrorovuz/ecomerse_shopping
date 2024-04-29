import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/productCart/ProductCart";
import IProduct from "../../types";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import { fetchProductData } from "../../slice/productSlice";
import { Link } from "react-router-dom";
import "./shop.scss";

const Shopping = () => {
  const { data, loading } = useSelector((state: any) => state.product);
  const [count, setCount] = useState<number>(8);

  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProductData());
  }, []);

  return !loading ? (
    <div className="container products">
      <div className="title-page">
        <Link to={"/"}>Home</Link> {">"} <Link to={"/shop"}>Shop</Link>
      </div>
      <div className="product-items">
        {data &&
          data.length > 0 &&
          data
            ?.slice(0, count)
            ?.map((product: IProduct, index: number) => (
              <ProductCart product={product} key={`${index} ${product.id}`} />
            ))}
      </div>
      <div className="flex">
        <button
          onClick={() => setCount(data.length > count ? count + 4 : count)}
        >
          View All
        </button>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Shopping;
