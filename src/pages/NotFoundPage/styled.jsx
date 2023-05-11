const styled = {
  image: {
    height: { mobile: '601px', tablet: '1193px', desktop: '768px' },
    backgroundImage: {
      mobile: `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/notFound/notFound-mobile@2x.png')})`,
      tablet: `url(${require('../../images/background/bg-tablet@2x.png')}), url(${require('../../images/notFound/notFound-tablet@2x.png')})`,
      desktop: `url(${require('../../images/background/bg-desktop@2x.png')}), url(${require('../../images/notFound/notFound-desktop@2x.png')})`,
    },
    backgroundRepeat: { mobile: 'no-repeat' },
    backgroundPosition: {
      mobile: 'center',
      desktop: 'center, right bottom',
    },
    backgroundSize: {
      mobile: 'contain',
      desktop: 'contain, 60% 100%',
    },
  },
  title: {
    pt: { mobile: '128px', tablet: '148px' },
    pr: { tablet: '148px', desktop: '0' },
    textAlign: { mobile: 'center' },
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: { mobile: '24px', tablet: '68px' },
    lineHeight: { mobile: '33px', tablet: '100px', desktop: '88,4px' },
  },
  button: {
    display: 'flex',
    m: 'auto',
    mt: '220px',
    width: '248px',
    borderRadius: '40px',
  },
};

export default styled;
