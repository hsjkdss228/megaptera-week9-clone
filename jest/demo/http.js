import axios from 'axios';

export async function fetchExampleTest() {
  const { data } = await axios.get('http://www.example.com/');

  return data;
}

export function upper(text) {
  return text.toUpperCase;
}

export function print(text) {
  console.log(text);
}
