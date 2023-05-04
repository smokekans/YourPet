import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default SharedLayout;
