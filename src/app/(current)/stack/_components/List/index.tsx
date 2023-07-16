import Image from 'next/image'
import Link from 'next/link'

import { myStack } from '@/globals/constants'

import styles from './List.module.css'

const StackList = () => {
  return (
    <div className={styles.container}>
      {myStack.map((item, index) => (
        <Link
          key={index}
          className={styles.item}
          href={item.url}
          target="_blank"
          style={{ '--delay': index } as React.CSSProperties}
        >
          <div className={styles.image}>
            <Image src={item.image} alt={item.name} width={40} height={40} />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default StackList
