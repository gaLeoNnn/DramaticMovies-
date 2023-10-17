export const useHttp = () => {
  const _apiKey = "f644a9e374730998ca1db7375e94383f";

  const request = async (
    url,
    method = "GET",
    body = null,
    headers = {
      // Authorization: `Bearer ${_apiKey}`,
      "Content-Type": "application/json",
    }
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { request };
};
