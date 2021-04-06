const fetchSolution = async (endpoint: string) => {
    const result = await fetch(endpoint)
    return result;
  }

export default fetchSolution;
