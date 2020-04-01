

const getFormDataPromise = (dispatchFormData) =>
  new Promise((resolve, reject) => {
    resolve(dispatchFormData)
    reject('Sorry but we could not submit the form. Please try again. In worst case scenario reload the page and try again')
  })

export default getFormDataPromise