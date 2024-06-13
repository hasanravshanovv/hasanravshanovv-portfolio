import Header from "./Header"
import Main from "./Main_swiper"
import How from "./How"
import Deal from "./Deal"
import Featured from "./Featured"
import Reviews from "./Reviews"
import styles from "./Index.module.scss"
function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.page}>
        <div className={styles.container}>
          <Main />
          <How />
          <Deal />
          <Featured />
          <Reviews />
        </div>
      </main>
    </div>
  )
}

export default App
