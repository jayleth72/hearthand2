import ClassName from 'models/classname';

import styles from './Hero.module.scss';
import HeroImg from '../../../public/images/hero.jpg'

const Section = ({ children, className, ...rest }) => {
  const sectionClassName = new ClassName(styles.section);

  sectionClassName.addIf(className, className);

  return (
    <section className={sectionClassName.toString()} {...rest}>
      <div className='hero__img'>
        <img scr={HeroImg} alt="hero image" />
      </div>
      {children}
    </section>
  );
};

export default Section;
