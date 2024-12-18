이 프로젝트는 The Art of Unit Testing의 번역서의 예제 코드를 담고 있습니다.

길벗 출판사의 https://github.com/gilbutITbook/080410 깃허브에서도 확인하실 수 있습니다.

# 노드 버전 변경

모든 예제는 Node.js 16.20.0 버전을 기준으로 작성되었습니다.

`nvm`을 사용해 프로젝트에서 사용하는 16.20.0 버전을 설치합니다.

```bash
nvm install 16.20.0
```

nvm을 사용해 다음의 명령어를 실행하시면 16.20.0 버전을 사용하실 수 있습니다.

```bash
nvm use
```

만약, 위의 명령어가 실행되지 않는다면, 아래의 명령어를 실행해 보세요.

```bash
nvm use 16.20.0
```

# 테스트 코드 실행 방법

1. yarn 혹은 npm 을 사용해서 패키지를 설치합니다.

```
# yarn을 사용하는 경우
yarn

# npm을 사용하는 경우
npm install
```

설치가 제대로 이뤄지지 않는다면, 아래의 방법을 시도 후 다시 설치해 보세요.

- yarn을 이용해 설치하는 경우: package-lock.json 파일 삭제 후 `yarn` 명령어를 실행하여 패키지 설치
- npm을 이용해 설치하는 경우: yarn.lock 파일 삭제 후 `npm install` 명령어를 실행하여 패키지 설치

2. package.json 파일의 `scripts` 명령어 모음을 보시면, 각 챕터 별로 실행할 수 있도록 설정해 놓았습니다. 다음과 같이 명령어를 실행해 챕터별로 테스트 코드를 확인해 보세요.

```
# 예시) 챕터 1 테스트 코드 실행 방법
yarn ch1
npm run ch1

# 예시) 챕터 5 테스트 코드 실행 방법
yarn ch5
npm run ch5
```

혹은, 모든 테스트 코드를 실행하는 것도 가능합니다.

```
yarn test
npm run test
```
