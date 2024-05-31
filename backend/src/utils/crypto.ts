import { createHash } from 'crypto'
import { config } from 'dotenv'
config()

//đoạn code này lấy từ trang chủ của SHA256
function sha256(content: string) {
  return createHash('sha256').update(content).digest('hex')
}

//hàm mã hóa password kèm 1 mật khẩu bí mật do mình tạo ra
export function hashPassword(password: string) {
  return sha256(password + process.env.PASSWORD_SECRET)
}

export function hashToSixDigit(token: string) {
  // Bước 1: Mã hóa chuỗi thành SHA-256
  // const sha256Hash = crypto.createHash('sha256').update(inputString).digest('hex');

  // Bước 2: Chuyển đổi mã băm thành số nguyên lớn (big integer)
  const bigInt = BigInt('0x' + token)

  // Bước 3: Chuyển đổi số nguyên lớn thành chuỗi và lấy 6 ký tự đầu tiên
  const sixDigitString = bigInt.toString().slice(0, 6)

  return sixDigitString
}
