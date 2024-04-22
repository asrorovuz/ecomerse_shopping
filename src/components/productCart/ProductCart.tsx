import { useEffect, useState } from "react";
import { renderStarts } from ".";

const ProductCart = ({ product }: any) => {
  const [starts, setStarts] = useState<null | string[]>(null);
  const { name, img, price, rating } = product;

  useEffect(() => {
    const start = renderStarts(rating);

    setStarts(start);
  }, []);

  return (
    <div>
      <div className="product-imd">
        <img src={img} alt="product img" />
      </div>
      <div className="product-content">
        <div className="product-name">{name}</div>
        <div className="starts">
          {starts?.map((start: string) => (
            <img src={start} alt="start" />
          ))}
          {rating}/5
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default ProductCart;
