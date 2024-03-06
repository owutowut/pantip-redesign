'use client'

import Image from "next/image";

import { MdDoubleArrow } from "react-icons/md";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { BiCommentAdd } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <div className="w-full h-full bg-white">
        <div className='relative w-full h-[240px]'>
          <Image className="z-20 pt-8" fill objectFit='contain' src='/banner/banner-content.png' alt='pantip logo' />
          <Image className="z-10" fill objectFit='cover' src='/banner/banner-bg.png' alt='pantip logo' />
        </div>
        <div className="w-full flex justify-center bg-[#2d2a49]">
          <div className='max-w-[1440px] h-[3rem] w-full flex justify-start items-center border-b border-t border-[#1f1d33]'>
            <div className="space-x-1 flex justify-center items-center">
              <MdDoubleArrow className="text-[rgba(233,229,246,.87)]" />
              <p className="font-light text-[rgba(233,229,246,.87)]">
                หน้าแรกพันทิป
              </p>
            </div>
          </div>
        </div>
        <div className="my-[2.5rem] space-y-[2.5rem]">
          <div className="w-full h-full flex justify-center">
            <div className="w-full max-w-[1440px] relative">
              <h3 className="text-black text-[2rem] font-semibold mb-[1.5rem]">Announce</h3>
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                className="card-swiper"
              >
                {cardList.map((item, index) => (
                  <SwiperSlide key={index} className="space-y-2">
                    <div className="relative w-full h-[250px]">
                      <Image className="rounded-xl" fill objectFit='cover' src='/card/highlight/card1.png' alt='pantip logo' />
                    </div>
                    <p className="text-black">[Pantip Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <div className="w-full max-w-[1440px] relative">
              <h3 className="text-black text-[2rem] font-semibold mb-[1.5rem]">Highlight</h3>
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                className="card-swiper"
              >
                {cardList.map((item, index) => (
                  <SwiperSlide key={index} className="space-y-2">
                    <div className="relative w-full h-[250px]">
                      <Image className="rounded-xl" fill objectFit='cover' src='/card/highlight/card1.png' alt='pantip logo' />
                    </div>
                    <p className="text-black">[Pantip Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <div className="w-full max-w-[1440px] relative">
              <div className="mb-[1.5rem]">
                <h3 className="text-black text-[2rem] font-semibold">Pantip Realtime</h3>
                <span className="text-black">กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {cardList.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="relative w-[200px] h-[120px]">
                      <Image className="rounded-lg" fill objectFit='cover' src='/card/highlight/card1.png' alt='pantip logo' />
                    </div>
                    <div className="relative h-full w-full">
                      <p className="absolute top-0 text-black max-w-[80%]">ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล</p>
                      <div className="absolute bottom-2 flex space-x-2 text-black">
                        <p>สมาชิกหมายเลข 4767826</p>
                        <span>&#183;</span>
                        <p>6 ชั่วโมง</p>
                      </div>
                      <div className="absolute bottom-2 right-2 flex space-x-2 text-black">
                        <div className="flex items-center space-x-2">
                          <BiCommentAdd />
                          <span>44</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <BiCommentDetail />
                          <span>2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex w-full justify-center pt-4">
                <button className="bg-black p-4 w-full rounded-xl">โหลดเพิ่ม</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardList = [
  {
    title: 'รวมมิตร',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'หว้ากอ',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'สีลม',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'เฉลิมกรุง',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'พันทิป',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ถนนนักเขียน',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'บางขุนพรหม',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'กล้อง',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ไกลบ้าน',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'เฉลิมไทย',
    img: '/card/highlight/card1.png'
  },
]
