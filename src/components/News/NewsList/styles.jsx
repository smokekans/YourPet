const styles = {
  container: {
    mr: 'auto',
    ml: 'auto',
    mb: { mobile: '40px', tablet: '60px', desktop: '60px' },
    width: { mobile: '320px', tablet: '768px', desktop: '1280px' },
    height: { mobile: '320px', tablet: '768px', desktop: '1136px' },

    pr: { mobile: '20px', tablet: '32px', desktop: '16px' },
    pl: { mobile: '20px', tablet: '32px', desktop: '16px' },
  },
  list: {
    display: 'flex',
    alingItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    p: 0,
    gap: { mobile: '24px', tablet: '24px', desktop: '31px' },
  },

  noResult: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'primary',
    textAlign: 'center',
    marginTop: '40px',
  },
};
export default styles;
