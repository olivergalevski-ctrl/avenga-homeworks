export async function getData() {
    try {
        const response = await fetch('https://dummyjson.com/carts?limit=50');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
    }
}