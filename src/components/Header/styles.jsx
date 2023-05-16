const styles = {
  header: {
    bgcolor: 'background.default',
  },
  container: {
    p: {
      mobile: '20px 20px 0 20px',
      tablet: '24px 32px 0 32px',
      desktop: '20px 16px 0 16px',
    },
  },
  headerList: {
    display: 'flex',
    // justifyContent: 'space-between',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    width: 1,
  },
};
// export default styles;
// function Navigation() {
//   const { isMobile } = useMatchMedia();
//   const { isTablet } = useMatchMedia();
//   const { isDesktop } = useMatchMedia();
//   const accessToken = useSelector(getAccessToken);

//   return (
//     <>
//       {isDesktop && (
//         <>
//           <Nav />
//           {accessToken ? <UserNavigation /> : <AuthNavigation />}
//         </>
//       )}
//       {isTablet && (
//         <>
//           {accessToken ? <UserNavigation /> : <AuthNavigation />}
//           <BurgerMenu />
//         </>
//       )}
//       {isMobile && accessToken && <UserNavigation />}
//       {isMobile && <BurgerMenu />}
//     </>
//   );
// }
