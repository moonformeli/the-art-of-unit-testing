/**
 * @jest-environment jsdom
 */
// (위는 window 이벤트를 위한 설정입니다)
const fs = require('fs');
const path = require('path');
require('./index-helper.js');

const loadHtml = (fileRelativePath) => {
  const filePath = path.join(__dirname, 'index.html');
  const innerHTML = fs.readFileSync(filePath);
  document.documentElement.innerHTML = innerHTML;
};

const loadHtmlAndGetUIElements = () => {
  loadHtml('index.html');
  const button = document.getElementById('myButton');
  const resultDiv = document.getElementById('myResult');
  return { window, button, resultDiv };
};

describe('index helper', () => {
  test('vanilla button click triggers change in result div', () => {
    const { window, button, resultDiv } = loadHtmlAndGetUIElements();
    window.dispatchEvent(new Event('load'));

    button.click();

    expect(resultDiv.innerText).toBe('Clicked!');
  });
});
