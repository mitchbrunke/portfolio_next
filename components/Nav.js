import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import styles from "../styles/Hello.module.css";

const Nav = () => {
  const [openNav, setNavOpen] = useState(true);
  const isOpen = openNav;
  const router = useRouter();

  useEffect(() => {
    console.log("useeffect ran");
    console.log(openNav);
  }, [openNav]);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/logo.png" alt="logo" />
          </a>
        </Link>
      </div>

      <nav className={isOpen ? styles.nav : styles.no_nav}>
        <ul>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}>
              <li>home</li>
            </a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == "/about" ? "active" : ""}>
              <li>about</li>
            </a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              <li>contact</li>
            </a>
          </Link>
        </ul>
      </nav>

      <Link href="/">
        <a>
          <div className="contactIcon">
            <MailOutlineIcon color="disabled" fontSize="large" />
          </div>
        </a>
      </Link>

      <div
        className={styles.toggle}
        onClick={(e) => {
          setNavOpen(!openNav);
        }}
      >
        <MenuIcon className={styles.toggle} fontSize="large" />
      </div>
    </div>
  );
};

export default Nav;
