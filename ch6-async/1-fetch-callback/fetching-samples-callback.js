const fetch = require('node-fetch');

// 진입점
const isWebsiteAlive = (callback) => {
  fetch('http://example.com')
    .then(throwOnInvalidResponse)
    .then((resp) => resp.text())
    .then((text) => {
      processFetchSuccess(text, callback);
    })
    .catch((err) => {
      processFetchError(err, callback);
    });
};

const throwOnInvalidResponse = (resp) => {
  if (!resp.ok) {
    throw Error(resp.statusText);
  }
  return resp;
};

// 진입점
const processFetchSuccess = (text, callback) => {
  if (text.includes('illustrative')) {
    callback({ success: true, status: 'ok' });
  } else {
    callback({ success: false, status: 'missing text' });
  }
};

// 진입점
const processFetchError = (err, callback) => {
  callback({ success: false, status: err });
};

module.exports = {
  isWebsiteAlive,
  processFetchSuccess,
  processFetchError,
};
