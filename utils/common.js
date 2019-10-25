export const formatDate = (data) =>  {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(data).toLocaleDateString("ru-RU", options)
}

export const showNumbers = (num) =>  {
  return !!num && num.replace(/[^0-9]/g, '')
}
