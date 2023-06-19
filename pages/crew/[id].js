import {useRouter} from "next/router";
import style from "../../styles/crew.module.css";

const {default: Layout}=require("@/components/Layout");

function Destination(props) {
  const {displayData}=props;
  const router=useRouter();
  return (
    <Layout>
      <span className={style.container}>
        <span className="flex gap-[1rem] w-full max-w-[70rem]  md:text-[21px] lg:text-[28px]">
          <p className="opacity-[25%] font-bold">02</p>MEET YOUR CREW
        </span>
        <span className="flex border-2  flex-col md:flex-col lg:flex-row w-full lg:max-w-[70rem] items-center md:items-center lg:items-end h-[40rem] lg:h-[40rem] gap-[2rem]  justify-between">
          <span className="flex flex-col justify-evenly h-full w-full md:w-full lg:w-max gap-[1rem] max-h-[40rem]">
            <span className="flex flex-col gap-[0.5rem]">
              <span className="flex flex-col">
                <span className="text-center md:text-center lg:text-start opacity-[54.42%] md:text-[22px] lg:text-[28px]">{displayData.type}</span>
                <span className="text-center md:text-center lg:text-start md:text-[32px] lg:text-[54px]">{displayData.name}</span>
              </span>
              <span className="text-center md:text-center m-auto lg:text-start md:text-[15px] lg:text-[18px] max-w-[30rem] text-[#D0D6F9]">
                {displayData.description}
              </span>
            </span>

            <span className="flex gap-3 items-center justify-center md:justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => {
                  router.push("/crew/commander");
                }}
              >
                <span
                  className={
                    router.query.id==="commander"
                      ? `${style.selected}`
                      :`${style.circle}`
                  }
                ></span>
              </button>

              <button
                type="button"
                onClick={() => {
                  router.push("/crew/specialist");
                }}
              >
                <span
                  className={
                    router.query.id==="specialist"
                      ? `${style.selected}`
                      :`${style.circle}`
                  }
                ></span>
              </button>

              <button
                type="button"
                onClick={() => {
                  router.push("/crew/pilot");
                }}
              >
                <span
                  className={
                    router.query.id==="pilot"
                      ? `${style.selected}`
                      :`${style.circle}`
                  }
                ></span>
              </button>

              <button
                type="button"
                onClick={() => {
                  router.push("/crew/engineer");
                }}
              >
                <span
                  className={
                    router.query.id==="engineer"
                      ? `${style.selected}`
                      :`${style.circle}`
                  }
                ></span>
              </button>
            </span>
          </span>

          <span className="image w-[327px] h-[223px] md:w-[433.09px] md:h-[532px] lg:w-[30rem] lg:h-[600px]">
            <style jsx>
              {`
                .image {
                  background-image: url(${displayData.url});
                  background-repeat: no-repeat;
                  background-size: contain;
                  display: flex;
                  margin: 1rem;
                  padding: 0px;
                  margin: 0px;
                  background-position: bottom;
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
      {params: {id: "commander"}},
      {params: {id: "engineer"}},
      {params: {id: "pilot"}},
      {params: {id: "specialist"}},
    ],
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  const {id}=params;
  const data={
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
    props: {displayData: data["data"][id]},
  };
}

export default Destination;
