const styles = {
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    ml: { mobile: 0, desktop: '160px' },
  },
  navList: {
    p: 0,
    gap: { mobile: '20px', tablet: '60px', desktop: '40px' },
    display: 'flex',
    flexDirection: { mobile: 'column', tablet: 'column', desktop: 'row' },
    alignItems: 'center',
  },
  navItem: {
    p: 0,
    width: 'auto',
    display: 'flex',
    flexDirection: { mobile: 'column' },
  },
  link: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: { mobile: '32px', tablet: '48px', desktop: '20px' },
    lineHeight: { mobile: '44px', tablet: '66px', desktop: '27px' },
    color: 'black',
    '&.active': {
      color: '#FFC107',
    },
    '&:hover': {
      color: '#FFC107',
      transition: 'color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};
export default styles;
