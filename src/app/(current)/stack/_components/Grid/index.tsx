import Image from 'next/image'
import Link from 'next/link'

import { myStack } from '@/globals/constants'

import styles from './Grid.module.css'

const StackGrid = () => {
  return (
    <div className={styles.container}>
      {myStack.map((item, index) => (
        <Link key={index} className={styles.item} href={item.url} style={{ '--delay': index } as React.CSSProperties}>
          <Image src={item.image} alt={item.name} width={30} height={30} />
          <div className={styles.title}>{item.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default StackGrid
