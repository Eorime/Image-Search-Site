export const fetchData = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error("Something unexpected happened :(");
};
