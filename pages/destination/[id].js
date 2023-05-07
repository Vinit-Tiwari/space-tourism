import { useRouter } from "next/router";
import style from "../../styles/destination.module.css";

const { default: Layout } = require("@/components/Layout");

function Destination(props) {
  const { displayData } = props;
  const router = useRouter();
  return (
    <Layout>
      <span className={style.container}>
        <span className="flex gap-[1rem] w-full max-w-[70rem] justify-center md:justify-start lg:justify-start md:text-[20px] text-[20px] lg:text-[28px]">
          <p className="text-[#D0D6F9]">01</p> PICK YOUR DESTINATION
        </span>
        <span className="flex flex-col md:flex-col lg:flex-row gap-5 items-center w-full max-w-[70rem] justify-between">
          <span className="image ">
            <style jsx>
              {`
                .image {
                  background-image: url(${displayData.url});
                  background-repeat: no-repeat;
                  background-size: contain;
                  display: flex;
                  width: 100%;
                  max-width: 25rem;
                  margin: 1rem;
                  padding: 0px;
                  margin: 0px;
                  height: 100vw;
                  max-height: 25rem;
                }
              `}
            </style>
          </span>

          <span className="flex flex-col max-w-[35rem] h-full justify-evenly gap-8 items-center md:items-center lg:items-start">
            <span className="flex flex-col text-center md:text-center lg:text-left lg:items-start md:items-center items-center">
              <span className="flex text-[#D0D6F9] gap-2 w-full justify-between max-w-[22rem] ">
                <button
                  onClick={() => {
                    router.push("/destination/moon");
                  }}
                >
                  MOON
                </button>
                <button
                  onClick={() => {
                    router.push("/destination/mars");
                  }}
                >
                  MARS
                </button>
                <button
                  onClick={() => {
                    router.push("/destination/europa");
                  }}
                >
                  EUROPA
                </button>
                <button
                  onClick={() => {
                    router.push("/destination/titan");
                  }}
                >
                  TITAN
                </button>
              </span>

              <span className={style.name}>{displayData.name}</span>

              <span className={style.desc}>{displayData.description}</span>
            </span>

            <span className="flex flex-col items-center md:flex-col lg:flex-row gap-2 w-full justify-between max-w-[22rem]">
              <span className="flex flex-col gap-2 items-center md:items-center lg:items-start">
                <p className={style.attributes}>AVG. DISTANCE</p>
                <p className={style.value}>{displayData.distance}</p>
              </span>

              <span className="flex flex-col gap-2 items-center md:items-center lg:items-start">
                <p className={style.attributes}>EST. TRAVEL TIME</p>
                <p className={style.value}>{displayData.time}</p>
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
    props: { displayData: data["data"][id] },
  };
}

export default Destination;
