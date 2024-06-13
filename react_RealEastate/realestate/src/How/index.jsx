import styles from "./How.module.scss"

function How() {
  return (
    <section className={styles.how}>
      <div className={styles.container}>
        <div className={styles.how_container}>
          <h2 className={styles.how_title}>How it works?</h2>
          <div className={styles.how_items}>
            <div
              className={(styles.how_item, styles.item_how, styles.item_how_1)}
            >
              <div className={styles.item_how_icon}>
                <img src="../../img/how/01.svg" alt="Icon" />
              </div>
              <div className={styles.item_how_title}>Research Suburbs</div>
              <div className={styles.item_how_text}>
                Wonder twenty hunted and put income set desire expect. Am
                cottage calling.
              </div>
            </div>
            <div
              className={(styles.how_item, styles.item_how, styles.item_how_2)}
            >
              <div className={styles.item_how_icon}>
                <img src="../../img/how/02.svg" alt="Icon" />
              </div>
              <div className={styles.item_how_title}>Instant Valuation</div>
              <div className={styles.item_how_text}>
                Conveying or northward offending admitting perfectly my. Colonel
                gravit and moonlight.
              </div>
            </div>
            <div
              className={(styles.how_item, styles.item_how, styles.item_how_3)}
            >
              <div className={styles.item_how_icon}>
                <img src="../../img/how/03.svg" alt="Icon" />
              </div>
              <div className={styles.item_how_title}>Track Property</div>
              <div className={styles.item_how_text}>
                Moderate children at of outweigh it. Unsatiable it considered
                invitation he travelling insensible.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default How
