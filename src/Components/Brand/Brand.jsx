function Brand() {
  const brands = [
    {
      id: 1,
      image: "/brands/brand_1.png",
    },
    {
      id: 2,
      image: "/brands/brand_2.png",
    },
    {
      id: 3,
      image: "/brands/brand_3.png",
    },
    {
      id: 4,
      image: "/brands/brand_4.png",
    },
    {
      id: 5,
      image: "/brands/brand_5.png",
    },
    {
      id: 6,
      image: "/brands/brand_6.png",
    },
    {
      id: 7,
      image: "/brands/brand_7.png",
    },
  ];

  return (
    <div className="lg:container mx-auto text-red-600">
      <div className="grid grid-cols-7 items-center justify-center gap-5">
        {brands?.map((brand) => (
          <div key={brand?.id} className="brand_item">
            <img src={brand?.image} alt="brand" className="w-auto h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brand;
