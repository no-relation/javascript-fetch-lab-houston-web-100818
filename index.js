function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}`, {
    method: 'POST',
    headers: {
      Authorization: getToken()
    }
  }).then( console.log )
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '28487438de51f773f54ca88273488de3a4e8ca58'
}
