import React from 'react';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

function NoticesCategoriesList({ data, categoryName }) {
  const dataArray = Array.isArray(data) ? data : [data];
  console.log(dataArray);
 
  return <div>
    {
      dataArray
      .slice()  
      .reverse()
      .filter(
        item =>
          item && item.category && (item.category === categoryName || categoryName === 'owner' || categoryName === 'favorite')
      )
      .map(item => (
        <NoticeCategoryItem key={item._id} data={item} categoryName={categoryName}/>
      ))
    }
  </div>;
}


// function NoticesCategoriesList({ data, categoryName }) {
//   const dataArray = Object.values(data)
//     console.log(Array.isArray(data));
//   return <div>
//     {
//       // (data || [])
//       dataArray
     
//       .reverse()
//       .filter(
//         item =>
//           item.category === categoryName ||
//           categoryName === 'owner' ||
//           categoryName === 'favorite'
//     )
//       .map(item => (
//       <NoticeCategoryItem key={item._id} data={item} categoryName={categoryName}/>
//     ))}
//   </div>;
// }

// function NoticesCategoriesList({data, categoryName}) {
//   const dataArray = Array.isArray(data) ? data : Object.values(data);
//   console.log(data)
//   return (
//     <div>
//       {dataArray.reverse()
//         // .filter(
//         //   item =>
//         //     item.category === categoryName ||
//         //     categoryName === 'owner' ||
//         //     categoryName === 'favorite'
//         // )
//         .map(item => (
//           <NoticeCategoryItem key={item._id} data={item} categoryName={categoryName} />
//         ))}
//     </div>
//   );
// }

export default NoticesCategoriesList;
