const styles = {
  container: {
    p: 0,
    pt: { mobile: '40px', tablet: '80px', desktop: '80px' },
    pb: { mobile: '40px', tablet: '80px', desktop: '80px' },
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: { mobile: '24px', tablet: '48px', desktop: '48px' },
    lineHeight: { mobile: '33px', tablet: '66px', desktop: '66px' },
    mb: { mobile: '24px', tablet: '40px', desktop: '40px' },
    color: 'primary',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: { mobile: '24px', tablet: '40px', desktop: '60px' },
  },
  input: {
    width: { mobile: '280px', tablet: '608px', desktop: '608px' },
    height: '44px',
    background: '#FFFFFF',
    boxShadow: '3px 8px 14px 0px #88C6FD30',
    borderRadius: { mobile: '24px', tablet: '20px', desktop: '20px' },
    paddingLeft: '20px',
    paddingRight: '40px',
  },
};

export default styles;
