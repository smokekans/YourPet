// Дії для параметрів пошуку
export const setAgeFilter = age => ({
  type: 'SET_AGE_FILTER',
  payload: age,
});

export const setGenderFilter = gender => ({
  type: 'SET_GENDER_FILTER',
  payload: gender,
});
