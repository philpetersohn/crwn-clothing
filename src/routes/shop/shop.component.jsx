import SHOP_DATA from '../../shop-data.json'

const Shop = () => {
  return (
    <div className="shop-page">
      {SHOP_DATA.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Shop
