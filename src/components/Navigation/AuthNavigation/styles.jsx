const styles = {
  authContainer: {
    ml: {
      tablet: 'auto',
      desktop: 'auto',
    },
    display: 'flex',
    flexDirection: { mobile: 'column', tablet: 'row' },
    gap: { mobile: '12px', tablet: '20px', desktop: '20px' },
    mb: { mobile: '40px', tablet: 0, desktop: 0 },
  },
  authBtn: {
    height: { mobile: '36px', tablet: '36px', desktop: '40px' },
    width: { mobile: '165px', tablet: '142px', desktop: '165px' },
    borderRadius: '40px',
    color: 'accent.main',

    border: '2px solid #FFC107',
    //   '& .MuiBox-root css-1dp9lam': {

    // },
    '&:hover': {
      border: '2px solid #FFC107',
      color: 'text.light',
      backgroundColor: 'accent.main',
      fill: 'white',
    },
    '&.active': {
      backgroundColor: 'accent.main',
      color: 'text.light',
      borderColor: 'accent.main',
      fill: 'white',
    },
  },
  btnText: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
  },
  print: {
    fill: '#FFC107',
    '&:hover': {
      fill: 'white',
    },
    '&.active': {
      fill: 'white',
    },
  },
};
export default styles;
