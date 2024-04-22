import { Link } from "react-router-dom";
import ProductCart from "../productCart/ProductCart";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../../slice";
import Loader from "../loader/Loader";
import IProduct from "../../types";

const Products = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: any) => state.product);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchProductData());
    
  }, []);

  return (
    !loading ? <div className="container products">
    <h2 className="product-title">Our Products</h2>
    <div className="product-items flex items-center justify-between">
      {data && data?.slice(0, 4).map((product: IProduct) => (
        <ProductCart product={product}/>
      ))}
    </div>
    <div className="flex">
      <button >View All</button>
    </div>
  </div> : <Loader/>
  );
};

export default Products;
