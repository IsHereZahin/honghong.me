import { IconExternalLink } from '@tabler/icons-react'

import Image from './image'

/**
 * The props of {@link LinkCard}.
 */
type LinkCardProps = {
  /**
   * The URL of the link.
   */
  href: string
  /**
   * The hostname of the link.
   */
  hostname: string
  /**
   * The title of the link.
   */
  title: string
}

const LinkCard = (props: LinkCardProps) => {
  const { href, hostname, title } = props

  return (
    <div className='not-prose flex justify-center'>
      <a
        href={href}
        className='my-8 flex items-center justify-center gap-4 rounded-lg border p-4'
        rel='noopener noreferrer'
        target='_blank'
      >
        <Image
          src={`/images/website-icons/${hostname}.png`}
          className='rounded-lg'
          width={48}
          height={48}
          alt={hostname}
        />
        <div>
          <div>{title}</div>
          <div className='text-sm text-muted-foreground'>{href}</div>
        </div>
        <IconExternalLink size={22} />
      </a>
    </div>
  )
}

export default LinkCard
