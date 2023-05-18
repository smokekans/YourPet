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
    display: { mobile: 'block', tablet: 'flex' },
    gap: '24px',
    mb: { mobile: '12px', tablet: '28px' },
    position: 'relative',
  },
  contentText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontWeight: '700',
    fontSize: { mobile: '24px', tablet: '28px' },
    lineHeight: { mobile: '33px', tablet: '38px' },
    fontFamily: 'typography.fontFamily',
  },
  commentText: {
    fontWeight: 500,
   fontSize: { mobile: '14px', tablet: '16px'},
    lineHeight: { mobile: '19px', tablet: '24px' },
    alignItems: 'center',
    // lineHeight: '24px',
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
