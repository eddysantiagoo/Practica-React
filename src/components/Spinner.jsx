import { ThreeDots } from 'react-loading-icons'
import styles from "./Spinner.module.css"

export default function Spinner() {
  return (
    <div className={styles.spinner}>
      <ThreeDots speed={.75} width={400}/>
        {/* <ImSpinner2 className={styles.around}  size={60} /> */}
    </div>
  )
}
