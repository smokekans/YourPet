const styles = {

boxContainer:{
  display:{ mobile: '', tablet: 'flex', desktop: 'block' },
  flexDirection:{ mobile: '', tablet: 'row-reverse', desktop: '' },
  ml:{ mobile: '', tablet: '20px', desktop: '' },
  justifyContent: { mobile: '', tablet: 'space-around', desktop: '' },
},
  container: {
    width: { mobile: '280px', tablet: '704px', desktop: '395px' }, 
    height: { mobile: '517px', tablet: '268px', desktop: '520px' }, 

  
    ml: { mobile: '0', tablet: '16px', desktop: '16px' },
    marginRight: '0',
    background: '#FFFFFF',
mb:{ mobile: '100px', tablet: '90px', desktop: '' },
    boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
    borderRadius: '40px',
  },

  images: {
    width: '182px',
    height: '182px',
mt:"20px",
ml:"auto",
mr:"auto",
mb:"0",
    borderRadius: '40px',
  },
  input: {
    opacity: '0',
    width: '0',
    height: '0',
    overflow: 'hidden',
    padding: '0',
    margin: '0',
    display:'none',
    
  },
  editPhoto:{
    background:'none',
    width: '125px',
    height: '24px',
    boxShadow:'none',
    color: "#111111",
 p:'0',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '22px',
    alignItems: 'center',
    letterSpacing: '0.04em',
    textTransform:"none",
   mt:'14px',
   ml:'auto',
   mr:'auto',
   },
   editPhotoIcon:{
   
    
   },
};

export default styles;
