import React from 'react';
import { List } from '@mui/material';

import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

function NoticesCategoriesList({ data, categoryName }) {
  const dataArray = Array.isArray(data) ? data : [data];
  // const dataArray = data || [];
  console.log('NoticesCategoriesList ~ dataArray:', dataArray);

  return (
    <List
      container
      spacing={2}
      sx={{
        display: 'flex',
        alingItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        // p: 0,
        gap: { mobile: '20px', tablet: '32px' },
      }}
    >
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
          <li item key={item._id}>
            {/* <div sx={{ padding: '8px' }}> */}
            <NoticeCategoryItem data={item} categoryName={categoryName} />
            {/* </div> */}
          </li>
        ))}
    </List>
  );
}

export default NoticesCategoriesList;
