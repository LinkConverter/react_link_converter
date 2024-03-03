import * as React from 'react'

import cn from 'classnames'

import styles from './style.module.scss'

const MagicWand = ({ fill, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg height="100px" viewBox="0 0 100 100" width="100px" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" fill={fill} r="50" />
      <path clipRule="evenodd" d="M16.488 73.027L70.906 18.61c1.172-1.172 4.021-.222 6.364 2.121s3.293 5.193 2.121 6.364L24.973 81.513l-8.485-8.486z" fill="none" />
      <path
        className={styles.animatedChainOne}
        clipRule="evenodd"
        d="M64.906 29.609L12.018 82.497a50.269 50.269 0 0 0 8.847 8.124l52.527-52.527c1.172-1.171.222-4.021-2.121-6.364-2.344-2.342-5.194-3.292-6.365-2.121z"
        fill="#E0E0E2"
        fillRule="evenodd"
      />
      <path
        className={styles.animatedChainOne2}
        d="M88.5 23.002c.767-6.901 4.6-10.735 11.5-11.501-6.9-.767-10.734-4.6-11.5-11.5-.767 6.9-4.6 10.734-11.5 11.5 6.899.766 10.733 4.6 11.5 11.501zM31.5 0c-.5 4.5-3 7-7.501 7.501 4.5.5 7.001 3 7.501 7.5.5-4.5 3-7 7.501-7.5C34.5 7 32 4.5 31.5 0zm60 46.001c-.5 4.5-3 7-7.501 7.501 4.5.5 7.001 3 7.501 7.5.5-4.5 3-7 7.501-7.5C94.5 53.001 92 50.5 91.5 46.001z"
        fill="#F0C419"
      />
      <path
        className={cn(styles.animatedChainOne3, styles.animatedChainOne4)}
        d="M71.5 53c-.367 3.299-2.2 5.133-5.5 5.5 3.3.366 5.134 2.2 5.5 5.499.367-3.299 2.2-5.133 5.5-5.499-3.3-.367-5.134-2.202-5.5-5.5zm-25-31.001c-.367 3.3-2.2 5.134-5.5 5.501 3.3.367 5.134 2.199 5.5 5.5.367-3.301 2.2-5.133 5.5-5.5-3.3-.367-5.134-2.201-5.5-5.501zM58.5 3c-.367 3.298-2.2 5.133-5.5 5.5 3.3.366 5.134 2.2 5.5 5.499.366-3.299 2.2-5.133 5.5-5.499-3.3-.367-5.134-2.202-5.5-5.5z"
        fill="#ffffff"
      />
    </svg>
  )
}

export default MagicWand
