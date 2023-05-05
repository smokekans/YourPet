const screenSize = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
};

const { mobile, tablet, desktop } = screenSize;

const device = {
  mobile: `(min-width: ${mobile})`,
  tablet: `(min-width: ${tablet})`,
  desktop: `(min-width: ${desktop})`,
};

export default device;
