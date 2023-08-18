import { FC } from 'react'
import styles from './RequestBtn.module.scss'
import { IRequestBtnProps } from './RequestBtnTypes'

const RequestBtn:FC<IRequestBtnProps> = ({setShowFormModalBlock}) => {
  return (
        <button onClick={setShowFormModalBlock} className={styles.btnRequest}>
            REQUEST A QUOTE 
        </button>
  )
}

export default RequestBtn