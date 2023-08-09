import CryptoJS from 'crypto-js'

function base64url(source: CryptoJS.lib.WordArray) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source)

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '')

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-')
    encodedSource = encodedSource.replace(/\//g, '_')

    return encodedSource
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getJwtToken = (data: any) => {
    const header = {
        alg: 'HS256',
        typ: 'JWT',
    }

    const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header))
    const encodedHeader = base64url(stringifiedHeader)

    const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data))
    const encodedData = base64url(stringifiedData)

    const token = encodedHeader + '.' + encodedData

    const secret = 'My very confidential secret!'

    const signature = base64url(CryptoJS.HmacSHA256(token, secret))

    return token + '.' + signature
}
