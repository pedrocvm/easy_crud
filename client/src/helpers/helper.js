const maskPhone = (event) => {
  let value = event.target.value;

  const mask = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');

    return value;
  };

  event.target.value = mask(value);
};

const mask = (value) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');

  return value;
};

const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const formatNumber = (value) => {
  if (value) {
    return formatter.format(value);
  } else {
    return '';
  }
};

export { maskPhone, mask, formatNumber };
