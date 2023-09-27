import { get } from "@/services";

export async function getQuestionById(id) {
  const url = `/api/question/${id}`;

  const data = await get(url);

  return data;
}
