'use client'

import React from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className='fixed top-0 left-0 z-50 w-full'>
      <div className='h-[6rem] w-full flex justify-center items-center bg-[#2d2a49] border-b border-[#1f1d33]'>
        <div className='max-w-[1600px] w-full flex justify-between items-center'>
          <div className='w-full h-full flex justify-start'>
            <div className='relative w-[4.8rem] h-[4.8rem] hover:drop-shadow-md transition-all duration-500'>
              <Image fill objectFit='contain' objectPosition='center' src='/pantip-logo.png' alt='pantip logo' />
            </div>
          </div>
          <div className='px-4 flex justify-center items-center space-x-2 w-[80rem] h-[3rem] rounded-full bg-white border-2 border-[#1f1d33] hover:drop-shadow-md transition-all duration-500'>
            <input type="text" placeholder='ค้นหาบน Pantip' className='w-full h-full text-[#2d2a49] outline-none bg-transparent' />
            <div className='bg-[#2d2a49] rounded-full'>
              <IoMdSearch className='w-4 h-4 rounded-full m-2' />
            </div>
          </div>
          <div className='w-full h-full flex justify-end'>
            <div className='border-2 border-[#1f1d33] w-[5.5rem] h-[3rem] bg-white text-[#2d2a49] rounded-full flex justify-center items-center px-2 space-x-2 hover:drop-shadow-md transition-all duration-500'>
              <GiHamburgerMenu className='w-4 h-4' />
              <FaUserCircle className='w-8 h-8' />
            </div>
          </div>
        </div>
      </div>
      <div className='h-[5rem] w-full flex justify-center items-center bg-[#2d2a49] border-b border-[#1f1d33]'>
        <div className='w-full 2xl:max-w-[1650px]'>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="navbar-swiper"
          >
            <SwiperSlide>
              <div className='flex justify-center space-x-12'>
                {topicList.filter((item) => item.page === 1).map((item, index) => (
                  <div key={index} className='w-fit text-center space-y-2'>
                    <div className='flex justify-center'>{item.icon}</div>
                    <p className='text-[0.8rem]'>{item.title}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-center space-x-12'>
                {topicList.filter((item) => item.page === 2).map((item, index) => (
                  <div key={index} className='w-fit text-center space-y-2'>
                    <div className='flex justify-center'>{item.icon}</div>
                    <p className='text-[0.8rem]'>{item.title}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

const topicList = [
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'รวมมิตร'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'หว้ากอ'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'สีลม'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'เฉลิมกรุง'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'พันทิป'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'ถนนนักเขียน'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'บางขุนพรหม'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'กล้อง'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'ไกลบ้าน'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'เฉลิมไทย'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'หอศิลป์'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'หอศิลป์'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <FaBookMedical />,
    title: 'ชายคา'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'รวมมิตร'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'หว้ากอ'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'สีลม'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'เฉลิมกรุง'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'พันทิป'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'ถนนนักเขียน'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'บางขุนพรหม'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'กล้อง'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'ไกลบ้าน'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'เฉลิมไทย'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'ไกลบ้าน'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'เฉลิมไทย'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'ไกลบ้าน'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'เฉลิมไทย'
  },
  {
    page: 2,
    icon: <FaBookMedical />,
    title: 'เฉลิมไทย'
  },
]