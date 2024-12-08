"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import { Pack } from "../Pack/Pack";
import { PokemonPackItem } from "@/feature/types/pokemon";

type PackCarouselProps = {
  packs: PokemonPackItem[];
  onSelect?: (pack: PokemonPackItem) => void; // 選択時のコールバック
};

export const PackCarousel = ({ packs, onSelect }: PackCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[EffectCoverflow]}
      effect="coverflow"
      centeredSlides
      loop
      slidesPerView={2.5}
      onSlideChange={(swiper) => {
        const newIndex = swiper.realIndex; // 現在のスライドインデックス
        setActiveIndex(newIndex);
        if (onSelect) onSelect(packs[newIndex]); // 中央スライドを選択
      }}
      coverflowEffect={{
        rotate: -15,
        stretch: -20,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      style={{
        width: "100%",
        paddingBottom: "40px",
      }}
    >
      {packs.map((pack, index) => (
        <SwiperSlide
          key={pack.id}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Pack pack={pack} showShadow />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
