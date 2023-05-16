const styles = {
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '540px',
    minHeight: 'max-content',
    width: { mobile: '280px', tablet: '681px' },
    borderRadius: '40px',
    p: 0,
  },
  media: {
    height: '298px',
    width: '262px',
    borderRadius: '0px 0px 40px 40px',
  },
  content: {
    display: 'flex',
    gap: '24px',
    mb: '28px',
    position: 'relative',
  },
  contentText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '38px',
    fontFamily: 'typography.fontFamily',
  },
  category: {
    position: 'absolute',
    top: 16,
    bgcolor: 'primary.secondary',
    color: 'primary',
    p: 1,
    height: 32,
    width: 126,
    borderRadius: '0px  16px 16px 0px',
    fontSize: theme => theme.typography.subtitle2.fontSize,
    fontWeight: theme => theme.typography.subtitle2.fontWeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // close: {
  //   position: 'absolute',
  //   top: '28px',
  //   right: '31px',
  //   height: '24px',
  //   width: '24px',
  //   // '&:hover': {
  //   //   cursor: 'pointer',
  //   // },
  //   // bgcolor: 'primary.secondary',
  //   // borderRadius: 50,
  //   //  margin: ' 0 12px 0 0',
  // },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    m: 0,
    p: 0,
  },
  listItem: {
    display: 'flex',
    gap: '8px',
   fontWeight: 600,
fontSize: '16px',
lineHeight: '22px',
    m: 0,
    p: 0,
  },
   listItemText: {
   fontWeight: 500,
// fontSize: '16px',
// lineHeight: '22px',
    m: 0,
    p: 0,
  },
  favorite: {
    position: 'absolute',
    top: 1,
    right: 1,
    height: 40,
    width: 40,
    bgcolor: 'primary.secondary',
    borderRadius: 50,
    margin: ' 12px 12px 16px 0',
  },
  components: {
    position: 'absolute',
    bottom: 180,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
  component: {
    bgcolor: 'primary.secondary',
    color: 'primary',
    borderRadius: 16,
    height: 28,
    width: 80,
    margin: '0 5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWraper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: ' 8px 28px',
    gap: '10px',

    position: 'absolute',
    width: '248px',
    height: '38px',
    left: '16px',
    top: '394px',

    border: '2px solid #54ADFF',
    borderRadius: '40px',
  },
  text: {
    display: 'flex',
    gap: '3px',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: { mobile: '12px', tablet: '14px', desktop: '16px' },
    lineHeight: { mobile: '16px', tablet: '19px', desktop: '22px' },
    textDecoration: 'none',
    m: 0,
    // textAlign: 'center',
    color: '#888888',
  },
  // button: {
  //   width: '256px',
  //   padding: '10px 100px',
  //   fontWeight: '500',
  //   fontSize: '24px',
  //   lineHeight: '33px',
  //   textDecoration: 'none',
  //   borderRadius: '40px',
  //   mb: '24px',
  // },
  // media: {
  //   height: 288,
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: 2,
  //   height: 168,
  // },
  // category: {
  //   position: 'absolute',
  //   top: 16,
  //   left: 1,
  //   bgcolor: 'primary.secondary',
  //   color: 'primary',
  //   p: 1,
  //   height: 32,
  //   width: 126,
  //   borderRadius: '0px  16px 16px 0px',
  //   fontSize: theme => theme.typography.subtitle2.fontSize,
  //   fontWeight: theme => theme.typography.subtitle2.fontWeight,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // favorite: {
  //   position: 'absolute',
  //   top: 1,
  //   right: 1,
  // },
  // components: {
  //   position: 'absolute',
  //   bottom: 180,
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 1,
  // },
};

export default styles;
