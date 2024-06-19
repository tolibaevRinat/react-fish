import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';

import styles from './cart.module.scss';
const Pap = ({ isLaptop, isMobile }) => {
  const items = useSelector((state) => state.cart.items);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const showResult = (data) => {
    if (items.lenght > 0) {
      alert('Спасибо за заказ');
      reset({ desc: '', name: '', phone: '+998' });
    } else {
      alert('Вы веть ничего не заказали');
    }
  };

  setValue('phone', '+998');

  return (
    <form onSubmit={handleSubmit(showResult)} className={`${styles.pay}`}>
      <div className={`${styles.inner} flex f-d-col gap-20 rel`}>
        <h2 className={`${styles.title_2}`}>Оплата и доставка</h2>
        <div className={`${styles.check} flex f-d-col gap-10`}>
          <h3 className={`${styles.subtitle}`}>Выберите способ доставки</h3>
          <label className="flex al-c gap-10">
            <input
              className={`${styles.input}`}
              {...register('delivery', { required: true })}
              type="radio"
              defaultChecked
            />
            <span className="flex f-cen">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Самовывоз
          </label>
          <label className="flex al-c gap-10">
            <input
              className={`${styles.input}`}
              {...register('delivery', { required: true })}
              type="radio"
            />
            <span className="flex f-cen">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Курьером
          </label>
        </div>
        <div className={`${styles.check} flex f-d-col gap-10`}>
          <h3 className={`${styles.subtitle}`}>Выберите способ доставки</h3>
          <label className="flex al-c gap-10">
            <input
              className={`${styles.input}`}
              {...register('toPay', { required: true })}
              type="radio"
              defaultChecked
            />
            <span className="flex f-cen">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Наличными (При получении)
          </label>
          <label className="flex al-c gap-10">
            <input
              className={`${styles.input}`}
              {...register('toPay', { required: true })}
              type="radio"
            />
            <span className="flex f-cen">
              <svg
                width="10"
                height="9"
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L4.09377 7.32033C4.57497 7.68123 5.26359 7.53872 5.56202 7.01647L9 1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            Банковской картой
          </label>
        </div>
        <div className={`${styles.check} flex f-d-col gap-10`}>
          <h3 className={`${styles.subtitle}`}>Мобильный телефон</h3>

          <Controller
            name="phone"
            control={control}
            defaultValue="+998"
            rules={{
              required: 'Правильно заполните номер телефона',
              validate: (value) => {
                const regex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
                return regex.test(value) || 'Правильно заполните номер телефона';
              },
            }}
            render={({ field }) => (
              <InputMask
                {...field}
                className={`${styles.input}`}
                mask="+998 (99) 999-99-99"
                maskChar="_"
              >
                {(inputProps) => <input {...inputProps} type="tel" placeholder="Телефон" />}
              </InputMask>
            )}
          />

          {errors.tel && <div style={{ color: 'red' }}>{errors.tel.message}</div>}
        </div>
        {(isLaptop || isMobile) && (
          <>
            <div className={`${styles.check} flex f-d-col gap-10`}>
              <h3 className={`${styles.subtitle}`}>Эл. почта</h3>
              <input
                {...register('email', {
                  required: 'Пожалуйста введите валидный Email',
                  pattern: {
                    value:
                      /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                    message: 'Пожалуйста введите валидный Email',
                  },
                })}
                className={`${styles.input}`}
                type="email"
                placeholder="naumov.d@gmail.com"
              />
              {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
            </div>
            <div className={`${styles.check} flex f-d-col gap-10`}>
              <h3 className={`${styles.subtitle}`}>Куда доставлять</h3>

              <input
                className={`${styles.input}`}
                {...register('adres', { required: true })}
                type="text"
                placeholder="Введите адрес"
              />
              {errors.adres && <div style={{ color: 'red' }}>Вы не ввели ваш адрес</div>}
            </div>
            <button className={`${styles.submit}`} type="submit">
              <a className={`${styles.to_catalog} rel flex f-cen t-a-cen`} href="#!">
                <img src="img/sun.svg" alt=" " />
                <span className="rel z-5 f-700">
                  Сделать <br /> заказ
                </span>
              </a>
            </button>
          </>
        )}
      </div>

      {!isMobile && !isLaptop && (
        <div className={`${styles.right} flex f-d-col gap-20`}>
          <div className={`${styles.check} flex f-d-col gap-10`}>
            <h3 className={`${styles.subtitle}`}>Эл. почта</h3>
            <input
              {...register('email', {
                required: 'Пожалуйста введите валидный Email',
                pattern: {
                  value:
                    /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
                  message: 'Пожалуйста введите валидный Email',
                },
              })}
              className={`${styles.input}`}
              type="email"
              placeholder="naumov.d@gmail.com"
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
          </div>
          <div className={`${styles.check} flex f-d-col gap-10`}>
            <h3 className={`${styles.subtitle}`}>Куда доставлять</h3>
            <input
              className={`${styles.input}`}
              {...register('adres', { required: true })}
              type="text"
              placeholder="Введите адрес"
            />
            {errors.adres && <div style={{ color: 'red' }}>Вы не ввели ваш адрес</div>}
          </div>
          <button className={`${styles.submit}`} type="submit">
            <a className={`${styles.to_catalog} rel flex f-cen t-a-cen`} href="#!">
              <img src="img/sun.svg" alt=" " />
              <span className="rel z-5 f-700">
                Сделать <br /> заказ
              </span>
            </a>
          </button>
        </div>
      )}
    </form>
  );
};
export default Pap;
