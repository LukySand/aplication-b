export async function getData() {
  const res = await fetch("/api/counter");
  const data = await res.json();
  // console.log(data.instance);
  return data.instance;
}

export async function postData(value: number, color: string) {
  const res = await fetch("/api/counter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value, color }),
  });
  const data = await res.json();
  // console.log(data);
}

export async function putData(id: String, value: number) {
  const res = await fetch(`/api/counter/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ value }),
  });
  const data = await res.json();
  // console.log(data);
}



export async function getDataById(id: String) {
  const res = await fetch(`/api/counter/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  // console.log(data);
  return data.number;
}