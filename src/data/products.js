const products = [
  {
    id: 1,
    name: "Giriraj Jewellers",
    price: 9900.99,
    image:
      "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/1692/1751790010_b7fe46b361f5a3f73948.png",
    description:
      "Blushfire Diamond Necklace: A stunning necklace featuring a brilliant diamond pendant set in a delicate rose gold chain. Perfect for special occasions or everyday elegance.",
  },
  {
    id: 2,
    name: "Instar Jewellery",
    price: 2499.99,
    image:
      "https://www.instarjewellery.in/cdn/shop/files/rn-image_picker_lib_temp_081b18a9-c955-4e53-82c3-e72efdcfa889.png?v=1767079100",
    description:
      "A premium-quality AD (American Diamond) necklace is a dazzling and luxurious jewelry piece that exudes sophistication and glamour. Designed with intricately cut, high-grade American Diamonds, this necklace mimics the brilliance of real diamonds, offering an elegant yet affordable option. Often crafted with gold, silver, or platinum plating, it features exquisite patterns and designs, making it perfect for weddings, festive events, or formal occasions.",
  },
  {
    id: 3,
    name: "Gargi By P.N.Gadgil & Sons",
    price: 40999.99,
    image:
      "https://cdn.shopify.com/s/files/1/0777/6862/2388/files/DNS1093-2ED13095_671d3e68-b620-4d65-9146-cf43be0f4bc2_1000x.jpg?v=1758199350",
    description:
      "Illuminate your style with Gargi’s Diamond Stream Of Drops Necklace. Featuring ethically sourced, brilliant-cut diamonds, each piece radiates timeless elegance, luxury, and sparkle—perfect for celebrations, gifts, or everyday glamour.",
  },
  {
    id: 4,
    name: "P.N.Gadgil Exclusive",
    price: 12999.99,
    image:
      "https://pngexclusive.com/wp-content/uploads/2024/10/DNLO139-1024x1024.jpg",
    description:
      "Premium jewellery from P.N. Gadgil Exclusive, combining traditional craftsmanship with modern elegance—perfect for every special occasion.",
  },
  {
    id: 5,
    name: "Reva Diamonds P.N.Gadgil",
    price: 39899.99,
    image:
      "https://www.onlinepng.com/cdn/shop/files/Necklace_5_1400x1600px.jpg?v=1748346373&width=1500",
    description:
      "Diamond masterpiece created by Reva Diamonds by P.N.Gadgil & Sons Ltd. Exquisite craftsmanship, ethically sourced diamonds, and timeless elegance in every piece. Perfect for special occasions or everyday glamour.",
  },
  {
    id: 6,
    name: "Nemi Ornaments Jewellers",
    price: 29599.99,
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/10/458882472/TT/JI/QM/233340294/kna933-6330-500x500.png",
    description:
      "Elegant jewellery from Nemi Ornaments Jewellers, combining traditional design with modern style—perfect for any occasion.",
  },
  {
    id: 7,
    name: "Voylla Jewellers",
    price: 7999.99,
    image:
      "https://www.voylla.com/cdn/shop/files/HECCU20210_MS.jpg?v=1749714601",
    description:
      "Indulge in effortless elegance with the Sparkling Essentials Florinelle American Diamond Necklace Set, a statement masterpiece crafted to exude grandeur and sophistication. Designed in high-quality brass with a radiant yellow gold plating, this party necklace set is adorned with dazzling American diamonds, carefully arranged in intricate floral and loop motifs for a designer, trendy appeal.",
  },
  {
    id: 8,
    name: "Maiora Diamonds",
    price: 15099.99,
    image:
      "https://maioradiamonds.in/cdn/shop/files/PetalGlamClusterDiamondNecklace_1800x.webp?v=1775741081",
    description:
      "At our Maiora Diamonds, our team designs every ring to delight you, from the first time you see it and every day after. We carefully consider the entire piece-obsessing over comfort, quality, and durability so you can cherish it for a lifetime.",
  },
  {
    id: 9,
    name: "Blingvine Jewellers",
    price: 10000.99,
    image:
      "https://blingvine.com/cdn/shop/files/golden-glow-necklace-set-necklace-sets-abi-453196_360x.jpg?v=1760171245",
    description:
      "Introducing Golden Glow Necklace Set, featuring stunning mustard stones that beautifully reflect the warmth of the sun. Inspired by the vibrant hues of nature, this exquisite collection exudes elegance and charm. Perfect for parties and weddings, it adds a touch of glamour and radiates positivity, illuminating your beauty.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
