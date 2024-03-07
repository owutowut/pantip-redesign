'use client'

import Image from "next/image";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";

import { MdDoubleArrow, MdExplore, MdFeedback, MdStars } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { AiFillLike } from "react-icons/ai";

export default function Home() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      (swiperRef.current as any).swiper.slidePrev();
    }
  };

  return (
    <div className="w-full h-full flex relative">
      <div className="xl:block sm:hidden hover:translate-x-0 translate-x-[-6.8rem] group fixed top-[13rem] left-0 h-full w-[10rem] duration-300 z-50 bg-[#2d2a49] border-r border-[#1f1d33]">
        <div className="border-b border-[#1f1d33] flex justify-end space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <span className="whitespace-nowrap">หน้าแรก</span>
          <IoHome className="w-6 h-6" />
        </div>
        <div className="border-b border-[#1f1d33] flex justify-end space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <span className="whitespace-nowrap">My Feed</span>
          <MdFeedback className="w-6 h-6" />
        </div>
        <div className="border-b border-[#1f1d33] flex justify-end space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <span className="whitespace-nowrap">Pantip Pick</span>
          <AiFillLike className="w-6 h-6" />
        </div>
        <div className="border-b border-[#1f1d33] flex justify-end space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <span className="whitespace-nowrap">Pantip Hitz</span>
          <MdStars className="w-6 h-6" />
        </div>
        <div className="border-b border-[#1f1d33] flex justify-end space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <span className="whitespace-nowrap">Explore</span>
          <MdExplore className="w-6 h-6" />
        </div>
      </div>
      <div className="xl:hidden sm:flex justify-center group fixed bottom-0 left-0 h-[3.6rem] w-screen duration-300 z-50 bg-[#2d2a49] border-r border-[#1f1d33]">
        <div className="flex justify-center border-b border-[#1f1d33] space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <IoHome className="w-6 h-6" />
          <span className="whitespace-nowrap md:block sm:hidden">หน้าแรก</span>
        </div>
        <div className="flex justify-center border-b border-[#1f1d33] space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <MdFeedback className="w-6 h-6" />
          <span className="whitespace-nowrap md:block sm:hidden">My Feed</span>
        </div>
        <div className="flex justify-center border-b border-[#1f1d33] space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <AiFillLike className="w-6 h-6" />
          <span className="whitespace-nowrap md:block sm:hidden">Pantip Pick</span>
        </div>
        <div className="flex justify-center border-b border-[#1f1d33] space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <MdStars className="w-6 h-6" />
          <span className="whitespace-nowrap md:block sm:hidden">Pantip Hitz</span>
        </div>
        <div className="flex justify-center border-b border-[#1f1d33] space-x-3 cursor-default hover:bg-[#24213a] duration-300 p-4">
          <MdExplore className="w-6 h-6" />
          <span className="whitespace-nowrap md:block sm:hidden">Explore</span>
        </div>
      </div>
      <div className="w-full h-full bg-[#3c3963]">
        <div className='relative w-full h-[240px]'>
          <Image className="z-20 pt-8" fill objectFit='contain' src='/banner/banner-content.png' alt='pantip logo' />
          <Image className="z-10" fill objectFit='cover' src='/banner/banner-bg.png' alt='pantip logo' />
        </div>
        <div className="w-full flex justify-center bg-[#2d2a49]">
          <div className='2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[380px] h-[3rem] w-full flex justify-start items-center border-b border-t border-[#1f1d33]'>
            <div className="space-x-1 flex justify-center items-center">
              <MdDoubleArrow className="text-[rgba(233,229,246,.87)]" />
              <p className="cursor-default font-light text-[rgba(233,229,246,.87)] hover:text-[rgba(176,173,185,0.87)] duration-300">
                หน้าแรกพันทิป
              </p>
            </div>
          </div>
        </div>
        <div className="my-[2.5rem] space-y-[2.5rem]">
          <div className="w-full h-full flex justify-center ">
            <div className="w-full 2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[380px] relative flex justify-center space-x-4">
              <div className="md:w-3/4  sm:w-2/3 drop-shadow-md">
                <h3 className="bg-[#1f1d33] text-[#fbc02d] text-[1.8rem] border border-[#7976a0] py-2 px-4 rounded-t-md">Announce</h3>
                <div className="bg-[#343253] border-b border-r border-l border-[#7976a0] rounded-b-md">
                  {announceList.map((item, index) => (
                    <div key={index} className={`${index !== 0 ? 'border-t border-[#565475]' : ''} w-full px-4 py-3 hover:bg-[#292841] duration-300 cursor-default`}>
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/4  sm:w-1/3 text-center drop-shadow-md">
                <h3 className="bg-[#1f1d33] text-[#fbc02d] text-[1.8rem] border border-[#7976a0] py-2 px-4 rounded-t-md">แท็กฮิต</h3>
                <div className="bg-[#343253] border-b border-r border-l border-[#7976a0] rounded-b-md">
                  {tagList.map((item, index) => (
                    <div key={index} className={`${index !== 0 ? 'border-t border-[#565475]' : ''} w-full px-4 py-3 hover:bg-[#292841] duration-300 cursor-default`}>
                      <p className="whitespace-nowrap font-light text-[rgba(233,229,246,.87)]">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <div className="w-full 2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[380px] relative">
              <div className="flex justify-between items-center text-[#fbc02d] bg-[#1f1d33] py-2 px-4 rounded-t-md border border-[#7976a0]">
                <h3 className="text-[1.8rem]">Highlight</h3>
                <div className="flex space-x-2 text-white">
                  <IoIosArrowDropleftCircle onClick={handlePrev} className="w-7 h-7" />
                  <IoIosArrowDroprightCircle onClick={handleNext} className="w-7 h-7" />
                </div>
              </div>
              <div className="bg-[#343253] border-b border-r border-l border-[#7976a0] rounded-b-md p-6">
                <Swiper
                  ref={swiperRef}
                  slidesPerView={5}
                  spaceBetween={20}
                  breakpoints={{
                    425: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                    },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false
                  }}
                  modules={[Autoplay]}
                  className="card-swiper"
                >
                  {cardList.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-[#2e2b4b] rounded-md drop-shadow-md hover:bg-[#292841] duration-300 cursor-default">
                        <div className="relative w-full h-[150px]">
                          <Image className="rounded-t-md" fill objectFit='cover' src='/card/highlight/card1.png' alt='pantip logo' />
                        </div>
                        <div className="w-full p-2 rounded-b-md border border-[#232038]">
                          <p className="text-[rgba(233,229,246,.87)] font-light line-clamp-2">{item.title}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <div className="w-full 2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[380px] relative">
              <div className="text-[#fbc02d] bg-[#1f1d33] py-2 px-4 rounded-t-md border border-[#7976a0]">
                <h3 className="text-[1.8rem]">Pantip Realtime</h3>
                <span className="text-[14px] text-[rgba(233,229,246,.87)]">กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที</span>
              </div>
              <div className="xl:grid-cols-2 sm:grid-cols-1 grid rounded-b-md border-r border-[#6e6c94] bg-[#343253]">
                {cardList.map((item, index) => (
                  <div key={index} className="flex space-x-4 border-l border-b border-[#6e6c94] p-4 box-border hover:bg-[#292841] duration-300 cursor-default">
                    <div className="relative w-[250px] h-[120px] border-[#6e6c94]">
                      <Image className="rounded-lg" fill objectFit='cover' src='/card/highlight/card1.png' alt='pantip logo' />
                    </div>
                    <div className="md:block sm:hidden relative h-full w-full">
                      <p className="absolute top-0 text-[rgba(233,229,246,.87)] max-w-[80%]">ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล</p>
                      <div className="absolute bottom-0 flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
                        <p>สมาชิกหมายเลข 4767826</p>
                        <span>&#183;</span>
                        <p>6 ชั่วโมง</p>
                      </div>
                      <div className="absolute bottom-0 right-2 flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
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
                    <div className="md:hidden sm:block relative h-full w-full">
                      <p className="text-[rgba(233,229,246,.87)] max-w-[80%] line-clamp-3 mb-2">ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล</p>
                      <div className="flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
                        <p>สมาชิกหมายเลข 4767826</p>
                      </div>
                      <div className="flex space-x-2 text-[rgba(151,146,165,0.87)] font-light mb-2">
                        <span>&#183;</span>
                        <p>6 ชั่วโมง</p>
                      </div>
                      <div className="right-2 flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
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
              <div className="flex justify-center items-center space-x-2 bg-[#7459c8] rounded-b-md w-full p-4 hover:bg-[#634da5] duration-300 cursor-default">
                <IoIosArrowDown />
                <button> ดูเพิ่มเติม </button>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center">
            <div className="w-full 2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[380px] relative">
              <div className="text-[#fbc02d] bg-[#1f1d33] py-2 px-4 rounded-t-md border border-[#7976a0]">
                <h3 className="text-[1.8rem]">Pantip Hitz</h3>
                <span className="text-[14px] text-[rgba(233,229,246,.87)]">กระทู้ฮิตติดเทรนด์ทุก 10 นาที</span>
              </div>
              <div className="xl:grid-cols-2 sm:grid-cols-1 grid rounded-b-md border-r border-[#6e6c94] bg-[#343253]">
                {cardList.map((item, index) => (
                  <div key={index} className="flex space-x-4 border-l border-b border-[#6e6c94] p-4 box-border hover:bg-[#292841] duration-300 cursor-default">
                    <div className="relative w-[250px] h-[120px] border-[#6e6c94]">
                      <Image className="rounded-lg" fill objectFit='cover' src='/card/highlight/card1.png' alt='pantip logo' />
                    </div>
                    <div className="md:block sm:hidden relative h-full w-full">
                      <p className="md:line-clamp-none sm:line-clamp-2 absolute top-0 text-[rgba(233,229,246,.87)] max-w-[80%]">ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล</p>
                      <div className="absolute bottom-0 flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
                        <p>สมาชิกหมายเลข 4767826</p>
                        <span>&#183;</span>
                        <p>6 ชั่วโมง</p>
                      </div>
                      <div className="absolute bottom-0 right-2 flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
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
                    <div className="md:hidden sm:block relative h-full w-full">
                      <p className="text-[rgba(233,229,246,.87)] max-w-[80%] line-clamp-3 mb-2">ชวนแชร์ปัญหาผิวเป็นสิวและวิธีการดูแลของคุณ ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา! 100 รางวัล</p>
                      <div className="flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
                        <p>สมาชิกหมายเลข 4767826</p>
                      </div>
                      <div className="flex space-x-2 text-[rgba(151,146,165,0.87)] font-light mb-2">
                        <span>&#183;</span>
                        <p>6 ชั่วโมง</p>
                      </div>
                      <div className="right-2 flex space-x-2 text-[rgba(151,146,165,0.87)] font-light">
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
              <div className="flex justify-center items-center space-x-2 bg-[#7459c8] rounded-b-md w-full p-4 hover:bg-[#634da5] duration-300 cursor-default">
                <IoIosArrowDown />
                <button> ดูเพิ่มเติม </button>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tagList = [
  {
    title: 'หุ้น',
  },
  {
    title: '3 HD (BEC)',
  },
  {
    title: 'ฟุตบอลไทย',
  },
]

const announceList = [
  {
    title: <p className="text-[rgba(233,229,246,.87)] font-light"> 🎧 <mark>Pantip Daily Podcast</mark> 🎧 3 อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 6 มีนาคม 📊</p>,
  },
  {
    title: <p className="text-[rgba(233,229,246,.87)] font-light"><mark>Pantip Point</mark> 💰 มีนามีใจ...ชวนเธอคนดีมาเล่น <mark>#เกมเขาวงกต</mark> พร้อมตามหาน้องเพี้ยนกัน ! 🧐🔎</p>,
  },
  {
    title: <p className="text-[rgba(233,229,246,.87)] font-light">พันทิปเปิดตัวฟีเจอร์ใหม่ : <mark>follow ระบบติดตามสมาชิก</mark> เริ่มติดตามเพื่อนสมาชิกกันได้แล้วนะ</p>,
  },
]

const cardList = [
  {
    title: '[Pantip Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ชวนร่วมสนุก ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา 💚',
    img: '/card/highlight/card1.png'
  },
  {
    title: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'รายได้ไปพร้อมกับใช้งาน Pantip ได้แล้วนะ Pantip Pick of the Year 2023 - รวม 10 สุดยอดกระทู้',
    img: '/card/highlight/card1.png'
  },
  {
    title: '[Pantip Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ชวนร่วมสนุก ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา 💚',
    img: '/card/highlight/card1.png'
  },
  {
    title: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'รายได้ไปพร้อมกับใช้งาน Pantip ได้แล้วนะ Pantip Pick of the Year 2023 - รวม 10 สุดยอดกระทู้',
    img: '/card/highlight/card1.png'
  },
  {
    title: '[Pantip Point] ชวนเธอคนดีมาเล่น #เกมเขาวงกต พร้อมตาม',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ชวนร่วมสนุก ลุ้นรับเซรั่มใหม่ล่าสุดจากไบโอเดอร์มา 💚',
    img: '/card/highlight/card1.png'
  },
  {
    title: '🎧 PANTIP PODCAST 🎧 3 อันดับกระทู้ฮิตบนพันทิปประจำวัน 📊',
    img: '/card/highlight/card1.png'
  },
  {
    title: 'ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน',
    img: '/card/highlight/card1.png'
  },
]
