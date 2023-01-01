export const setFilter = value => {
  return {
    type: 'filters/filter',
    payload: value,
  };
};
