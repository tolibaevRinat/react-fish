import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

import styles from './question.module.scss';
const Question = () => {
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

  return (
    <section className={`${styles.question} rel`}>
      <picture className={`${styles.img_bg} rel z-5`}>
        <source srcSet="img/bottom-bg.webp" type="image/webp" />
        <img src="img/bottom-bg.png" alt="Рыба" />
      </picture>
      <div className={`${styles.body} container flex al-s rel z-5`}>
        <div className={`${styles.content}`}>
          <h2 className={`${styles.title} title`}>Задай вопрос</h2>
          <p className={`${styles.text} text`}>
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
              className={`${styles.input}`}
              {...register('desc', { required: true })}
              type="text"
              placeholder="Опиши проблему"
            />
            {errors.desc && <span style={{ color: 'red' }}>Вы не описали проблему</span>}

            <input
              className={`${styles.input}`}
              {...register('name', { required: true })}
              type="text"
              placeholder="Имя"
            />
            {errors.name && <span style={{ color: 'red' }}>Вы не ввели ваше имя</span>}

            <InputMask
              className={`${styles.input}`}
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
          <button className={`${styles.submit}`} type="submit" form="form">
            <a className={`${styles.to_catalog} rel flex f-cen t-a-cen`} href="#!">
              <img src="img/sun.svg" alt=" " />
              <span className="rel z-5 f-700">
                Задать <br /> вопрос
              </span>
            </a>
          </button>
        </div>
        <picture className={`${styles.img} rel z-5`}>
          <source srcSet="img/bottom.webp" type="image/webp" />
          <img src="img/bottom.png" alt="Рыба" />
        </picture>
      </div>
    </section>
  );
};
export default Question;
