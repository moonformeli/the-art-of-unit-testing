/**
 * @jest-environment jsdom
 */
const path = require('path');
const fs = require('fs');
require('./index-helper.js');

const { fireEvent, findByText, getByText } = require('@testing-library/dom'); // 사용할 라이브러리 API를 가져오기

const loadHtml = (fileRelativePath) => {
  // 라이브러리 API는 대부분 문서 요소를 기반으로 작업을 처리한다
  const filePath = path.join(__dirname, 'index.html');
  const innerHTML = fs.readFileSync(filePath);
  document.documentElement.innerHTML = innerHTML;
  return document.documentElement;
};

const loadHtmlAndGetUIElements = () => {
  const docElem = loadHtml('index.html');
  const button = getByText(docElem, 'Click Me!', { exact: false });
  return { window, docElem, button };
};

describe('index helper', () => {
  test('dom test lib button click triggers change in page', () => {
    const { window, docElem, button } = loadHtmlAndGetUIElements();
    fireEvent.load(window); // 라이브러리의 fireEvent API를 사용하여 이벤트 디스패치를 간소화함

    fireEvent.click(button);

    // true가 될 때까지 기다리거나 1초 내에 타임아웃
    expect(findByText(docElem, 'Clicked', { exact: false })).toBeTruthy();
  });
});
