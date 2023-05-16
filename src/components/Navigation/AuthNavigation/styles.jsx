const styles = {
  authContainer: {
    ml: {
      //       mobile: '20px 20px 0 20px',
      //   tablet: '167px',
      tablet: 'auto',

      desktop: 'auto',
    },
    display: 'flex',
    flexDirection: { mobile: 'column' },
    gap: { mobile: '12px', tablet: '20px', desktop: '20px' },
    mb: { mobile: '40px' },
  },
  authBtn: {
    height: '38px',
    width: '142px',
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
};
export default styles;
