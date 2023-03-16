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


  const results = await Promise.all(jobs);
  const firstTenResults = results[0].items.slice(0, 10)

  // Дальнейшая логика по построению списка должна быть в отдельном блоке

  const resultsListElement = document.querySelector('.results__list');

  for (let i = 0; i < firstTenResults.length; i++) {
    const itemElement = document.createElement('li');
    itemElement.innerHTML = `<a href=${firstTenResults[i].html_url} target="_blank">${firstTenResults[i].name}</a>
                            <p>${firstTenResults[i].description}</p>`;
    resultsListElement.appendChild(itemElement);
  }

  if (!document.querySelector('li')) {
    alert('Ничего не найдено');
  }

  return firstTenResults;
};

export {getRepositories};
