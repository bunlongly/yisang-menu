'use client';
import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className='h-screen w-screen flex flex-col overflow-hidden text-white bg-cover bg-center bg-no-repeat bg-fixed'
     
      >
        {/* Header (optional or empty) */}
        <header className='text-white'>{/* Add brand/logo if needed */}</header>

        {/* Main content fills the rest */}
        <main className='flex-1 flex items-center justify-center px-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
