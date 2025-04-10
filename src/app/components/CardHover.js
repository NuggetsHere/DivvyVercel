import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHover() {
    return (
        <>
            <HoverEffect items={projects} />
        </>
    )
}

export const projects = [
    {
      title: "Same day service",
      description:
        "For when you're in a hurry. Place orders for repairs and get them back within 24 hours.",
      link: "https://stripe.com",
      image: "https://picsum.photos/200",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
      image: "https://picsum.photos/200",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
      image: "https://picsum.photos/200",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
      image: "https://picsum.photos/200",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
      image: "https://picsum.photos/200",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
      image: "https://picsum.photos/200",
    },
];
  