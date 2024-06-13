import styles from "./Header.module.scss"

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_container}>
            <a href="a" title="header_logo" class={styles.header_logo}>
              SmartSpace
            </a>
            <nav className={(styles.header_menu, styles.menu)}>
              <ul className={styles.menu_list}>
                <li className={styles.menu_item}>
                  <a href="a" title="menu_home" className={styles.menu_link}>
                    Home
                  </a>
                </li>
                <li className={styles.menu_item}>
                  <a href="a" title="menu_about" className={styles.menu_link}>
                    About
                  </a>
                </li>
                <li className={styles.menu_item}>
                  <a href="a" title="menu_servise" className={styles.menu_link}>
                    Servise
                  </a>
                </li>
                <li className={styles.menu_item}>
                  <a
                    href="a"
                    title="menu_portfolio"
                    className={styles.menu_link}
                  >
                    Portfolio
                  </a>
                </li>
                <li className={styles.menu_item}>
                  <a href="a" title="menu_Blog" className={styles.menu_link}>
                    Blog
                  </a>
                </li>
                <li className={styles.menu_item}>
                  <a href="a" title="menu_contact" className={styles.menu_link}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
