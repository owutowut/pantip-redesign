'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { Popover } from 'antd';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  const menuContent = (
    <div className='menu-content bg-white rounded-md w-[10rem] space-y-2'>
      <div className='border-b pb-2 text-[1rem]'>
        <p className='hover:bg-gray-300 duration-300 cursor-default p-2'>ลงทะเบียน</p>
        <p className='hover:bg-gray-300 duration-300 cursor-default p-2'>เข้าสู่ระบบ</p>
      </div>
      <div className='text-[1rem]'>
        <p className='hover:bg-gray-300 duration-300 cursor-default p-2'>ตั้งกระทู้</p>
        <p className='hover:bg-gray-300 duration-300 cursor-default p-2'>คอมมูนิตี้</p>
      </div>
    </div>
  )

  return (
    <div className='fixed top-0 left-0 z-50 w-full'>
      <div className='h-[7rem] w-full flex justify-center items-center bg-[#2d2a49] border-b border-[#1f1d33]'>
        <div className='max-w-[1600px] w-full flex justify-between items-center'>
          <div className='w-full h-full flex justify-start'>
            <Link href='/' className='relative w-[4.8rem] h-[4.8rem] hover:drop-shadow-md transition-all duration-500'>
              <Image className='hover:scale-110 duration-300' fill objectFit='contain' objectPosition='center' src='/pantip-logo.png' alt='pantip logo' />
            </Link>
          </div>
          <div className='px-4 flex justify-center items-center space-x-2 w-[80rem] h-[3rem] rounded-full bg-white border-2 border-[#1f1d33] hover:drop-shadow-md transition-all duration-500'>
            <input type="text" placeholder='ค้นหาบน Pantip' className='w-full h-full text-[#2d2a49] outline-none bg-transparent' />
            <div className='bg-[#2d2a49] rounded-full'>
              <IoMdSearch className='w-4 h-4 rounded-full m-2' />
            </div>
          </div>
          <div className='w-full h-full flex justify-end'>
            <Popover
              trigger="click"
              content={menuContent}
              open={openMenu}
              onOpenChange={handleOpenMenu}
              placement='leftTop'
            >
              <div onClick={handleOpenMenu} className='border-2 border-[#1f1d33] w-[5.5rem] h-[3rem] bg-white text-[#2d2a49] rounded-full flex justify-center items-center px-2 space-x-2 hover:scale-110 duration-300'>
                <GiHamburgerMenu className='w-4 h-4' />
                <FaUserCircle className='w-8 h-8' />
              </div>
            </Popover>
          </div>
        </div>
      </div>
      <div className='h-[6rem] w-full flex justify-center items-center bg-[#2d2a49] border-b border-[#1f1d33]'>
        <div className='w-full 2xl:max-w-[1650px]'>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="navbar-swiper"
          >
            <SwiperSlide>
              <div className='flex justify-between px-[8rem]'>
                {topicList.filter((item) => item.page === 1).map((item, index) => (
                  <div key={index} className='text-center space-y-2 group cursor-default'>
                    <div className='flex justify-center'>{item.icon}</div>
                    <p className='text-[0.8rem] whitespace-nowrap'>{item.title}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='flex justify-between px-[8rem]'>
                {topicList.filter((item) => item.page === 2).map((item, index) => (
                  <div key={index} className='text-center space-y-2 group cursor-default'>
                    <div className='flex justify-center'>{item.icon}</div>
                    <p className='text-[0.8rem] whitespace-nowrap'>{item.title}</p>
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
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'รวมมิตร'
  },
  {
    page: 1,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'หว้ากอ'
  },
  {
    page: 1,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'สีลม'
  },
  {
    page: 1,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'เฉลิมกรุง'
  },
  {
    page: 1,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'พันทิป'
  },
  {
    page: 1,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ถนนนักเขียน'
  },
  {
    page: 1,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'บางขุนพรหม'
  },
  {
    page: 1,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'กล้อง'
  },
  {
    page: 1,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ไกลบ้าน'
  },
  {
    page: 1,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'เฉลิมไทย'
  },
  {
    page: 1,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'หอศิลป์'
  },
  {
    page: 1,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'หอศิลป์'
  },
  {
    page: 1,
    icon: <FaBookMedical className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'หอศิลป์'
  },
  {
    page: 1,
    icon: <FaBookMedical className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 1,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 2,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'รวมมิตร'
  },
  {
    page: 2,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'หว้ากอ'
  },
  {
    page: 2,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'สีลม'
  },
  {
    page: 2,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'เฉลิมกรุง'
  },
  {
    page: 2,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'พันทิป'
  },
  {
    page: 2,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ถนนนักเขียน'
  },
  {
    page: 2,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'เฉลิมกรุง'
  },
  {
    page: 2,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'พันทิป'
  },
  {
    page: 2,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ถนนนักเขียน'
  },
  {
    page: 2,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'บางขุนพรหม'
  },
  {
    page: 2,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'กล้อง'
  },
  {
    page: 2,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ไกลบ้าน'
  },
  {
    page: 2,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'เฉลิมไทย'
  },
  {
    page: 2,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 2,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'หอศิลป์'
  },
  {
    page: 2,
    icon: <MdScience className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 2,
    icon: <FaStar className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'หอศิลป์'
  },
  {
    page: 2,
    icon: <FaBookMedical className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 2,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 2,
    icon: <FaBookMedical className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
  {
    page: 2,
    icon: <IoPeople className='w-10 h-10 border border-gray-500 p-2 bg-[#26233b] group-hover:bg-black duration-300' />,
    title: 'ชายคา'
  },
]