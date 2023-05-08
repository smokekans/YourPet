import React from 'react';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';


function NoticesCategoriesList({data,route}) {
  return <div>
    {[...data].reverse()
      .filter(
        item =>
          item.category === route ||
          route === 'owner' ||
          route === 'favorite'
    )
      .map(item => (
      <NoticeCategoryItem key={item._id} data={item} route={route}/>
    ))}
  </div>;
}

// function NoticesCategoriesList({data, route}) {
//   const dataArray = Array.isArray(data) ? data : Object.values(data);
//   console.log(data)
//   return (
//     <div>
//       {dataArray.reverse()
//         .filter(
//           item =>
//             item.category === route ||
//             route === 'owner' ||
//             route === 'favorite'
//         )
//         ?.map(item => (
//           <NoticeCategoryItem key={item._id} data={item} route={route} />
//         ))}
//     </div>
//   );
// }

export default NoticesCategoriesList;
