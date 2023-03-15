import { isEmpty } from './generic';

export default function currencyFormate(value) {
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