import React from "react";
import styles from "./input.module.scss"

// const Input = (props) => {
//     return <input {...props} className={styles.Input} />
// }
export default React.forwardRef((props, ref) => (
	<input ref={ref} {...props} className={styles.Input} />
))



