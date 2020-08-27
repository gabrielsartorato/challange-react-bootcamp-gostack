const formatDate = (date: Date): string => {
  const arrayDate = String(date).split('T');
  const splitedDate = arrayDate[0].split('-');
  const returnDate = `${splitedDate[2]}/${splitedDate[1]}/${splitedDate[0]}`;

  return returnDate;
};

export default formatDate;
