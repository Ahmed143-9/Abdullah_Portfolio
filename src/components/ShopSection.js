const ShopSection = () => {
  const shopItems = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/image/61KvOuieH0L._AC_UY1000_.jpg`,
      name: "Dark MAGA Hat"
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/image/il_fullxfull.6381681017_om1m.webp`,
      name: "Purple Hat"
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/image/istockphoto-508706135-612x612.jpg`,
      name: "Yellow Hat"
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/image/images (1).jfif`,
      name: "Red Hat"
    }
  ];

  return (
    <section id="shop" className="shop-section">
      <div className="shop-items">
        {shopItems.map((item) => (
          <div key={item.id} className="shop-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <a href="#shop-page" className="btn btn-shop">Shop Now</a>
    </section>
  );
};

export default ShopSection;