const samples = require('./fetching-samples-before');

jest.setTimeout(10000);

test('NETWORK REQUIRED (callback): correct content, true', (done) => {
  samples.isWebsiteAliveWithCallback((result) => {
    expect(result.success).toBe(true);
    expect(result.status).toBe('ok');
    done();
  });
});

test('NETWORK REQUIRED (await): correct content, true', (done) => {
  samples.isWebsiteAliveWithAsyncAwait().then((result) => {
    expect(result.success).toBe(true);
    expect(result.status).toBe('ok');
    done();
  });
});

test('NETWORK REQUIRED2 (await): correct content, true', async () => {
  const result = await samples.isWebsiteAliveWithAsyncAwait();
  expect(result.success).toBe(true);
  expect(result.status).toBe('ok');
});
