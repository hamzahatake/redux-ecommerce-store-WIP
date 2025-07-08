export const getAllProducts = async () => {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("No Product is available");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

export const getProductById = async (id) => {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Product is not available");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}