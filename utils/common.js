export const formatDate = (data) =>  {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  return new Date(data).toLocaleDateString("ru-RU", options)
}
