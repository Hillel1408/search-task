const api = import.meta.env.VITE_API_URL;

export const searchUser = async (search: string) => {
  const response = await fetch(`${api}/users/search?q=${search}`);

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};
