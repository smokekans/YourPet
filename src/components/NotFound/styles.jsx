const styles = {
  imageNF: {
    height: '100vh',
    backgroundImage: {
      mobile: `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/notFound/notFound-mobile@2x.png')})`,
      tablet: `url(${require('../../images/background/bg-tablet@2x.png')}), url(${require('../../images/notFound/notFound-tablet@2x.png')})`,
      desktop: `url(${require('../../images/background/bg-desktop@2x.png')}), url(${require('../../images/notFound/notFound-desktop@2x.png')})`,
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: { mobile: 'contain', tablet: 'contain, 75%' },
  },
  imageNFN: {
    height: '100vh',
    backgroundImage: {
      mobile: `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/notFound/notFoundNotices-mobile@2x.png')})`,
      tablet: `url(${require('../../images/background/bg-tablet@2x.png')}), url(${require('../../images/notFound/notFoundNotices-tablet@2x.png')})`,
      desktop: `url(${require('../../images/background/bg-desktop@2x.png')}), url(${require('../../images/notFound/notFoundNotices-desktop@2x.png')})`,
    },
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  title: {
    pt: { mobile: '100px', tablet: '0' },
    textAlign: { mobile: 'center' },
    fontFamily: 'Manrope',
    fontWeight: { tablet: '600' },
    fontSize: { mobile: '24px', tablet: '32px' },
    lineHeight: { mobile: '33px', tablet: '42px' },
  },
  button: {
    display: 'flex',
    m: 'auto',
    mt: { mobile: '400px', tablet: '550px', desktop: '550px' },
    width: '248px',
    borderRadius: '40px',
  },
};

export default styles;
