const styles = {
  iconBtn: {
    p: 0,
    ml: '24px',
    color: '#FFC107',
  },
  menu: {
    color: '#FFC107',
    '& .MuiPaper-root': {
      maxWidth: '100%',
      maxHeight: '100%',
      width: '100vw',
      height: '100vh',
      position: 'unset',
    },
  },
  box: {
    p: { mobile: '20px 20px 38px 20px', tablet: '24px 32px 92px 32px' },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    cursor: 'auto',
    '&:hover': { bgcolor: 'background.default' },
  },
};
export default styles;
