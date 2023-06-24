import styles from "../styles/navbar.module.css"
import { useRouter } from "next/router";

function Navbar() {
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
      <span className="hidden lg:flex h-[0.1rem] bg-white w-[35%] relative left-[8%] z-30 opacity-40 md:hidden"></span>
      <span className={styles.menu}>
        <button
          type="button"
          onClick={() => {
            router.push("/");
          }}
        >
          00 HOME
        </button>

        <button
          type="button"
          onClick={() => {
            router.push("/destination/moon");
          }}
        >
          01 DESTINATION
        </button>

        <button
          type="button"
          onClick={() => {
            router.push("/crew/commander");
          }}
        >
          02 CREW
        </button>

        <button
          type="button"
          onClick={() => {
            router.push("/technology/vehicle");
          }}
        >
          03 TECHNOLOGY
        </button>
      </span>
    </span>
  );
}

export default Navbar;
