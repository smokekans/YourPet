import theme from 'theme';

const styles = {
  container: {
    mr: 'auto',
    ml: 'auto',
    width: { mobile: '320px', tablet: '768px', desktop: '1248px' },
    pr: { mobile: '20px', tablet: '32px', desktop: '16px' },
    pl: { mobile: '20px', tablet: '32px', desktop: '16px' },
},
  navigationContainer: {
    marginTop: '43px',
    marginBottom: '42px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',
    [theme.breakpoints.down(1267)]: {
      marginTop: '40px',
      marginBottom: '87px',
    },
    [theme.breakpoints.down(767)]: {
      marginTop: '20px',
      marginBottom: '24px',
    },
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '12px',
    flexWrap: 'wrap',
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    height: '35px',
    fontSize: '14px',
    borderRadius: '40px',
    background: theme.palette.primary.secondary,
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    padding: '8px 16px',
    textTransform: 'inherit',
      '&:hover': {
      backgroundColor: '#54ADFF',
      color: '#FDF7F2',
   
    },
    [theme.breakpoints.down(767)]: {
      fontSize: '12px',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '&.active': {
      background: theme.palette.primary.main,
      color: theme.palette.text.light,
    },
  },
  addButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down(767)]: {
      order: -1,
      margin: '0px',
      marginTop: '-10px',
    },
  },
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'fit-content',
    height: '40px',
    borderRadius: '40px',
    background: theme.palette.primary.main,
    color: theme.palette.text.light,
    textDecoration: 'none',
    padding: '0 16px',
    textTransform: 'inherit',
    '&:hover': {
      backgroundColor: '#FDF7F2',
      color: '#54ADFF',
      border: '2px solid #54ADFF',
      borderRadius: '40px',
    },
    '&:hover svg': {
      stroke: '#54ADFF',
    },
  },
  
    addButtonMobile: {
      zIndex: 10,
      position: 'fixed',
      right: '16px',
      bottom: '12%',
      border: 'none',
      outline: 'none',
      width: '80px',
      height: '80px',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    borderRadius: '50%',
      textTransform: 'inherit',
      background: theme.palette.primary.main,
      color: theme.palette.text.light,
      '&:hover': {
        background: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
        color: theme.palette.text.light,
    },
    },
  
  icon: {
    margin: '5px',
    '&:hover': {
      stroke: '#54ADFF',
    },

    [theme.breakpoints.down(767)]: {
      marginTop: '-25px',
      width: '16px',
      height: '16px',
    },
  },
};

export default styles;
