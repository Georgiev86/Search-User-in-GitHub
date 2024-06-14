//https://type.fit/api/quotes

//https://apidog.com/apihub/

const API_URL = "https://api.github.com";

export async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}
