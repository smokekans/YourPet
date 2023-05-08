import React from 'react';
import s from './MainPage.module.css';
import { Container } from '@mui/material';

export default function HomePage() {
  return (
    <Container>
      <div className={s.HomePage}>
        <h1 className={s.Title}>Take good care of your small pets</h1>
      </div>
    </Container>
  );
}
