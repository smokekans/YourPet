const styles = {
  bgPaws: {
    height: '100vh',
    backgroundImage: {
      mobile: `url(${require('../../images/background/bg-mobile@2x.png')})`,
      tablet: `url(${require('../../images/background/bg-tablet@1x.png')})`,
      desktop: `url(${require('../../images/background/bg-desktop@2x.png')})`,
    },
    backgroundRepeat: { mobile: 'no-repeat', tablet: 'repeat', desktop: 'no-repeat' },
    backgroundPosition: 'top',
    backgroundSize: 'contain',
  },
};

export default styles;
