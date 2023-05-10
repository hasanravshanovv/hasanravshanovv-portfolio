import styles from "./Main.module.scss"
import Swiper from "swiper"

function Main() {
  const swiper = new Swiper(".slider_main_block", {
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".body_main_block_arrow.swiper-button-next",
      prevEl: ".body_main_block_arrow.swiper-button-prev",
    },
  })
  return (
    <section className={(styles.page_main, styles.main_block)}>
      <div className={styles.main_block_container}>
        <div className={(styles.main_block_body, styles.body_main_block)}>
          <div
            className={
              (styles.body_main_block_content, styles.conten_main_block)
            }
          >
            <div className={styles.content_main_block_body}>
              <div className={styles.content_main_block_sub_title}>
                RESIDENTIAL & OFFICE SPACES
              </div>
              <h1 className={styles.content_main_block_title}>
                Smart Living Style for Smart People
              </h1>
              <div className={styles.content_main_block_text}>
                Much did had call new drew that kept. Limits expect wonder law
                she. Now has you views woman noisy match money rooms.
              </div>
            </div>
            <form
              className={
                (styles.content_main_block_form, styles.form_main_block)
              }
              action="#"
            >
              <input
                placeholder="Enter Zipcode to search properties"
                type="text"
                className={styles.form_main_block_input}
              />
              <button type="submit" class={styles.form_main_block_button}>
                Search Now!
              </button>
            </form>
          </div>

          <div
            className={
              (styles.body_main_block_slider,
              styles.slider_main_block,
              styles.swiper)
            }
          >
            <div
              className={
                (styles.slider_main_block_wrapper, styles.swiper_wrapper)
              }
            >
              <div
                className={
                  (styles.slider_main_block_slide, styles.swiper_slide)
                }
              >
                <img src="../img/main/slider/01.jpg" alt="slider" />
              </div>
              <div
                className={
                  (styles.slider_main_block_slide, styles.swiper_slide)
                }
              >
                <img src="../img/main/slider/02.jpg" alt="Slider" />
              </div>
              <div
                className={
                  (styles.slider_main_block_slide, styles.swiper_slide)
                }
              >
                <img src="../img/main/slider/01.jpg" alt="Slider " />
              </div>
            </div>
          </div>
          <div className={styles.body_main_block_arrows}>
            <div
              className={
                (styles.body_main_block_arrow, styles.swiper_button_prev)
              }
            >
              <img src="../img/icon/arrow.svg)" alt="arrow" />
            </div>
            <div
              className={
                (styles.body_main_block_arrow, styles.swiper_button_next)
              }
            >
              <img src="../img/icon/arrow.svg)" alt="arrow" />
            </div>
          </div>
        </div>
        <div
          className={(styles.main_block_partners, styles.partners_main_block)}
        >
          <div className={styles.partners_main_block_label}>
            Our Amazing Partners
          </div>
          <div className={styles.partners_main_block_items}>
            <div className={styles.partners_main_block_item}>
              <img src="./img/main/partners/01.svg" alt="Parnter" />
            </div>
            <div className={styles.partners_main_block_item}>
              <img src="./img/main/partners/02.svg" alt="Parnter" />
            </div>
            <div className={styles.partners_main_block_item}>
              <img src="./img/main/partners/03.svg" alt="Parnter" />
            </div>
            <div className={styles.partners_main_block_item}>
              <img src="./img/main/partners/04.svg" alt="Parnter" />
            </div>
            <div className={styles.partners_main_block_item}>
              <img src="./img/main/partners/05.svg" alt="Parnter" />
            </div>
            <div className={styles.partners_main_block_item}>
              <img src="./img/main/partners/06.svg" alt="Parnter" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main
