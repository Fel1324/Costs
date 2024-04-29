import styles from "./Container.module.css"

export function Container(props){
  return(
    <main className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </main>
  )
}
