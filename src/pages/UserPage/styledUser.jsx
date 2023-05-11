const styled = {
    animal: {
      height: { mobile: '601px', tablet: '1193px', desktop: '768px' },
      backgroundImage: {
        mobile: `#CCCCCC`,
        tablet: `#CCCCCC`,
        desktop: `#CCCCCC`,
      },
      backgroundRepeat: { mobile: 'no-repeat' },
      backgroundPosition: {
        mobile: 'left, bottom',
        desktop: 'center, right bottom',
      },
      backgroundSize: {
        mobile: 'contain, 140% 70%',
        desktop: 'contain, 60% 100%',
      },
    },
    title: {
      p: 2,
      // pt: { mobile: '108px', tablet: '148px' },
      // pr: { tablet: '148px', desktop: '0' },
      // p: { desktop: 'auto' },
      textAlign: { mobile: 'center', tablet: 'left' },
      display: { desktop: 'flex' },
      alingItems: { desktop: 'center' },
      fontFamily: 'Manrope',
      fontWeight: '700',
      fontSize: { mobile: '32px', tablet: '68px' },
      lineHeight: { mobile: '44px', tablet: '100px', desktop: '88,4px' },
      width: { desktop: '501px' },
    },
    container:{
        display:'flex' ,
        backgroundColor:"#CCCCCC"
    },
    information: {
      width: '207px',
      height: '38px',
      left: '17px',
      top: '130px',
  
      fontFamily: 'Manrope',
  
      fontWeight: '500',
      fontSize: '28px',
      lineHeight: '38px',
    },
    pets:{ width: '207px',
    height: '38px',
    left: '17px',
    top: '130px',
ml:'300px',
    fontFamily: 'Manrope',

    fontWeight: '500',
    fontSize: '28px',
    lineHeight: '38px',},
    headlines:{
      display:'flex',
    },
    btnAdd:{
      justifyContent: 'center',
alignItems: 'center',

color:"#fff",
position: 'absolute',
width: '129px',
height: '40px',
left: '1127px',


/* Голубой (ссылки) */

background: "#54ADFF",
borderRadius: '40px',
    }
  };
  
  export default styled;
  