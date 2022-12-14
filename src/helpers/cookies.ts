import cookie from 'react-cookies';

export function getCookie(key: string): string {
  const cookiee =  cookie.load(key);
  return cookiee;
}

export function setCookie(key: string, value: string, options = {}): void {
  cookie.save(key, value, options);
}

export function removeCookie(key: string, options = {}): void {
  cookie.remove(key, options);
}
