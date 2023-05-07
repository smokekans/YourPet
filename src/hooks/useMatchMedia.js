const { useState, useLayoutEffect } = require('react');
const { default: device } = require('./device');

const queries = [
  `${device.mobile} and (max-width: 767px)`,
  `${device.tablet} and (max-width: 1279px)`,
  `${device.desktop}`,
];

const userMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(list => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(list => list.addEventListener('change', handler));

    return () => mediaQueryLists.forEach(list => list.removeEventListener('change', handler));
  });

  const typesOfScreen = ['isMobile', 'isTablet', 'isDesktop'];

  return typesOfScreen.reduce(
    (acc, screen, idx) => ({
      ...acc,
      [screen]: values[idx],
    }),
    {}
  );
};

export default userMatchMedia;
