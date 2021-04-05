const fetchSolution = async (endpoint) => {
    const result = await fetch(endpoint)
    return result;
  }

export default fetchSolution;
