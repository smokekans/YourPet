const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: { mobile: '30px', tablet: '48px' },
    height: { mobile: '300px', tablet: '354px' },
    width: { mobile: '400px', tablet: '608px' },
    p: { mobile: '40px', tablet: '100px' },
  },
  title: {
    p: { mobile: '20px 24px', tablet: 0 },
    textAlign: 'center',
    fontWeight: '500',
    fontSize: { mobile: '30px', tablet: '36px' },
    lineHeight: { mobile: '40px', tablet: '49px' },
    fontFamily: 'typography.fontFamily',
  },
 
  buttonBox: {
    gap: '17px',
      alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textTransform: 'none',
     minWidth: { mobile: '256px', tablet: '129px' },
    height: '40px',
    border: '2px solid #54ADFF',
    borderRadius: '40px',
    fontSize: 16,
    padding: '9px 20px',
    lineHeight: 1.37,
    color: '#54ADFF',
    '& svg': {
      stroke: '#54ADFF' ,
    },
    '&:hover': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:hover svg': {
       stroke: '#FEF9F9',
    },
    '&:active': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:active svg': {
       stroke: '#FEF9F9',
    },
    '&:focus': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:focus svg': {
       stroke: '#FEF9F9',
    },
  },
};

export default styles;
