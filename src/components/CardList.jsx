import React from "react";
import Card from "./Card";

// 10 ta mahsulot ma'lumotlari
const products = [
  {
    image: "https://minapi.beemarket.uz/prod-media/productImages/1718098391O5UtBQSVp8Hr.webp",
    title: "Smartfon Redmi Note 12",
    description: "Snapdragon, AMOLED, 5000mAh batareya",
  },
  {
    image: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/65ded5353c5ee48d0b7d48c591b8f4302024111817363381587xRff8EhI7f.jpg",
    title: "Smartfon Samsung Galaxy A14",
    description: "64 GB xotira, kuchli kamera",
  },
  {
    image: "https://minapi.beemarket.uz/prod-media/productImages/1743139211n9IScS8KoBOD.webp",
    title: "Televizor Artel 32'",
    description: "Full HD, Android TV, HDMI",
  },
  {
    image: "https://images.uzum.uz/cu2fpmtht56ksubd7bo0/original.jpg",
    title: "Kir yuvish mashinasi",
    description: "Avtomatik, 6kg, Artel brendi",
  },
  {
    image: "https://minapi.beemarket.uz/prod-media/productImages/1740042676TcamI8KJjFyE.webp",
    title: "Changyutgich Xiaomi",
    description: "Simli, kuchli so‘rish imkoniyati",
  },
  {
    image: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/d82c8d1619ad8176d665453cfb2e55f02024011317190561148YbKQgSgXfh.jpg.webp",
    title: "Quloqchin AirPods Pro",
    description: "Bluetooth, ovoz izolyatsiyasi",
  },
  {
    image: "https://mionline.uz/image/cachewebp/catalog/02.12.2024/001/bhr8710gl-12-600x600.webp",
    title: "Smart soat Mibro",
    description: "Qadam o‘lchagich, yurak urishi monitori",
  },
  {
    image: "https://minapi.beemarket.uz/prod-media/productImages/1739278650rgO2m7EehTof.webp",
    title: "Notebook Lenovo",
    description: "Core i5, 8GB RAM, SSD disk",
  },
  
];

export default function CardList() {
  return (
    <div className="flex flex-wrap justify-between gap-6 px-6 py-10">
      {products.map((product, index) => (
        <Card
          key={index}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
}
