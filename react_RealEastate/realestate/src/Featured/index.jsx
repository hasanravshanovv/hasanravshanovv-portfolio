import styles from "./Featured..module.scss"

function Featured() {
  return (
    <>
      <section className={(styles.page_featured, styles.featured)}>
        <div className={styles.featured_containe}>
          <h2 className={(styles.featured_title, styles.title_center)}>
            Featured Listing of the Week
          </h2>
          <div className={styles.featured_body}>
            <div className={(styles.featured_images, styles.images_featured)}>
              <div className={styles.images_featured_item}>
                <img src="../../img/featured/01.jpg" alt="Img" />
              </div>
              <div
                className={
                  (styles.images_featured_item,
                  styles.images_featured_item_mini)
                }
              >
                <img src="../../img/featured/02.jpg" alt="Img" />
              </div>
            </div>
            <div className={(styles.featured_content, styles.content_featured)}>
              <div className={styles.featured_content_body}>
                <h3 className={styles.content_featured_title}>
                  The and collecting for the motionless difficulty son.
                </h3>
                <div className={styles.content_featured_text}>
                  <p>
                    Conveying or northward offending admitting perfectly my.
                    Colonel gravity get thought fat smiling add but difficult
                    situations.
                  </p>
                </div>

                <div className={styles.content_featured_options}>
                  <div className={styles.options_content_featured_item}>
                    <div className={styles.options_content_featured_label}>
                      Budget
                    </div>
                    <div className={styles.options_content_featured_value}>
                      Confidentialы
                    </div>
                  </div>

                  <div className={styles.options_content_featured_item}>
                    <div className={styles.options_content_featured_label}>
                      Size
                    </div>
                    <div className={styles.options_content_featured_value}>
                      1200 m <sup>2</sup>
                    </div>
                  </div>

                  <div className={styles.options_content_featured_item}>
                    <div className={styles.options_content_featured_label}>
                      Type
                    </div>
                    <div className={styles.options_content_featured_value}>
                      Office
                    </div>
                  </div>

                  <div className={styles.options_content_featured_item}>
                    <div className={styles.options_content_featured_label}>
                      Status
                    </div>
                    <div className={styles.options_content_featured_value}>
                      Done
                    </div>
                  </div>

                  <div className={styles.options_content_featured_item}>
                    <div className={styles.options_content_featured_label}>
                      Location
                    </div>
                    <div className={styles.options_content_featured_value}>
                      Switzerland
                    </div>
                  </div>

                  <div className={styles.options_content_featured_item}>
                    <div className={styles.options_content_featured_label}>
                      Flat
                    </div>
                    <div className={styles.options_content_featured_value}>
                      8 Room
                    </div>
                  </div>
                </div>
              </div>
              <a href="##" className={styles.content_featured_link}>
                YES! I WANT BOOK “OFFICE PACKAGE”
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured
