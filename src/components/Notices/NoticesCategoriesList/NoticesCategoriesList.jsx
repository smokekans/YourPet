// import React from 'react';
// import {
//   Grid
// } from '@mui/material';

// import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

// function NoticesCategoriesList({ data, categoryName }) {
//   const dataArray = Array.isArray(data) ? data : [data];
//   // const dataArray = data || [];
//   console.log('NoticesCategoriesList ~ dataArray:', dataArray);

//   return (
//     <Grid container spacing={2} sx={{ flexGrow: 1,  marginLeft: 0  }}>
//       {dataArray
//         .slice()
//         .reverse()
//         .filter(
//           item =>
//             item &&
//             item.category &&
//             (item.category === categoryName ||
//               categoryName === 'owner' ||
//               categoryName === 'favorite')
//         )
//         .map(item =>  (

//           <Grid item key={item._id}
//            sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0 }}
//           >
//             <div sx={{ padding: '8px '}}>
//               <NoticeCategoryItem data={item} categoryName={categoryName} />
//             </div>
//           </Grid>

//         ))}
//     </Grid>
//   );
// }

// export default NoticesCategoriesList;

import React from 'react';
import { Grid } from '@mui/material';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

function NoticesCategoriesList({ data, categoryName }) {
  const dataArray = Array.isArray(data) ? data : [data];
  // const dataArray = data || [];
  console.log('NoticesCategoriesList ~ dataArray:', dataArray);

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, marginLeft: 0, justifyContent: 'space-between' }}>
      {dataArray
        .slice()
        .reverse()
        .filter(
          item =>
            item &&
            item.category &&
            (item.category === categoryName ||
              categoryName === 'owner' ||
              categoryName === 'favorite')
        )
        .map(item => (
          <Grid item key={item._id} sx={{ paddingLeft: 0, paddingTop: 0, paddingBottom: 0, marginBottom: '32px' }}>
            {/* <div sx={{ padding: '8px' }}> */}
              <NoticeCategoryItem data={item} categoryName={categoryName} />
            {/* </div> */}
          </Grid>
        ))}
    </Grid>
  );
}

export default NoticesCategoriesList;
