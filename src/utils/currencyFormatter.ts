export const getCurrencyFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat(
    'es-ES',
    {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    },
  );
  return formatter.format(value);
}