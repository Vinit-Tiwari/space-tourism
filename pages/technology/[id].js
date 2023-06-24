import {useRouter} from "next/router";
import style from "../../styles/technology.module.css";

const {default: Layout}=require("@/components/Layout");

function Destination(props) {
    const {displayData}=props;
    const router=useRouter();
    return (
        <Layout>
            <span className={style.container}>
                <span className="flex gap-[0.6rem]">
                    <p>03</p>SPACE LAUNCH 101
                </span>

                <span className="flex ">
                    <span className="flex">
                        <span className="flex flex-col">
                            <span className="font-light text-[16px] md:text-[24px] lg:text-[32px] w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] border-2 rounded-[50%] flex items-center justify-center">1</span>
                            <span className="font-light text-[16px] md:text-[24px] lg:text-[32px] w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] border-2 rounded-[50%] flex items-center justify-center">2</span>
                            <span className="font-light text-[16px] md:text-[24px] lg:text-[32px] w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] border-2 rounded-[50%] flex items-center justify-center">3</span>
                        </span>

                        <span className="flex flex-col">
                            <span className="text-[14px] md:text-[16px] lg:text-[16px]">THE TERMINOLOGY…</span>
                            <span className="text-[24px] md:text-[40px] lg:text-[56px] font-light">{displayData.name}</span>
                            <span className="text-[15px] md:text-[16px] lg:text-[18px]">{displayData.description}</span>
                        </span>
                    </span>

                    <span className="image ">
                        <style jsx>
                            {`
                                .image {
                                background-image: url(${displayData.urlLandscape});
                                background-repeat: no-repeat;
                                background-size: cover;
                                display: flex;
                                width: 100%;
                                max-width: 515px;
                                margin: 1rem;
                                padding: 0px;
                                margin: 0px;
                                height: 100vw;
                                max-height: 527px;
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
            {params: {id: "spaceport"}},
            {params: {id: "vehicle"}},
            {params: {id: "capsule"}},
        ],
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const {id}=params;
    const data={
        data: {
            capsule: {
                name: "SPACE CAPSULE",
                urlLandscape: "/images/technology/image-space-capsule-landscape.jpg",
                urlPortrait: "/images/technology/image-space-capsule-portrait.jpg",
                description:
                    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            },
            vehicle: {
                name: "Launch vehicle",
                urlLandscape: "/images/technology/image-launch-vehicle-landscape.jpg",
                urlPortrait: "/images/technology/image-launch-vehicle-portrait.jpg",
                description:
                    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            },
            spaceport: {
                name: "Spaceport",
                urlLandscape: "/images/technology/image-spaceport-landscape.jpg",
                urlPortrait: "/images/technology/image-spaceport-portrait.jpg",
                description:
                    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft.Based in the famous Cape Canaveral,our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
            },
        },
    };

    return {
        props: {displayData: data["data"][id]},
    };
}

export default Destination;
