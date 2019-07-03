import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import styles from './Links.module.css'

const Links = () => (
  <div className={styles.links}>
    <a
      href="https://github.com/TimoSta/sprite"
      title="Sprite on GitHub"
      target="_new"
      className={styles.item}
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://twitter.com/spritedotlink/"
      title="Sprite on Twitter"
      target="_new"
      className={styles.item}
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </div>
)

export default Links
