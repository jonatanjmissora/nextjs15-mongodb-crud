import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="navbar bg-base-100 px-4">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">K@to</a>
  </div>
  <div className="flex-none">
    <Link className='btn btn-primary' href="/login">Log in</Link>
  </div>
</div>
  )
}
