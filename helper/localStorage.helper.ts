



export function getToken() {

  if (process.client) {
    return localStorage.getItem('token')
  }
}

export function setToken(token: string): void {
  localStorage.setItem('token', token)
}

export function clearToken(): void {
  localStorage.removeItem('token')
}