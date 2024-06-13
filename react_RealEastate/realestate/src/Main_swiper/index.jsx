import styles from "./Main.module.scss"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/navigation"
import "swiper/scss"

function Main() {
  return (
    <>
      <section className={styles.main_block}>
        <div className={styles.container}>
          <div className={styles.main_block_container}>
            <div className={(styles.main_block_body, styles.body_main_block)}>
              <div
                className={
                  (styles.body_main_block_content, styles.conten_main_block)
                }
              >
                <div className={styles.content_main_block_body}>
                  <div className={styles.content_main_block_sub_title}>
                    RESIDENTIAL [&] OFFICE SPACES
                  </div>
                  <h1 className={styles.content_main_block_title}>
                    Smart Living Style for Smart People
                  </h1>
                  <div className={styles.content_main_block_text}>
                    Much did had call new drew that kept. Limits expect wonder
                    law she. Now has you views woman noisy match money rooms.
                  </div>
                </div>
                <form className={styles.form_main_block} action="#">
                  <img
                    src="../../img/main/home.svg"
                    className={styles.form_main_block_home_img}
                    alt="home"
                  />
                  <input
                    placeholder="Enter Zipcode to search properties"
                    type="text"
                    className={styles.form_main_block_input}
                  />
                  <button
                    type="submit"
                    className={styles.form_main_block_button}
                  >
                    Search Now!
                  </button>
                </form>
              </div>
              {/* <!-- Slider main container --> */}
              <Swiper
                // spaceBetween={50}
                slidesPerView={2}
                // onSwiper={(swiper) => console.log(swiper)}
                className={
                  (styles.body_main_block_slider,
                  styles.slider_main_block,
                  styles.swiper)
                }
              >
                {/* <!-- Additional required wrapper --> */}

                <div
                  className={
                    (styles.slider_main_block_wrappe, styles.swiper_wrapper)
                  }
                >
                  {/* <!-- Slides --> */}
                  <SwiperSlide
                    className={
                      (styles.slider_main_block_slide, styles.swiper_slide)
                    }
                  >
                    <img
                      src="../../img/main/slider/01.jpg"
                      alt="Slider_Image"
                    />
                  </SwiperSlide>
                  <SwiperSlide
                    className={
                      (styles.slider_main_block_slide, styles.swiper_slide)
                    }
                  >
                    <img
                      src="../../img/main/slider/01.jpg"
                      alt="Slider_Image"
                    />
                  </SwiperSlide>

                  <SwiperSlide
                    className={
                      (styles.slider_main_block_slide, styles.swiper_slide)
                    }
                  >
                    <img
                      src="../../img/main/slider/01.jpg"
                      alt="Slider_Image"
                    />
                  </SwiperSlide>

                  <SwiperSlide
                    className={
                      (styles.slider_main_block_slide, styles.swiper_slide)
                    }
                  >
                    <img
                      src="../../img/main/slider/01.jpg"
                      alt="Slider_Image"
                    />
                  </SwiperSlide>
                </div>
              </Swiper>

              <div className={styles.body_main_block_arrows}>
                <div
                  className={
                    (styles.body_main_block_arrow, styles.swiper_button_prev)
                  }
                >
                  <img src="../../img/icon/arrow.svg" alt="arrow" />
                </div>
                <div
                  className={
                    (styles.body_main_block_arrow, styles.swiper_button_next)
                  }
                >
                  <img src="../../img/icon/arrow.svg" alt="arrow" />
                </div>
              </div>
            </div>
            <div
              className={
                (styles.main_block_partners, styles.partners_main_block)
              }
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
        </div>
      </section>
    </>
  )
}

export default Main
