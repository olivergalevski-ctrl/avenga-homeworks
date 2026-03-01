export async function getData() {
  try {
    const response = await fetch("https://dummyjson.com/recipes?limit=50");
    console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}