const styles = {
  container: {
    width: { mobile: '280px', tablet: '703px', desktop: '821px' },
    marginLeft: { mobile: '0', tablet: '-30px', desktop: '20px' },
    pl: { mobile: '0', tablet: '', desktop: '' },
  },
  cssContainer: { 
    ml: { mobile: '0', tablet: '', desktop: '' },
   mr: { mobile: '0', tablet: '', desktop: '' },
    pl: { mobile: '0', tablet: '', desktop: '' },
     pr: { mobile: '0', tablet: '', desktop: '' } },
  cardPets: {
    width: { mobile: '280px', tablet: '703px', desktop: '821px' },
    height: { mobile: '', tablet: '256px', desktop: '221px' },
    display: { mobile: 'block', tablet: 'flex', desktop: 'flex' },
    flexDirection: 'colum',
    mt: '24px',
    marginLeft: { mobile: '0', tablet: '', desktop: '' },
    pl: { mobile: '0', tablet: '', desktop: '' },
    background: '#FFFFFF',
    /* Shadow default */

    boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    borderRadius: '40px',
  },

  contInfo: {
    ml: '100px',
    mb: '0',
    mt: '12px',
  },
  pets: {
    // width: '207px',
    height: '38px',
    left: '17px',

    mt: '-60px',
    ml: { mobile: '0', tablet: '50px', desktop: '50px' },
    fontFamily: 'Manrope',

    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '38px',
  },
  infoPets: {
    fonFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
    /* or 138% */
    mt: '-9px',
    ml: '40px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.04em',

    /* Черный */

    color: '#111111',
  },
  btnAdd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px 20px',
    gap: '8px',
    position: 'absolute',
    width: '129px',
    height: '40px',
    left: { mobile: '50%', tablet: '550px', desktop: '1127px' },
    top: { mobile: '', tablet: '480px', desktop: '128px' },
    background: '#54ADFF',
    borderRadius: '40px',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.04em',
    textTransform: 'none',
    color: '#FEF9F9',
    '&:hover': {
      backgroundColor: '#FEF9F9',
      color:'#54ADFF',
      border: '1px solid #54ADFF',
    },
  },
  image: {
    width: '161px',
    height: '161px',
    top: '20px',
    left: '20px',
    ml: { mobile: '45px', tablet: '', desktop: '' },
   mb:{ mobile: '20px', tablet: '', desktop: '' },
    borderRadius: '40px',
  },
  btnTrash: {
    width: '24px',
    height: '24px',
    padding:'0',
    mt: { mobile: '-365px', tablet: '20px', desktop: '20px' },
    mr: { mobile: '', tablet: '20px', desktop: '40px' },
    ml:{ mobile: '240px', tablet: '0', desktop: '0' },
    'svg':{
      stroke:'#54ADFF',
    },
    '&:hover svg': {
      stroke: '#FFC107',
    },
  },
  icon:{
    stroke:'#0a0a0a',
    
    '&:hover ': {
      stroke: '#0a0a0a',
    },
  },
};

export default styles;
