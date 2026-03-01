
export async function getData() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/aa-codecademy/mkwd14-03-ajs-and-ai/refs/heads/main/G2/Homeworks/students.json");
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
