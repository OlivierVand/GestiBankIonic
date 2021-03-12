export interface Users {
  name: string;
  email: string;
  phone: number;
  role: string;
  status: string;
  password: string;
  agent: string;
}

export interface Agent {
  name: string;
  tel: string;
  email: string;
  role: 'AGENT';
  password: string;
}

export interface Currency {
  success: true;
  terms: 'https://currencylayer.com/terms';
  privacy: 'https://currencylayer.com/privacy';
  timestamp: number;
  source: 'USD';
  quotes: {};
}

export interface Quotes {
  quotes: { KeyValue };
}
