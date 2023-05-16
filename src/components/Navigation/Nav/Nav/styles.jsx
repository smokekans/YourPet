const styles = {
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    ml: '80px',
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
    fontSize: { tablet: '48px', desktop: '20px' },
    lineHeight: { tablet: '66px', desktop: '27px' },
    color: 'black',
    '&.active': {
      color: '#FFC107',
    },
    '&:hover': {
      color: '#FFC107',
    },
  },
};
export default styles;
//  p: {
//       mobile: '20px 20px 0 20px',
//       tablet: '24px 32px 0 32px',
//       desktop: '20px 16px 0 16px',
//     },
