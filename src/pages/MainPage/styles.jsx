// '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)': `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/animal/animal-mobile@2x.png')})`,
const styles = {
  animal: {
    height: '100vh',
    backgroundImage: {
      mobile: `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/animal/animal-mobile@2x.png')})`,
      tablet: `url(${require('../../images/background/bg-tablet@2x.png')}), url(${require('../../images/animal/animal-tablet@2x.png')})`,
      desktop: `url(${require('../../images/background/bg-desktop@2x.png')}), url(${require('../../images/animal/animal-desktop@2x.png')})`,
    },
    backgroundRepeat: { mobile: 'no-repeat' },
    backgroundPosition: {
      mobile: 'left, bottom',
      tablet: 'left, bottom 450px',
      desktop: 'center, right bottom -150px',
    },
    backgroundSize: {
      mobile: 'cover, 140%',
      tablet: 'cover, 130%',
      desktop: 'cover, 70%',
    },
  },
  title: {
    pt: { mobile: '52px', tablet: '92px' },
    pr: { tablet: '148px', desktop: '0' },
    p: { desktop: 'auto' },
    textAlign: { mobile: 'center', tablet: 'left' },
    display: { desktop: 'flex' },
    alingItems: { desktop: 'center' },
    fontFamily: 'Manrope',
    fontWeight: '700',
    fontSize: { mobile: '32px', tablet: '68px' },
    lineHeight: { mobile: '44px', tablet: '100px', desktop: '88,4px' },
    width: { desktop: '501px' },
  },
};

export default styles;
