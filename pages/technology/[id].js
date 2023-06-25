import {useRouter} from "next/router";
import style from "../../styles/technology.module.css";

const {default: Layout}=require("@/components/Layout");

function Destination(props) {
    const {displayData}=props;
    const router=useRouter();
    return (
        <Layout>
            <span className={style.container}>
                <span className="flex justify-center md:justify-start lg:justify-start gap-[0.6rem] w-full max-w-[80rem] mt-[5rem] md:mt-[7rem] lg:mt-[5rem] text-[16px] md:text-[20px] lg:text-[28px] font-light">
                    <p className="text-[#D0D6F9]">03</p>SPACE LAUNCH 101
                </span>

                <span className="flex p-[2rem] w-full items-center justify-between flex-col-reverse md:flex-col-reverse lg:flex-row gap-[2rem]">
                    <span className="flex items-center justify-center gap-[2rem] w-full max-w-[50rem] flex-col md:flex-col lg:flex-row">
                        <span className="flex flex-row md:flex-row lg:flex-col gap-[2rem] font-light">
                            <span className={router.query.id==="vehicle"?`${style.selected}`:`${style.circle}`}
                                onClick={() => {
                                    router.push("/technology/vehicle");
                                }}
                            >1</span>
                            <span className={router.query.id==="spaceport"?`${style.selected}`:`${style.circle}`}
                                onClick={() => {
                                    router.push("/technology/spaceport");
                                }}
                            >2</span>
                            <span className={router.query.id==="capsule"?`${style.selected}`:`${style.circle}`}
                                onClick={() => {
                                    router.push("/technology/capsule");
                                }}
                            >3</span>
                        </span>

                        <span className="flex flex-col">
                            <span className="m-auto md:m-auto lg:m-0 text-[14px] md:text-[16px] lg:text-[16px] text-[#D0D6F9]">THE TERMINOLOGY…</span>
                            <span className="m-auto md:m-auto lg:m-0 text-[24px] md:text-[40px] lg:text-[56px] font-light">{displayData.name}</span>
                            <span className="m-auto md:m-auto lg:m-0 text-center md:text-center lg:text-left text-[15px] md:text-[16px] text-[#D0D6F9] lg:text-[18px] max-w-[23rem]">{displayData.description}</span>
                        </span>
                    </span>

                    <span className="image">
                        <style jsx>
                            {`
                                .image {
                                display:flex;
                                align-items: center;
                                justify-content: center;
                                background-image: url(${displayData.urlLandscape});
                                background-repeat: no-repeat;
                                background-size: contain;
                                background-position: center;
                                background-clip: content-box;
                                width:100vw;
                                height:170px;
                                }
                                @media (min-width: 640px) {
                                    .image{
                                        width:100vw;
                                        height:170px;
                                        background-image: url(${displayData.urlLandscape});
                                    }
                                }
                                @media (min-width: 768px) {
                                    .image{
                                        width:100vw;
                                        height:310px;
                                        background-image: url(${displayData.urlLandscape});
                                    }
                                }
                                @media (min-width: 1024px) {
                                    .image{
                                        width:515px;
                                        height:527px;
                                        background-image: url(${displayData.urlPortrait});
                                    }
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
