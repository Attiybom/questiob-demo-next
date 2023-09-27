const MOCK_HOST = `http://localhost:3001`; //服务端

// 封装get方法
export async function get(url) {
  const res = await fetch(`${MOCK_HOST}${url}`);
  const data = res.json();

  return data;
}
// 封装post方法
export async function post(url, body) {
  const res = await fetch(`${MOCK_HOST}${url}`, {
    method: "post",
    body: JSON.stringify(body),
  });
  const data = res.json();

  return data;
}
