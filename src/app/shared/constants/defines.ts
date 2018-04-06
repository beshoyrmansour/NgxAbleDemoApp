export const CONFIG = {
    Email: 'email',
    Pdf: 'pdf',
    CLIENT_ID: 'TKzXuMnqy4GOIuqIug62tIkTvBwik3Zy',
}
export const Validation = {
    NIE:
      '^[xyzXYZ]{1}[0-9]{7}[trwagmyfpdxbnjzsqvhlcketTRWAGMYFPDXBNJZSQVHLCKET]{1}$',
    NIF: '^[0-9]{8}[trwagmyfpdxbnjzsqvhlcketTRWAGMYFPDXBNJZSQVHLCKET]{1}$',
    Passport: '',
    Numbers: /\d/gi,
    SpecialChars: /\W/gi,
    Char: /\D/gi,
    AuthorizedPassword: '^[0-9]{6,6}$',
    ConsumerPassword: '^[a-zA-Z0-9!@#$%^&*)(+=._-]{8,18}$',
    currentPasswordPattern: '^[a-zA-Z0-9\\s!@#$%^&*)(+=._-]{8,18}$',
    MobileNumber: '^(6|7|9)([0-9]{8})$',
    Email: '^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$',
    unlockImei: '^[0-9]{15}$',
    euroCurrency: '^[0-9]*(\.|\,)[0-9]{1,2}$',
    CreditCardNumber: '^(4|5)([0-9]{15})$',
    HolderName: '[^0-9\n]{1,100}',
    DayAndMonth: '^[0-9]*$',
    CCV: '^[0-9]{3}',
    numberOnly: '^[0-9]*$',
    msisdn: '^[6-7][0-9]{8}$'
  };
export const AppInfo ={
    title:'Ngx Able Demo App'
}