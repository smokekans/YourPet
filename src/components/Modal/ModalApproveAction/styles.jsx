const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // height: { mobile: '786px', tablet: '540px' },
    minHeight: 'max-content',
    width: { mobile: '280px', tablet: '608px' },
    // borderRadius: { mobile: '20px', tablet: '40px'},
    p: { mobile: '30px 20px 20px 20px', tablet: '60px' },
  },
  content: {
     display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    mb: { mobile: '12px', tablet: '36px' },
    position: 'relative',
        alignItems: 'center',
    justifyContent: 'center',
    // letterSpacing: '-0.01em',
  // contentText: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '20px',
  },
  title: {
    
    textAlign: 'center',
    fontWeight: '700',
    fontSize: { mobile: '24px', tablet: '28px' },
    lineHeight: { mobile: '33px', tablet: '38px' },
    fontFamily: 'typography.fontFamily',
  },
  commentText: {
    p: '0px 20px',
    // display: 'block',
    maxWidth: '393px',
     textAlign: 'center',
    fontWeight: 500,
   fontSize: { mobile: '14px', tablet: '16px'},
    lineHeight: { mobile: '19px', tablet: '22px' },
    letterSpacing: '-0.01em',

    // lineHeight: '24px',
  },
  titleText: {
    fontWeight: '700',
    fontSize: { mobile: '14px', tablet: '16px'},
    lineHeight: { mobile: '19px', tablet: '22px' },
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
    // minWidth: '129px',
    height: '40px',
    border: '2px solid #54ADFF',
    borderRadius: '40px',
    fontSize: 16,
    padding: '9px 20px',
    lineHeight: 1.37,
    color: '#54ADFF',
    '&:hover': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:hover svg': {
      fill: 'rgba(254, 249, 249, 1)',
    },
    '&:active': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:active svg': {
      fill: 'rgba(254, 249, 249, 1)',
    },
    '&:focus': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
    '&:focus svg': {
      fill: 'rgba(254, 249, 249, 1)',
    },
  },
};

export default styles;
