'use strict';

// 실행 모듈 (Suite Under Test - SUT)
const { sum, totalSoFar } = require('./number-parser2');

/**
 * 값 비교를 위한 검증 함수
 * @param actual (any type)
 * @param expected (any type)
 */
const assertEquals = (expected, actual) => {
  if (actual !== expected) {
    throw new Error(`Expected ${expected} but was ${actual}`);
  }
};

/**
 * 일종의 유틸리티 함수
 * 함수 이름을 'check'로 만들어 다른 프레임워크와 헷갈리지 않도록 했다.
 * 그리고 try-catch 구문을 사용해 결과의 형태가 비슷하도록 만들었다.
 * @param {string} name
 * @param {function} implementation
 */
const check = (name, implementation) => {
  try {
    implementation();
    console.log(`${name} passed`);
  } catch (e) {
    console.error(`${name} FAILED`, e.stack);
  }
};

/**
 * 테스트 코드
 * 실행하려면: "node ch1-basics/custom-test-phase3.js
 */
check('totalSoFar by Default is 0', () => {
  assertEquals(0, totalSoFar());
});
check('totalSoFar after summing is bigger', () => {
  sum('1,2');
  sum('1,2');
  assertEquals(6, totalSoFar());
});
