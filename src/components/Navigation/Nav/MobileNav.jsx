import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';

function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <BurgerMenu isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && <BurgerMenu />}
    </>
  );
}

export default MobileNav;
