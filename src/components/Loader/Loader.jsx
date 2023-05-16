import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Watch
      height="250"
      width="250"
      radius="48"
      color="accent.main"
      ariaLabel="watch-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      strokeWidth={1}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
