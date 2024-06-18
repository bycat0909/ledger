"use client";

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
//import AcmeLogo from '@/app/ui/acme-logo';
//import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Page: React.FC = () => {

  return (
    
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      </div>
      <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"/>
      <Link href="/pages/auth/login" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700" legacyBehavior>
        Go to Login
      </Link>
    </main>
  );
};
export default Page;