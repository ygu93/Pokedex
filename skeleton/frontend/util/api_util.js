export const fetchAllPokemon = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/pokemon',
    success,
    error
  });
};

export const fetchPokemon = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success,
    error
  });
};

export const createPokemon = (success, error) => {
  $.ajax({
    method: 'POST',
    url: "api/pokemon",
    success,
    error
  });
};
