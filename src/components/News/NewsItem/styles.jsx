const styles = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    width: { mobile: '280px', tablet: '336px', desktop: '395px' },
    height: { mobile: '598px', tablet: '578px', desktop: '556px' },
    p: 0,
  },
  lineStyle: {
    width: { mobile: '280px', tablet: '336px', desktop: '395px' },
    height: '8px',
    background: 'linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)',
    borderRadius: '40px',
    mb: { mobile: '12px', tablet: '14px', desktop: '14px' },
  },

  card: {
    width: { mobile: '280px', tablet: '336px', desktop: '395px' },
    height: { mobile: '578px', tablet: '556px', desktop: '534px' },
    borderRadius: '20px',
    background: '#FFFFFF',
    boxShadow: '3px 8px 14px rgba(136, 198, 253, 0.19)',
  },

  img: {
    width: { mobile: '280px', tablet: '336px', desktop: '395px' },
    height: '252px',
    mb: '16px',
    objectFit: 'cover',
  },
  news: {
    width: { mobile: '280px', tablet: '336px', desktop: '395px' },
    height: { mobile: '310px', tablet: '288px', desktop: '266px' },
    p: '12px',
    pt: 0,
  },
  description: {
    height: { mobile: '236px', tablet: '214px', desktop: '192px' },
    mb: '40px',
  },
  title: {
    height: '66px',
    fontWeight: '700px',
    fontSize: '24px',
    color: 'primary',
    lineHeight: '33px',
    mb: '16px',
    overflow: 'hidden',
  },
  text: {
    height: { mobile: '154px', tablet: '132px', desktop: '110px' },
    lineHeight: '22px',
    fontWeight: '400px',
    fontSize: '16px',
    color: 'primary',
    overflow: 'hidden',
  },
  dataAndRead: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  dateNews: {
    fontSize: '16px',
    fontWeight: '400px',
    lineHeight: '22px',
    color: '#888888',
  },

  linkNews: {
    lineHeight: '22px',
    fontWeight: '500px',
    fontSize: '16px',
    textDecoration: 'none',
    color: '#54ADFF',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default styles;
