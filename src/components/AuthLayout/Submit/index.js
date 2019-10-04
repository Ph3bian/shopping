import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import styles from "./submit.module.scss"


const Submit = ({ text, url, tag }) => {
   return (
     <div className={styles.submit}>
       <button  type="submit">
      {text}
      </button>
      <Link className={styles.submitLink} to={url}>{tag}</Link>
     </div>
   )
 }
Submit.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  tag: PropTypes.string
}

Submit.defaultProps = {
  text: "",
  url: "",
  tag: "",
}

 export default Submit;