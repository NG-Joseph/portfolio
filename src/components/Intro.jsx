import React from 'react';
import { Link } from 'react-router-dom';
import { animated } from 'react-spring/renderprops';

import styles from './Intro.module.css';
import { ReactComponent as Chevron } from '../assets/chevron_right.svg';
import Social from './Social';

const Intro = ({ style, mouseEnter, mouseLeave }) => {
  return (
    <animated.section style={style} className={styles.intro}>
      <div className={styles.image}>
        <figure>
          <img
            src='https://res.cloudinary.com/favourcodes/image/upload/v1598125526/profile-min.png'
            alt='ayobami favour adedapo'
          />
        </figure>
      </div>
      <div className={styles.about}>
        <p className={styles.skills}>
          html, js, css, react, graphql, firebase.
        </p>
        <p className={styles.specialization}>Mobile and Web</p>
        <h2 data-text='Frontend Developer' className={styles.title}>
          Frontend Developer
        </h2>
        <p className={styles.desc}>
          Hello! I'm Ayobami Favour Adedapo, a Frontend Developer for Web and
          Mobile, and UI/UX Enthusiast. I love creating beautiful and intuitive
          interfaces for users. I have an eye for design with a User-Driven
          Approach to Development. In my spare time, I work on ThreeJs, WebGL
          and various CSS Animations.
        </p>
        <Social mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
        <Link
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className={styles.next}
          to='/projects'
        >
          View Select Projects <Chevron />
        </Link>
      </div>
    </animated.section>
  );
};

export default Intro;
