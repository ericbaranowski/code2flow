export const encode = (code: string) =>
  encodeURIComponent(Buffer.from(code).toString('base64'))

export const decode = (code: string) =>
  Buffer.from(decodeURIComponent(code), 'base64').toString()
