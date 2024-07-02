
const categorias = ["Laptops", "Parlantes", "MicroUSB", "Cables", "Otros"];

function ItemListContainer({ Greetings }) {
    return (
        <div className="item-list-container">
            <h1>{Greetings}</h1>
            <ul>
                {categorias.map((categoria, index) => (
                    <li key={index}>{categoria}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemListContainer;
