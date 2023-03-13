import { isEmpty } from './generic';

export default function currencyFormate(value) {
  if (isEmpty(value)) {
    return 'N/A';
  } else {

    let currency = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    });

    return currency.format(value);
  }
}