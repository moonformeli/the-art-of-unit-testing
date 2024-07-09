import { ILogger } from './interfaces/logger';

// 이 클래스는 파일이나 네트워크에 의존성이 있을 수도 있다.
export class SimpleLogger implements ILogger {
  info(text: string) {}
}
