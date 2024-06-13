import styles from "./Deal.module.scss"

function Deal() {
  return (
    <section className={styles.deals}>
      <div className={styles.deals_container}>
        <h2 className={styles.header_deals_title}>
          <p className={styles.title}>Best Real Estate Deals</p>
        </h2>
        <div className={(styles.deals_header, styles.header_deals)}>
          <div className={styles.header_deals_content}>
            <div className={styles.header_deals_text}>
              Colonel gravity get thought fat smiling add but. Wonder twenty
              hunted and put income set desire expect.
            </div>
          </div>
          <a href=" " className={styles.header_deals_link}>
            View All Property
          </a>
        </div>
        <div className={(styles.deals_tabs, styles.tabs_deals)}>
          <nav className={styles.tabs_deals_nav}>
            <button type="button" className={styles.tabs_deals_button}>
              <p className={styles.active}>Residential Property</p>
            </button>
            <button type="button" className={styles.tabs_deals_button}>
              Commercial Property
            </button>
            <button type="button" className={styles.tabs_deals_button}>
              Agriculture Property
            </button>
            <button type="button" className={styles.tabs_deals_button}>
              Industrial Property
            </button>
          </nav>
          <div className={styles.tabs_deals_body}>
            <div
              className={
                (styles.tabs_deals_item, styles.item_tabs, styles.active)
              }
            >
              <div className={styles.item_tabs_items}>
                <div className={styles.item_tabs_item}>
                  <div className={styles.item_tabs_options}>
                    <a href=" " className={styles.item_tabs_option}>
                      Featured
                    </a>
                    <a href=" " className={styles.item_tabs_option}>
                      3d
                    </a>
                  </div>
                  <a href=" " className={styles.item_tabs_image}>
                    <img src="img/deals/01.jpg" alt="Image_" />
                  </a>
                </div>
                <div className={styles.item_tabs_item}>
                  <div className={styles.item_tabs_options}>
                    <a href=" " className={styles.item_tabs_option}>
                      Featured
                    </a>
                    <a href=" " className={styles.item_tabs_option}>
                      3d
                    </a>
                  </div>
                  <a href=" " className={styles.item_tabs_image}>
                    <img src="img/deals/02.jpg" alt="Image_" />
                  </a>
                </div>
                <div className={styles.item_tabs_item}>
                  <div className={styles.item_tabs_options}>
                    <a href=" " className={styles.item_tabs_option}>
                      Featured
                    </a>

                    <a href=" " className={styles.item_tabs_option}>
                      3d
                    </a>
                  </div>
                  <a href=" " className={styles.item_tabs_image}>
                    <img src="img/deals/03.jpg" alt="Image_" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Deal
