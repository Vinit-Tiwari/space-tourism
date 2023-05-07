import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from '../../styles/destination.module.css'

const { default: Layout } = require("@/components/Layout");

function Destination(props) {
  const { displayData } = props;
  console.log(displayData);
  return (
    <Layout>
      <span className={style.container}>
        <p>01 PICK YOUR DESTINATION</p>
        <span className="flex gap-2 items-center justify-center border-red-800 border-solid border-2">
          <span className="image">
            <style jsx>
              {`
                .image {
                  background-image: url(${displayData.url});
                  background-repeat: no-repeat;
                  background-size: contain;
                  display: flex;
                  width: 25rem;
                  height: 25rem;
                }
              `}
            </style>
          </span>

          <span className="flex flex-col">
            <span className="flex flex-col">
              <span>
                <button>MOON</button>
                <button>MARS</button>
                <button>EUROPA</button>
                <button>TITAN</button>
              </span>

              <span>{displayData.name}</span>

              <span>{displayData.description}</span>
            </span>

            <span className="flex">
              <span>
                <p>AVG. DISTANCE</p>
                <p>{displayData.distance}</p>
              </span>

              <span>
                <p>EST. TRAVEL TIME</p>
                <p>{displayData.time}</p>
              </span>
            </span>
          </span>
        </span>
      </span>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "moon" } },
      { params: { id: "mars" } },
      { params: { id: "europa" } },
      { params: { id: "titan" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = {
    data: {
      moon: {
        name: "MOON",
        url: "/images/destination/image-moon.png",
        description:
          "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        time: "3 days",
      },
      mars: {
        name: "MARS",
        url: "/images/destination/image-mars.png",
        description:
          "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        distance: "225 mil. km",
        time: "9 months",
      },
      europa: {
        name: "EUROPA",
        url: "/images/destination/image-europa.png",
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin.",
        distance: "628 mil. km",
        time: "3 years",
      },
      titan: {
        name: "TITAN",
        url: "/images/destination/image-titan.png",
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        time: "7 years",
      },
    },
  };

  return {
    props: { displayData: (data["data"][id]) },
  };
}

export default Destination;
