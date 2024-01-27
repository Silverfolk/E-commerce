const getItems = async (setAllItems) =>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setAllItems(data);
}
export default getItems;