import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from './question.module.scss';
const Question = ({ isMobile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const showResult = (data) => {
    alert('Ваш запрос обрабатывается');
    reset({ desc: '', name: '', tel: '+998' });
  };

  React.useEffect(() => {
    // Устанавливаем начальное значение для телефона
    setValue('tel', '+998');
  }, [setValue]);

  gsap.registerPlugin(ScrollTrigger);
  React.useLayoutEffect(() => {
    if (isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.question',
          start: 'top 60%',
          end: 'bottom 100%',
        },
      });
      tl.from('.question__img', {
        scale: 0,
      });
      tl.from('.question__title', {
        x: -400,
        opacity: 0,
      });
      tl.from('.question__text', {
        x: -400,
        opacity: 0,
      });
      tl.from('.question__input-01', {
        x: 100,
        opacity: 0,
      });
      tl.from('.question__input-02', {
        x: 100,
        opacity: 0,
      });
      tl.from('.question__input-03', {
        x: 100,
        opacity: 0,
      });
      tl.from('.question__submit', {
        scale: 0,
        opacity: 0,
      });
    }
  }, [isMobile]);

  return (
    <section className={`${styles.question} question rel`}>
      <picture className={`${styles.img_bg} rel z-5`}>
        <source srcSet="img/bottom-bg.webp" type="image/webp" />
        <img src="img/bottom-bg.png" alt="Рыба" />
      </picture>
      <div className={`${styles.body} container flex al-s rel z-5`}>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title} title question__title`}>Задай вопрос</h2>
          <p className={`${styles.text} question__text text`}>
            Мы стараемся быть максимально клиентоориентированными, по этому наши менеджеры на связи
            24/7, а соответственно, вы можете задать любой интересующий вопрос, и гарантированно в
            скором времени получите ответ!
          </p>
          <form
            onSubmit={handleSubmit(showResult)}
            id="form"
            className={`${styles.form} flex f-d-col gap-10`}
          >
            <input
              className={`${styles.input} question__input-01`}
              {...register('desc', { required: true })}
              type="text"
              placeholder="Опиши проблему"
            />
            {errors.desc && <span style={{ color: 'red' }}>Вы не описали проблему</span>}

            <input
              className={`${styles.input} question__input-02`}
              {...register('name', { required: true })}
              type="text"
              placeholder="Имя"
            />
            {errors.name && <span style={{ color: 'red' }}>Вы не ввели ваше имя</span>}

            <InputMask
              className={`${styles.input} question__input-03`}
              mask="+998 (99) 999-99-99"
              maskChar="_"
              {...register('tel', {
                required: 'Правильно заполните номер тедефона',
                validate: (value) => {
                  const regex = /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/;
                  return regex.test(value) || 'Правильно заполните номер тедефона';
                },
              })}
            >
              {(inputProps) => <input {...inputProps} type="tel" placeholder="Телефон" />}
            </InputMask>
            {errors.tel && <span style={{ color: 'red' }}>{errors.tel.message}</span>}
          </form>
          <button className={`${styles.submit} question__submit`} type="submit" form="form">
            <a className={`${styles.to_catalog} rel flex f-cen t-a-cen`} href="#!">
              <img src="img/sun.svg" alt=" " />
              <span className="rel z-5 f-700">
                Задать <br /> вопрос
              </span>
            </a>
          </button>
        </div>
        <picture className={`${styles.img} question__img rel z-5`}>
          <source srcSet="img/bottom.webp" type="image/webp" />
          <img src="img/bottom.png" alt="Рыба" />
        </picture>
      </div>
    </section>
  );
};
export default Question;
