import { useRouter } from "next/router";
import style from "../../styles/crew.module.css";

const { default: Layout } = require("@/components/Layout");

function Destination(props) {
  const { displayData } = props;
  const router = useRouter();
  return (
    <Layout>
      <span className={style.container}>
        <span className="flex gap-[1rem]">
          <p>02</p>MEET YOUR CREW
        </span>

        <span className="flex">
          <span className="flex flex-col">
            <span className="flex flex-col">
              <span>{displayData.type}</span>
              <span>{displayData.name}</span>
              <span>{displayData.description}</span>
            </span>

            <span className="flex gap-3">
              <button type="button" onClick={()=>{router.push('/crew/commander')}}>
                <span className={style.circle}></span>
              </button>

              <button type="button" onClick={()=>{router.push('/crew/specialist')}}>
                <span className={style.circle}></span>
              </button>

              <button type="button" onClick={()=>{router.push('/crew/pilot')}}>
                <span className={style.circle}></span>
              </button>

              <button type="button" onClick={()=>{router.push('/crew/engineer')}}>
                <span className={style.circle}></span>
              </button>
            </span>
          </span>

          <span className="image">
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
        </span>
      </span>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "commander" } },
      { params: { id: "engineer" } },
      { params: { id: "pilot" } },
      { params: { id: "specialist" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const data = {
    data: {
      commander: {
        type: "COMMANDER",
        name: "DOUGLAS HURLEY",
        url: "/images/crew/image-douglas-hurley.png",
        description:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      },
      engineer: {
        type: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        url: "/images/crew/image-anousheh-ansari.png",
        description:
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      },
      pilot: {
        type: "PILOT",
        name: "VICTOR GLOVER",
        url: "/images/crew/image-victor-glover.png",
        description:
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      },
      specialist: {
        type: "MISSION SPECIALIST",
        name: "MARK SHUTTLEWORTH",
        url: "/images/crew/image-mark-shuttleworth.png",
        description:
          "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      },
    },
  };

  return {
    props: { displayData: data["data"][id] },
  };
}

export default Destination;
