import Layout from "@/components/Layout";
import style from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <span className={style.bg}>
        <span className="max-w-[65rem] w-full flex flex-col">
          <span className="text-center lg:text-left text-[#D0D6F9] text-[1.2rem] w-full opacity-80">SO, YOU WANT TO TRAVEL TO</span>

          <span className="flex items-center justify-between gap-5 md:flex-col flex-col lg:flex-row">
            <span className="flex flex-col gap-10">
              <p className="text-[80px] md:text-[150px] lg:text-[150px] flex items-center justify-center h-[10rem]">SPACE</p>

              <p className="text-[16px] text-center lg:text-left max-w-[25rem] text-[#D0D6F9]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </span>

            <span className=" flex justify-center items-center ">
              <span className={style.explore}>EXPLORE</span>
            </span>
          </span>
        </span>
      </span>
    </Layout>
  );
}
