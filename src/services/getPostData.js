export default (url) => {
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      if (res.ok) {
        res.json().then(data => {
          resolve(data.list)
        })
      } else {
        reject()
      }
    })
  })
}
