const styles = {
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '248px',
    height: '40px',
    mb: { mobile: '20px', tablet: '0' },
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

    border: 'none',
    minWidth: '76px',
    maxWidth: '131px',
    height: '35px',
    mr: 'auto',
    ml: 'auto',
    height: '40px',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '21.86px',
    backgroundColor: '#FFFFFF',
    color: '#54ADFF',
    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
    '&:active': {
      backgroundColor: '#FFFFFF',
    },
  },
  boxbtn: {
    display: 'flex',
    flexDirection: { mobile: 'column-reverse', tablet: 'row' },
  },
    radio: {
        display: 'flex',
        alignItems: ' center',
             justifyContent: 'center',
    width: '107px',
    height: '35px',
    backgroundColor: '#CCE4FB',
    borderRadius: ' 40px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '19px',
    
    color: ' #54ADFF',
    '&:hover': {
      backgroundColor: '#54ADFF',
      color: ' #FEF9F9',
    },
    '&:active': {
      backgroundColor: '#54ADFF',
      color: ' #FEF9F9',
    },
  },
  box: {
    display: 'flex',
      flexDirection: 'column',
    gap: '12px',
  margin:{ mobile: '20px 0 95px', tablet: '40px 0 137px' },
  },
};

export default styles;
