const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 456,
    width: 288,
    position: 'relative',
  },
  media: {
    height: 288,
  },
  content: {
    flexGrow: 1,
    padding: 2,
    height: 168,
  },
  category: {
    position: 'absolute',
    top: 16,
    left: 1,
    bgcolor: 'primary.secondary',
    color: 'primary',
    p: 1,
    height: 32,
    width: 126,
    borderRadius: '0px  16px 16px 0px',
    fontSize: theme => theme.typography.subtitle2.fontSize,
    fontWeight: theme => theme.typography.subtitle2.fontWeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favorite: {
    position: 'absolute',
    top: 1,
    right: 1,
  },
  components: {
    position: 'absolute',
    bottom: 180,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 1,
  },
  component: {
    bgcolor: 'primary.secondary',
    color: 'primary',
    borderRadius: 16,
    height: 28,
    width: 80,
    margin: '0 5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default styles;
