import collectionStyles from "../styles/Collection.module.css";
import SliderHeader from "./sliderHeader";
import SimpleCard from "./SimpleCard";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
function Collection() {
    const prevRefC = useRef(null);
    const nextRefC = useRef(null);
    return (

        <div className="collection">
            <div ref={nextRefC}><SliderHeader sliderTitle="Collection" /></div>

            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRefC.current;
                    swiper.params.navigation.nextEl = nextRefC.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={collectionStyles.gridContainerC}>
                        <div className="gridItem1C">
                            <SimpleCard
                                picSrc="collectionPic.svg"
                                title="Yieldling Rare #004"
                                artno="12 Artwork"
                            />
                        </div>
                        <div className="gridItem1C">
                            <SimpleCard
                                picSrc="collectionPic.svg"
                                title="Yieldling Rare #004"
                                artno="12 Artwork"
                            />
                        </div>
                        <div className={collectionStyles.gridItem5C}>
                            <SimpleCard
                                picSrc="grid5.svg"
                                title="Yieldling Rare #004"
                                artno="12 Artwork "
                            />
                        </div>
                        <div Name="gridItem1C">
                            <SimpleCard
                                picSrc="collectionPic.svg"
                                title="Yieldling Rare #004"
                                artno="12 Artwork"
                            />
                        </div>
                        <div className="gridItem1C">
                            <SimpleCard
                                picSrc="collectionPic.svg"
                                title="Yieldling Rare #004"
                                artno="12 Artwork"
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>);

}

export default Collection;