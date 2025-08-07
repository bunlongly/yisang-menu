// app/layout.tsx
'use client';
import '@/styles/globals.css';
import React from 'react';
import { Cardo } from 'next/font/google';


const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cardo'
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    // inject the CSS var onto <html>
    <html lang='en' className={cardo.variable}>
      <body
        className='h-screen w-screen flex flex-col overflow-hidden text-white 
                   bg-cover bg-center bg-no-repeat bg-fixed 
                   font-serif'
      >
        <header className='text-white'></header>
        <main className='flex-1 flex items-center justify-center px-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
