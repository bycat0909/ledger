"use client";

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  photo: File | null;
}

const Page: React.FC = () => {
  const [emailVerified, setEmailVerified] = useState(false);

  const formik = useFormik<SignupFormValues>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      photo: null,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      nickname: Yup.string(),
      photo: Yup.mixed().nullable(),
    }),
    onSubmit: (values) => {
      console.log('Form values:', values);
    },
  });

  const handleEmailVerification = () => {
    // 여기서 이메일 인증 로직을 추가하세요.
    // 예: 이메일 인증 API 호출
    setEmailVerified(true);
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <button type="button" onClick={handleEmailVerification}>Verify Email</button>
          {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
          {emailVerified && <div>Email Verified!</div>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
        </div>

        <div>
          <label htmlFor="nickname">Nickname</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nickname}
          />
        </div>

        <div>
          <label htmlFor="photo">Photo</label>
          <input
            id="photo"
            name="photo"
            type="file"
            onChange={(event) => {
              formik.setFieldValue('photo', event.currentTarget.files[0]);
            }}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Page;