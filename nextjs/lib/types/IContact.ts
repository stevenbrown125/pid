export default interface IContact {
    name: string,
    phone: string,
    email: string,
    message: string,
    hasConsented: boolean,
    refId?:string,
}

export interface IContactError  {
  name?: string | null
  phone?: string | null
  email?: string| null
  message?: string| null
  hasConsented?: string| null
}