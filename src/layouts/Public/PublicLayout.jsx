"use client";
import { Outlet } from 'react-router-dom';
import styles from './PublicLayout.module.css';

const PublicLayout = () => {
  return (
    <div className={ styles.PublicLayout }>
      <Outlet />
    </div>
  );
};

export default PublicLayout;
