export const API_ROOT = "http://localhost:3001";

export type Article = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type Person = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: { city: string };
};

export async function requestJson<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_ROOT}${url}`, options);
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}
