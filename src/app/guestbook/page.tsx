import type { Metadata, ResolvingMetadata } from 'next'
import { getServerSession } from 'next-auth'

import { getMessages } from '@/actions/guestbook'
import PageTitle from '@/components/page-title'
import site from '@/config/site'
import authOptions from '@/lib/auth'

import Form from './form'
import Messages from './messages'
import Pinned from './pinned'
import SignIn from './sign-in'

const title = 'Guestbook'
const description = 'Sign my guestbook and share your idea.'

/**
 * The props of {@link GuestbookPage}.
 */
type GuestbookPageProps = {
  /**
   * The params of the URL.
   */
  params: Record<string, never>
  /**
   * The search params of the URL.
   */
  searchParams: Record<string, never>
}

export const generateMetadata = async (
  _: GuestbookPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const previousOpenGraph = (await parent)?.openGraph || {}
  const previousTwitter = (await parent)?.twitter || {}

  return {
    title,
    description,
    alternates: {
      canonical: `${site.url}/guestbook`
    },
    openGraph: {
      ...previousOpenGraph,
      url: `${site.url}/guestbook`,
      title,
      description
    },
    twitter: {
      ...previousTwitter,
      title,
      description
    }
  }
}

export const dynamic = 'force-dynamic'

const GuestbookPage = async () => {
  const session = await getServerSession(authOptions)
  const messages = await getMessages()

  return (
    <>
      <PageTitle
        title='Guestbook'
        description='You can tell me anything here!'
      />
      <div className='mx-auto max-w-lg'>
        <Pinned />
        {!session?.user && <SignIn />}
        {session?.user && <Form user={session.user} />}
        <Messages user={session?.user} messages={messages} />
      </div>
    </>
  )
}

export default GuestbookPage
