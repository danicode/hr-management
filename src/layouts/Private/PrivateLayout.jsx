"use client";
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../components/Common';
import styles from './PrivateLayout.module.css';

const PrivateLayout = () => {
  return (
    <div className={ styles.privatelayout }>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PrivateLayout;
