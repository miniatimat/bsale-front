import React, {useEffect} from "react";
import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "./Home.scss";
import banner1 from "media/banner1.jpg";
import banner2 from "media/banner2.jpg";
import banner4 from "media/banner4.jpg";
import PromoCard from '../../components/PromoCard.jsx/PromoCard.jsx';
import { BsCreditCard2Back } from "react-icons/bs";
// import { TbTruck } from "react-icons/tb";
import { TiArrowSync } from "react-icons/ti";
import { AiOutlineStar } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import {useStore} from "../../context/store";
import {fetchCategories, fetchProducts} from "../../redux/actions/actions";


export default function Home() {
  const { t } = useTranslation();
  const [state, dispatch] = useStore();
  useEffect(async ()=>{
    await fetchProducts(dispatch)
    await fetchCategories(dispatch)
  }, [])

  console.log(state)
  return (
    <div className="color">
      <div className="div-slide-vertical">

      </div>
      <div className="promo-container">
        <PromoCard
          title={t("home.promoCard.return.title")}
          subtitle={t("home.promoCard.return.subTitle")}
          icon={<TiArrowSync size={30} />}
        />
        <PromoCard
          title={t("home.promoCard.cuotes.title")}
          subtitle={t("home.promoCard.cuotes.subTitle")}
          icon={<BsCreditCard2Back size={30} />}
        />
        <PromoCard
          title={t("home.promoCard.delivery.title")}
          subtitle={t("home.promoCard.delivery.subTitle")}
          icon={<AiOutlineStar size={30} />}
        />
      </div>
    </div>
  );
}
