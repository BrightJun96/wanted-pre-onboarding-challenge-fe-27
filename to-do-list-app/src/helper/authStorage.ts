
// 토큰 키
export const TOKEN_KEY = 'token';

// 스토리지 클래스
export class AuthStorage {
  constructor(private storage: Storage) {
    this.storage = storage;
  }
    // 토큰 가져오기
    getToken(): string {
          this.exceptionToken();
        return this.storage.getItem(TOKEN_KEY) as string    ;
    }

    // 토큰 설정
    setToken(token: string) {
        this.storage.setItem(TOKEN_KEY, token);
    }
    // 토큰 삭제
    deleteToken() {
        this.storage.removeItem(TOKEN_KEY);
    }
    // 토큰 예외처리
    exceptionToken(){
        if(!this.storage.getItem(TOKEN_KEY)){
            throw new Error('토큰이 존재하지 않습니다.');
        }
    }
}

// 인스턴스
export const authStorage = new AuthStorage(localStorage);

