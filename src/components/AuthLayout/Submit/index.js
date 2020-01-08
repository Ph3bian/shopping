import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './submit.module.scss'
import { Button } from '../../Form'

const Submit = ({ text, url, tag }) => {
    return (
        <div className={styles.submit}>
            <Button type="submit">{text}</Button>
            <div className={styles.submitLink}>
                <Link className={styles.submitLink} to={url}>
                    {tag}
                </Link>
                <Link className={styles.submitLink} to="/create-account">
                    Create Account
                </Link>
            </div>
        </div>
    )
}
Submit.propTypes = {
    text: PropTypes.string,
    url: PropTypes.string,
    tag: PropTypes.string
}

Submit.defaultProps = {
    text: '',
    url: '',
    tag: ''
}

export default Submit
