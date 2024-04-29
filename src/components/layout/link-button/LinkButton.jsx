import { Link } from "react-router-dom";

import styles from "./LinkButton.module.css";

export function LinkButton({to, text}){
  return(
    <Link to={to} className={styles.btn}>
      {text}
    </Link>
  )
}
