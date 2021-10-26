import { v4 as uuidv4 } from "uuid";
// import { uuid } from "uuidv4";

function chillHop() {
  return [
    {
      name: "I Main Samus Now",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#6e9dcd", "#fec39f"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24822",
    },
    {
      name: "Odyssey",
      artist: "Smile High, Teddy Roxpin",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#448a92", "#da6965"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23337",
    },
    {
      name: "Driftwood",
      artist: "Delayde",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5e98f0", "#a7dc90"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23190",
    },
    {
      name: "Clarity",
      artist: "Fantompower",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/3b73a510169f14c4af83ac4016e809917412702b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#c085c5", "#e1ebe2"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22793",
    },
    {
      name: "The Way We Were",
      artist: "Middle School, Aviino",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#a26e24", "#223e54"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22936",
    },
  ];
}
export default chillHop;
