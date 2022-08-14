import { fetchExampleTest, upper } from './http';

test('fetchExampleTest', async () => {
  const text = await fetchExampleTest();

  expect(text).toMatch('Example Domain');
});

test('upper', async () => {
  expect(upper('abc')).toBe('ABC'));
