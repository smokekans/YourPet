const styles = {
  bgPaws: {
    height: '100vh',
    width: '100vh',
    backgroundImage: {
      mobile: `url(${require('../../images/background/bg-mobile@2x.png')})`,
      tablet: `url(${require('../../images/background/bg-tablet@2x.png')})`,
      desktop: `url(${require('../../images/background/bg-desktop@2x.png')})`,
    },
    backgroundRepeat: { mobile: 'no-repeat' },
    backgroundPosition: {
      mobile: 'left, top',
      tablet: 'left, top -450px',
      desktop: 'center, right -115px',
    },
    backgroundSize: {
      mobile: 'cover, 140%',
      tablet: 'cover, 130%',
      desktop: 'cover, 70%',
    },
  },
};

export default styles;
