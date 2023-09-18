'use client'

import { motion } from 'framer-motion'

/**
 * The props of {@link PageTitle}.
 */
type PageTitleProps = {
  /**
   * The title of the page.
   */
  title: string
  /**
   * The description of the page.
   */
  description: string
  /**
   * Whether to animate the title and description.
   */
  animate?: boolean
}

const animation = {
  hide: {
    x: -30,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1
  }
}

const PageTitle = (props: PageTitleProps) => {
  const { title, description, animate = true } = props

  return (
    <>
      <motion.h2
        className='my-4 text-4xl font-bold'
        {...(animate && {
          initial: animation.hide,
          animate: animation.show
        })}
      >
        {title}
      </motion.h2>
      <motion.p
        className='mb-8 text-muted-foreground'
        {...(animate && {
          initial: animation.hide,
          animate: animation.show,
          transition: {
            delay: 0.1
          }
        })}
      >
        {description}
      </motion.p>
    </>
  )
}

export default PageTitle
