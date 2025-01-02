import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const jsonApiInstance = async <T>(
  url: string,
  init?: RequestInit & { json?: unknown },
) => {
  let headers: Record<string, string> = {};

  if (init?.json) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };

    init.body = JSON.stringify(init.json);
  }

  try {
    const result = await axios({
      url: `${BASE_URL}/${url}`,
      method: "GET",
      headers,
      data: init?.json ?? undefined,
    });

    return result.data as T;
  } catch (error: unknown) {
    const axiosError = error as {
      response?: { status: number; data?: Record<string, unknown> };
    };

    if (axiosError.response?.status === 404) {
      console.warn("Персонажи не найдены по данному запросу");
      return { info: { pages: 0 }, results: [] } as T;
    }

    console.error("Неизвестная ошибка:", error);
    throw error;
  }
};
