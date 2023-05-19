const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // height: { mobile: '786px', tablet: '540px' },
    minHeight: 'max-content',
    width: { mobile: '280px', tablet: '681px' },
    // borderRadius: { mobile: '20px', tablet: '40px'},
    p: { mobile: '12px 12px 16px 12px', tablet: '32px 31px 24px 32px' },
  },
  content: {
    // display: { mobile: 'block', tablet: 'flex' },
    // gap: '24px',
    pb: { mobile: '20px', tablet: '52px' },
    pt: { mobile: '28px', tablet: '12px' },
     display: 'flex',
    flexDirection: 'column',
    gap: { mobile: '20px', tablet: '52px' },
    // position: 'relative',
  },
  contentText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: { mobile: '24px', tablet: '36px' },
    lineHeight: { mobile: '33px', tablet: '49px' },
    fontFamily: 'typography.fontFamily',
    textAlign: 'center'
  },
  commentText: {
    fontWeight: 500,
   fontSize: { mobile: '16px', tablet: '24px'},
    lineHeight: { mobile: '22px', tablet: '33px' },
    alignItems: 'center',
        textAlign: 'center'

  },
  button: {
    textTransform: 'none',
    minWidth: { mobile: '256px', tablet: '248px' },
    // minWidth: '129px',
    fontWeight: 700,
    height: '40px',
    border: '2px solid #54ADFF',
    borderRadius: '40px',
    fontSize: 16,
    padding: '9px 20px',
    lineHeight: 1.37,
    color: '#FEF9F9',
     backgroundColor: '#54ADFF',
    '& svg': {
      width: '24px',
      height: '24px',
      stroke: '#FEF9F9',
    },
    '&:hover': {
      backgroundColor: '#54ADFF',
      color: '#FEF9F9',
    },
  },
};

export default styles;
