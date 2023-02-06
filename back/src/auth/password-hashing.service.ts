import { Injectable } from '@nestjs/common';

// TODO: dummy password hashing
// real implementation should use one of https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
@Injectable()
export class PasswordHashingService {
  async hash(password: string) {
    return password;
  }

  async verify(hashed: string, password: string) {
    return hashed === password;
  }
}
