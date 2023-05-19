const styles = {
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '248px',
    heigth: '40px',
    border: '2px solid #54ADFF',
    borderRadius: '40px',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '21.86px',
    backgroundColor: 'rgba(84, 173, 255, 1)',
    color: 'rgba(255, 255, 255, 1)',
    '&:hover': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:active': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: ' 12px',
    padding: '8px',
    border: 'none',
    width: '94px',
    heigth: '40px',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '21.86px',
    borderRadius: '40px',
    backgroundColor: '#FFFFFF',
    color: '#54ADFF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
    '&:active': {
      backgroundColor: '#FFFFFF',
    },
  },
  more: {
    display: 'flex',
    
  },
  primary: {
    display: 'flex',
    flexDirection: 'column',
  },
  secondary: {
    display: 'flex',
     flexDirection: 'column',
  },
};

export default styles;