import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "./swipper.scss";

import { renderStarts } from "../renderStarts";
import { useEffect, useState } from "react";
import { successIcon, leftIcon, rightIcon } from "../icon";
import { useDispatch } from "react-redux";
import { fetchCommentData } from "../../slice/productSlice";

interface ICommentData {
  id: number;
  customer: string;
  rating: number;
  content: string;
  date: string;
}

const HappyCustomer = () => {

  const [data, setData] = useState<null | ICommentData[]>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    const response = dispatch(fetchCommentData()).then((res) =>
      setData(res?.payload)
    );
  }, []);

  const createStart = (rating: number, index: number, id: number, customer: string) => {
    const start = renderStarts(rating);

    return start?.map((start: string) => (
        <img src={start} alt="start" key={`${id} ${index} ${customer}`} />
      ))
  }

  return (
    <div className="container happy-contents">
      <div className="flex items-center justify-between head-happy">
        <div className="title">OUR HAPPY CUSTOMERS</div>
        <div className="swiper-btns">
          <div
          //@ts-ignore
            onClick={() => swiper.current.scrollBy(+1)}
            className="swiper-prev swiper-button-prev swiper-button-disabled"
          >
            <img src={leftIcon} alt="slider icon" />
          </div>
          <div
            className="swiper-next swiper-button-next"
            //@ts-ignore
            onClick={() => swiper.current.scrollBy(+1)}
          >
            <img src={rightIcon} alt="slider icon" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <Swiper
          spaceBetween={50}
          slidesPerView={document.body.clientWidth > 960 ? 3 : 1}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
        >
          {data?.map((elem, index) => {
            return (
              <SwiperSlide key={`${elem.customer} ${elem.id}`}>
                <div className="starts flex items-center">
                  {createStart(elem?.rating, index, elem.id, elem.customer)}
                </div>
                <div className="happy-title flex items-center">
                  {elem.customer} <img src={successIcon} alt="icon" />
                </div>
                <div className="content">
                  {elem.content}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HappyCustomer;
