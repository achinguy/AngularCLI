export class User {
  id?: string;
  accountId?: string;
  account?: Account;
  email?: string;
  password?: string;
  role?: Role;
  confirmed?: boolean;
}

export type Id = string | number | undefined;
export type Role = 'OWNER' | 'READER' | 'ADMIN';

interface Config {
    [key: string]: string;
    auth: 'session' | 'token';
  }
  
  // Session auth needs to use the same origin anyway
  export const config: Config = {
    apiUrl: '/api',
    adminUrl: '/admin',
    authUrl: 'http://localhost:8081/api/auth',
    auth: 'token'
  };

  export class Token {
    constructor (public jwt: string) {}
  }
  