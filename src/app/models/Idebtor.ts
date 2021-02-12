export interface Idebtor {
     Credentials: Credentials;
    addressbook: Addressbook[];
    debtors: Debtor[];
  }
  
  export interface Debtor {
    id: string;
    name: string;
    pending: string;
    duedays: number;
  }
  
  export interface Addressbook {
    id: string;
    address: Address;
    contact: Contact;
  }
  
  export interface Contact {
    phone: string;
    mobile: string;
  }
  
  export interface Address {
    city: string;
    state: string;
    pincode: string;
    country: string;
  }
  
  export interface Credentials {
    username: string;
    password: string;
  }