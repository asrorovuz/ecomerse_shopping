import { Link, useParams } from "react-router-dom";
import IProduct from "../../types";
import { useEffect, useState } from "react";
import axios from "../../service/index";
import { renderStarts } from "../../components/renderStarts";
import Loader from "../../components/loader/Loader";
import { successIcon } from "../../components/icon";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentData } from "../../slice/productSlice";

const CartPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<null | IProduct>(null);
  const [starts, setStarts] = useState<null | string[]>(null);
  const [mainImg, setMainImg] = useState<string>("");
  const [targetSize, setTargetSize] = useState<number>(0);
  const [counter, setCounter] = useState<number>(1);
  const [count, setCount] = useState<number>(4)

  const dispatch = useDispatch();
  const { commentData } = useSelector((state: any) => state.product);
  console.log(commentData);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/products/${id}`);
      if (response.status === 200) {
        setData(response.data);
        const start = renderStarts(response?.data?.rating);
        setStarts(start);
        setMainImg(response.data.img);
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const extraImgRender = () => {
    let renderExtraImgs = [];
    if (data && data?.extraImg.length > 0) {
      renderExtraImgs = data?.extraImg?.map((elem: string, index) => (
        <img key={index} src={`.${elem}`} alt={`product img ${index}`} />
      ));
    } else {
      for (let index = 0; index < 3; index++) {
        renderExtraImgs.push(
          <img key={index} src={`.${mainImg}`} alt={`product img ${index}`} />
        );
      }
    }

    return renderExtraImgs;
  };

  let renderSize = data?.size.map((elem: string, index: number) => {
    if (targetSize === index) {
      return (
        <div
          className="size active-size"
          key={index}
          style={{ backgroundColor: elem }}
          onClick={() => setTargetSize(index)}
        >
          {elem}
        </div>
      );
    } else {
      return (
        <div
          className="size"
          key={index}
          style={{ backgroundColor: elem }}
          onClick={() => setTargetSize(index)}
        >
          {elem}
        </div>
      );
    }
  });

  const createStart = (
    rating: number,
    index: number,
    id: number,
    customer: string
  ) => {
    const start = renderStarts(rating);

    return start?.map((start: string) => (
      <img src={start} alt="start" key={`${id} ${index} ${customer}`} />
    ));
  };

  useEffect(() => {
    fetchData();
    extraImgRender();
    //@ts-ignore
    dispatch(fetchCommentData());
  }, [id]);

  return data ? (
    <div className="container cart-detalies">
      <div className="title-page">
        <Link to={"/"}>Home</Link> {">"} <Link to={"/shop"}>Shop {">"} </Link>{" "}
        <Link to={`/shop/${id}`}>{data?.name}</Link>
      </div>
      <div className="product-detalist flex justify-between">
        <div className="product-imgs flex">
          <div className="imgs">{extraImgRender()}</div>
          <div className="main-img">
            <img src={`.${mainImg}`} alt="product img" />
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-title">{data?.name}</div>
          <div className="starts flex items-center">
            <div>
              {starts?.map((start: string, index) => (
                <img src={start} alt="start" key={`${index} ${id}`} />
              ))}
            </div>
            <p>
              {data?.rating}/<span>5</span>
            </p>
          </div>

          <div className="price flex items-center">
            ${data?.price}
            {data?.extraPrice && (
              <>
                <span>${data.extraPrice}</span>{" "}
                <div className="extra">
                  -{100 - Math.trunc((data?.price * 100) / +data?.extraPrice)}%
                </div>
              </>
            )}
          </div>

          <p className="comment">{data?.comment}</p>

          <div className="select-colors">
            <div className="select-colors-title">Select Colors</div>
            <div className="colors flex">
              {data?.color.map((elem: string, index: number) => (
                <div
                  className="color"
                  key={index}
                  style={{ backgroundColor: elem }}
                >
                  <input type="radio" name="color" id={`color-${index}`} />
                  <label htmlFor={`color-${index}`}></label>
                </div>
              ))}
            </div>
          </div>

          <div className="choose-size">
            <div className="select-size-title">Choose Size</div>
            <div className="sizes flex">{renderSize}</div>
          </div>

          <div className="add-btns flex">
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
              <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
            </div>
            <div className="add-cart">Add to Cart</div>
          </div>
        </div>
      </div>
      <div className="rating-comment">
        <div className="rating-comment-title">
          All Reviews <span>(45)</span>
        </div>
        <div className="rating-cards">
          {commentData?.slice(0, count).map((elem: any, index: number) => {
            return (
              <div className="rating-cart">
                <div className="starts flex items-center">
                  {createStart(elem?.rating, index, elem.id, elem.customer)}
                </div>
                <div className="happy-title flex items-center">
                  {elem.customer} <img src={successIcon} alt="icon" />
                </div>
                <div className="content">{elem.content}</div>
              </div>
            );
          })}
        </div>
        <div className="btn-load-more">
          <button onClick={() => setCount((prev: number) => prev <= commentData.length ? prev + 4 : prev)}>Load More Reviews</button>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CartPage;
