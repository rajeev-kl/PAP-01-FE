import { isEmpty } from './generic';

export function currencyFormat(value) {
  if (isEmpty(value)) {
    return 'N/A';
  } else {

    let currency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    });

    return currency.format(value);
  }
}

export function numberFormat(value) {
  if (isEmpty(value)) {
    return 'N/A';
  } else {
    let num = new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
    });

    return num.format(value);
  }
}
