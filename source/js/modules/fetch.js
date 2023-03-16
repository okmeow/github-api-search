async function getRepositories(queryString) {
  let jobs = [];

  let job = fetch(`https://api.github.com/search/repositories?q=${queryString}`).then(
    successResponse => {
      if (successResponse.status != 200) {
        return null;
      } else {
        return successResponse.json();
      }
    },
    failResponse => {
      return null;
    }
  );

  jobs.push(job);


  let results = await Promise.all(jobs);

  console.log(results[0].items.slice(0, 10));

  return results;
};

export {getRepositories};
