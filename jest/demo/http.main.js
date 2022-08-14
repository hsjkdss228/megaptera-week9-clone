/* eslint-disable no-console */
import { fetchExampleTest, upper } from './http';

async function main() {
  // 1. input
  const text = await fetchExampleTest();

  // 2. process
  const transformed = upper(text);

  // 3, output
  console.log(transformed);
}

main();
