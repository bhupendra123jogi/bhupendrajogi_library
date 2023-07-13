'use client'

import { list } from '../../public/list.json'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <meta httpEquiv='refresh' content={`0;URL=${list.find(book => book.name == params.id)!.link}`} />
  )
}