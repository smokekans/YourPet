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
    '& svg': {
      // fill: '#FEF9F9',
      // fill: '#FFC107',
    },
    '&:hover': {
      border: '2px solid #FFC107',
      color: 'text.light',
      backgroundColor: 'accent.main',

      // fill: '#FEF9F9',
    },
    '&:hover svg': {
      fill: '#FEF9F9',
    },
    '&.active': {
      backgroundColor: 'accent.main',
      color: 'text.light',
      borderColor: 'accent.main',
      fill: '#FEF9F9',
    },
    '&:active svg': {
      fill: '#FEF9F9',
    },
    '&:focus svg': {
      fill: '#FEF9F9',
    },
  },
  btnText: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
    textTransform: 'none',
  },
  print: {
    // stroke: '#FFC107',
    fill: '#FFC107',

    // '&:hover': {
    //   fill: '#FEF9F9',
    // },
    // '&.active': {
    //   fill: '#FEF9F9',
    // },
  },
};

export default styles;
