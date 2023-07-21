import ArrowTopRight from '@icons/ArrowTopRight'
import Image from 'next/image'
import Link from 'next/link'

import { myStack } from '@/globals/constants'

import styles from './List.module.css'

const StackList = () => {
  return (
    <div className={styles.container}>
      {myStack.map((item, index) => (
        <Link
          aria-label={`click to open ${item.name}'s website`}
          tabIndex={0}
          key={index}
          className={styles.item}
          href={item.url}
          target="_blank"
          prefetch={false}
          style={{ '--delay': index } as React.CSSProperties}
        >
          <div className={styles.image}>
            <Image src={item.image} alt={item.name} width={40} height={40} />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{item.name}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
          <div className={styles.externalLinkIndicator}>
            <ArrowTopRight />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default StackList
