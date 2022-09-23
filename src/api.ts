const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';

export function getDish(): Promise<any> {
  return fetch(`${ENDPOINT}`)
    .then(res => res.json())
    .catch(() => ({
      Response: 'False',
      Error: 'unexpected error',
    }));
}