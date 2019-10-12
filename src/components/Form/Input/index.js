import React  from "react";
import styles from "./input.module.scss"

export default React.forwardRef((props, ref) => {
	return (<div className={styles.Input}>
		<input ref={ref} {...props} />
		{props.error &&
			<div><span className={styles.InputError}> {props.error}</span></div>
		}
	</div>)
})



