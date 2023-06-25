import {useState} from "react";
import styles from "../styles/navbar.module.css"
import {useRouter} from "next/router";

function Navbar() {
  const [menuSelected,setMenuSelected]=useState(false)
  const router=useRouter()
  return (
    <span className={styles.container}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </span>
      <span className="hidden lg:flex font-bold text-[16px] h-[0.1rem] bg-white w-[35%] relative left-[8%] z-30 opacity-40 md:hidden"></span>
      <span className={styles.menu}>
        <button
          type="button"
          onClick={() => {
            router.push("/");
          }}
          className={router.route==="/"? "border-b-4":""}
        >
          <p className="hidden lg:flex font-bold text-[16px]">00</p>
          HOME
        </button>

        <button
          type="button"
          onClick={() => {
            router.push("/destination/moon");
          }}
          className={router.route==="/destination/[id]"? "border-b-4":""}
        >
          <p className="hidden lg:flex font-bold text-[16px]">01</p>
          DESTINATION
        </button>

        <button
          type="button"
          onClick={() => {
            router.push("/crew/commander");
          }}
          className={router.route==="/crew/[id]"? "border-b-4":""}
        >
          <p className="hidden lg:flex font-bold text-[16px]">02</p>
          CREW
        </button>

        <button
          type="button"
          onClick={() => {
            router.push("/technology/vehicle");
          }}
          className={router.route==="/technology/[id]"? "border-b-4":""}
        >
          <p className="hidden lg:flex font-bold text-[16px]">03</p>
          TECHNOLOGY
        </button>
      </span>

      <span onClick={()=> setMenuSelected(!menuSelected)} className="flex md:hidden lg:hidden text-white flex flex-col gap-[2rem] z-[10] items-center justify-center">
        {menuSelected? <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><rect id="Rectangle Copy" x="2.5752" y="0.954102" width="24" height="3" transform="rotate(45 2.5752 0.954102)" fill="#D0D6F9" /><rect id="Rectangle Copy 3" x="0.454102" y="17.9246" width="24" height="3" transform="rotate(-45 0.454102 17.9246)" fill="#D0D6F9" /></g></svg>:
          <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="3" fill="#D0D6F9" />
            <rect y="9" width="24" height="3" fill="#D0D6F9" />
            <rect y="18" width="24" height="3" fill="#D0D6F9" />
          </svg>
        }
      </span>

      {menuSelected?
      <span className={styles.menuoptions}>
          <button
            type="button"
            onClick={() => {
              router.push("/");
            }}
            className={router.route==="/"? "border-b-4":""}
          >
            <p className="lg:flex font-bold text-[16px]">00</p>
            HOME
          </button>

          <button
            type="button"
            onClick={() => {
              router.push("/destination/moon");
            }}
            className={router.route==="/destination/[id]"? "border-b-4":""}
          >
            <p className="lg:flex font-bold text-[16px]">01</p>
            DESTINATION
          </button>

          <button
            type="button"
            onClick={() => {
              router.push("/crew/commander");
            }}
            className={router.route==="/crew/[id]"? "border-b-4":""}
          >
            <p className="lg:flex font-bold text-[16px]">02</p>
            CREW
          </button>

          <button
            type="button"
            onClick={() => {
              router.push("/technology/vehicle");
            }}
            className={router.route==="/technology/[id]"? "border-b-4":""}
          >
            <p className="lg:flex font-bold text-[16px]">03</p>
            TECHNOLOGY
          </button>
      </span>
      :false}

    </span>
  );
}

export default Navbar;
