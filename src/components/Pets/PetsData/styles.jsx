const styles = {
  container: {
    width: '821px',
    marginLeft: '20px',
  },
  cardPets: {
    width: '821px',
    height: '212px',
    display: 'flex',
    flexDirection: 'colum',
    mt: '24px',
    /* Белый */

    background: '#FFFFFF',
    /* Shadow default */

    boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    borderRadius: '40px',
  },

  contInfo: {
    ml: '100px',
  },
  infoPets: {
    fonFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '22px',
    /* or 138% */
    mt: '7px',
    ml: '40px',
    display: 'flex',
    alignItems: 'center',
    letterSpacing: '0.04em',

    /* Черный */

    color: '#111111',
  },
  image: {
    width: '161px',
    height: '161px',
    top: '20px',
    left: '20px',

    borderRadius: '40px',
  },
  btnTrash: {
    width: '24px',
    height: '24px',
    top: '12px',
    marginRight: '12px',
  },
};

export default styles;
