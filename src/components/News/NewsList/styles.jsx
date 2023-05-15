const styles = {
  container: {
    mr: 'auto',
    ml: 'auto',
    width: { mobile: '320px', tablet: '768px', desktop: '1280px' },
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
