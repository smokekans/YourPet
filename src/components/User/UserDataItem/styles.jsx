const styles = {
  ul: {
    margin: '200px',
    width: { mobile: '264px' },
    ml: '16px',
    mr: '24px',
  },
  li: {
    height: '25px',
    left: '32px',
    top: '461px',
    mt: '12px',
    fontFamily: 'Manrope',
    fonStyle: 'normal',
    fontWeight: '600',
    fontSize: { mobile: '14px', tablet: '18px', desktop: '18px' },
    lineHeight: { mobile: '19px', tablet: '25px', desktop: '25px' },
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.04em',
    color: '#111111',
  },

  header: {
    width: '207px',
    height: '38px',
    left: '17px',
    top: '130px',

    fontFamily: 'Manrope',

    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '38px',
  },
  images: {
    width: '182px',
    height: '182px',

    borderRadius: '40px',
  },
  input: {
    boxSizing: 'border-box',
    outline: 'none',
    backgroundColor: '#fff',
    borderBottom: 'none',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'none',
    paddingBottom: '15px ',
    width: { mobile: '180px', tablet: '255px', desktop: '255px' },
    height: '32px',
    border: '1px solid #54ADFF',
    borderRadius: '20px',
    '&::before': {
      borderBottom: 'none',
      transition: 'none',
    },
    '&::after': {
      borderBottom: 'none',
      transition: 'none',
    },
    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderBottom: 'none',
      transition: 'none',
    },
  },
  btnLogOut: {
    height: '22px',
    ml: { tablet: '53px', desktop: '20px' },

    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '22px',
    textTransform: 'none',

    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.04em',
    color: '#888888',
  },
  btn: {
    marginLeft: '2px',
  },
};

export default styles;
