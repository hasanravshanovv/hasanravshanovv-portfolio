import styles from "./Header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href="# " title="header_logo" className={styles.header_logo}>
          SmartSpace
        </a>
        <nav className={(styles.header_menu, styles.menu)}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <a href="# " title="menu_home" className={styles.menu_link}>
                Home
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="# " title="menu_about" className={styles.menu_link}>
                About
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="# " title="menu_servise" className={styles.menu_link}>
                Servise
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="# " title="menu_portfolio" className={styles.menu_link}>
                Portfolio
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="# " title="menu_Blog" className={styles.menu_link}>
                Blog
              </a>
            </li>
            <li className={styles.menu_item}>
              <a href="# " title="menu_contact" className={styles.menu_link}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
