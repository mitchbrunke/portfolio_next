import Link from "next/link";
import styles from "../styles/Hello.module.css";

const NavList = ({ openNav }) => {
  return (
    <div className={styles.navo} id={openNav ? "mob_nav" : ""}>
      <ul>
        <Link href="/">
          <a>
            <li>home</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>about</li>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <li>contact</li>
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default NavList;
