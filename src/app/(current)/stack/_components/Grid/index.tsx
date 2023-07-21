import ArrowTopRight from '@icons/ArrowTopRight'
import Image from 'next/image'
import Link from 'next/link'

import { myStack } from '@/globals/constants'

import styles from './Grid.module.css'

const StackGrid = () => {
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
          style={{ '--delay': index } as React.CSSProperties}
          prefetch={false}
        >
          <Image src={item.image} alt={item.name} width={30} height={30} />
          <div className={styles.title}>{item.name}</div>
          <div className={styles.externalLinkIndicator}>
            <ArrowTopRight />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default StackGrid
