import React from "react";
import { Button, TextField } from '@mui/material';
import "../../MUI.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { toggleIsLoading } from '../../store/actions/users-action';
import { isLoadingSelector } from '../../store/selectors/users-selectors';
import { Loader } from '../Loader/Loader';
import style from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(state => isLoadingSelector(state));
  return (
    <div className={style.Login}>
      <h2>Авторизация</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!/(?=^.{8,}$)/g.test(values.password)) {
            errors.password = 'Пароль должен содержать не менее 8 символов';
          }
          else if (!/^(?=.*[A-Z])[\d\w\D]{8,}$/g.test(values.password)) {
            errors.password = 'Пароль должен содержать хотя бы одну заглавную букву';
          }
          if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[\w\s]{2,}$/g.test(values.email)
          ) {
            errors.email = 'Некорректный адрес электронной почты';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(toggleIsLoading(true));
          values.email.trim();
          values.password.trim();
          setTimeout(() => {
            setSubmitting(false);
            dispatch(toggleIsLoading(false));
            return navigate("/");
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              type="text"
              name="email" placeholder="email"
              disabled={isLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email.trim()}
            />
            {errors.email && touched.email && <span className={style.error}>{errors.email}</span>}
            <TextField
              id="outlined-password-input"
              autoComplete="current-password"
              type="password"
              name="password" placeholder="password"
              disabled={isLoading}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password.trim()}
            />
            {errors.password && touched.password && <span className={style.error}>{errors.password}</span>}
            <Button variant="contained" type="submit" disabled={isSubmitting}>Авторизация</Button>
            {isLoading && <Loader classname={"Loader_login"} />}
          </form>
        )}
      </Formik>
    </div>
  );
};