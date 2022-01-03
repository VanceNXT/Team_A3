import React from "react";
import CardsList from "./CardsList";
const CARD_DATA = [
  {
    id: 1,
    img: "https://www.webworxtechnology.com/wp-content/uploads/2018/06/web-development.jpg",
    alt: "Web Development",
    title: "Web Development",
    info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    img: "https://cdn-images-1.medium.com/max/1200/1*d6I24eyO_IN7yFC_PjSAsA.png",
    title: "Flutter",
    src: "Flutter",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    img: "https://www.leapit.co.uk/wp-content/uploads/2019/11/Cyber-Security-Importance-1080x675.jpeg",
    title: "Cyber Security",
    src: "Machine Learning",
    info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    img: "https://www.webworxtechnology.com/wp-content/uploads/2018/06/web-development.jpg",
    alt: "Web Development",
    title: "Web Development",
    info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 5,
    img: "https://cdn-images-1.medium.com/max/1200/1*d6I24eyO_IN7yFC_PjSAsA.png",
    title: "Flutter",
    src: "Flutter",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
];

const CardIndex = () => {
  return (
    <div>
      <CardsList items={CARD_DATA} />
    </div>
  );
};

export default CardIndex;
