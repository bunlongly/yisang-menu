'use client';

import React from 'react';
import { FaTelegram, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

const categories = [
  {
    key: 'breakfast',
    label: 'Breakfast',
    url: 'https://heyzine.com/flip-book/54a989a023.html'
  },
  {
    key: 'lunch_dinner',
    label: 'Lunch / Dinner',
    url: 'https://heyzine.com/flip-book/92eec93fa8.html'
  },
  {
    key: 'Beverage',
    label: 'Beverage',
    url: 'https://heyzine.com/flip-book/6e2f6de4c0.html'
  }
];

export default function MenuPage() {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-between px-4  text-white bg-white mt-24'>
      <motion.div
        className='flex flex-col items-center text-center max-w-md w-full flex-grow justify-start text-black'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Logo */}
        <div className='w-full flex justify-center'>
          <Image
            src='/YiSangLogo.png'
            alt='Yi Sang Logo'
            width={208}
            height={208}
            className='object-cover'
          />
        </div>

        <h1 className='text-3xl font-bold mb-9'>Our Menu</h1>

        {/* Buttons */}
        <div className='flex flex-col items-center gap-4 w-full max-w-xs mb-5'>
          {categories.map(cat => (
            <a
              key={cat.key}
              href={cat.url}
              className='w-full py-3 rounded-full text-lg font-semibold text-center transition duration-300 
                         shadow-md hover:scale-105 text-white'
              style={{ backgroundColor: '#be1f2d' }}
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-6 text-xl mb-2 py-9 text-black mt-6'>
          <a
            href='https://t.me/yisangrestaurant'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-[#be1f2d]'
          >
            <FaTelegram size={28} />
          </a>
          <a
            href='https://www.facebook.com/share/1GVco9oCRv/?mibextid=wwXIfr
'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-[#be1f2d]'
          >
            <FaFacebook size={28} />
          </a>
          <a
            href='https://www.instagram.com/yisang_restaurant?igsh=N3M0NWVvZ2Vza3hl
'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-[#be1f2d]'
          >
            <FaInstagram size={28} />
          </a>
          <a
            href='https://www.tiktok.com/@yisangchineserestaurant?_t=ZS-8yfP2aEmgdM&_r=1'
            target='_blank'
            rel='noopener noreferrer'
            className='transition hover:text-[#be1f2d]'
          >
            <FaTiktok size={28} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
