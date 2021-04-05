const postStrategy = (strategy) => {
  const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(strategy)
    }
  return fetch(`https://unstuck-rubberduck-api.herokuapp.com/api/v1/submissions`, post)
    .then(res => {if (!res.ok) {
        console.log(res.status);
      } else {
        return res.json();
      }})
    }

export default postStrategy;
