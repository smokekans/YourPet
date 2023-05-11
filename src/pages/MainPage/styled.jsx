// '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)': `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/animal/animal-mobile@2x.png')})`,
const styled = {
  animal: {
    height: { mobile: '601px', tablet: '1193px', desktop: '768px' },
    backgroundImage: {
      mobile: `url(${require('../../images/background/bg-mobile@2x.png')}), url(${require('../../images/animal/animal-mobile@2x.png')})`,
      tablet: `url(${require('../../images/background/bg-tablet@2x.png')}), url(${require('../../images/animal/animal-tablet@2x.png')})`,
      desktop: `url(${require('../../images/background/bg-desktop@2x.png')}), url(${require('../../images/animal/animal-desktop@2x.png')})`,
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
};

export default styled;
