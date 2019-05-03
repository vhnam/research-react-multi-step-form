const generateCypressAttribute = (id) => {
  return {
    ['data-cy']: id,
  };
};

export default generateCypressAttribute;
