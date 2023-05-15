import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { isPets } from '../../../redux/user/userSelectors';
import { Container } from '@mui/material';
import { Typography,Button } from '@mui/material';
import styled from './styledPets';
import { Avatar } from '@mui/material';
import { ReactComponent as Trash } from '../../../images/icons/trash.svg';
import { deletePets } from 'redux/user/userOperations';
import { getCurrentUser } from 'redux/user/userOperations';

function PetsData() {
  const Pets = useSelector(isPets);
const dispatch = useDispatch()

console.log(Pets)

 function delet (id){
  console.log(id)
 
 const peeet=  Pets.filter((item) => item._id !==id);
  
  console.log(peeet)
 dispatch(deletePets(id)).unwrap()
 
 dispatch(getCurrentUser())
  
  
}
  return (
    <Container sx={styled.container}>
     
     
      {!Pets ? (
        <div></div>
      ) : (
        <Container>
        
          <Typography variant="div">
            {Pets.map(({ _id, birthday, comments, image, name, breed }) => {
              return (
                <Typography  sx={styled.cardPets}variant="div" key={_id+7}>
                  <Avatar variant="img" src={image} alt="image" sx={styled.image} height="161" key={_id+1}/>
                  <Typography  variant="div"key={_id}>
                    
                    <Typography sx={styled.contInfo} variant="div"key={_id+2}>
                      <Typography sx={styled.infoPets} variant="p"  key={_id+4}>Data of dirth: {birthday}</Typography><br/>
                      <Typography sx={styled.infoPets} variant="p"  key={_id+3}>Name: {name}</Typography><br/>
                      <Typography sx={styled.infoPets} variant="p" key={_id+5}>Breed:{breed}</Typography><br/>
                      <Typography sx={styled.infoPets} variant="p" key={_id+6}>Comments: {comments}</Typography><br/>
                    </Typography>
                  </Typography>
                  <Button sx={styled.btnTrash}startIcon={<Trash  />} onClick={()=>delet(_id)}></Button>
                </Typography>
              );
            })}
          </Typography>
        </Container>
      )}
    </Container>
  );
}

export default PetsData;
