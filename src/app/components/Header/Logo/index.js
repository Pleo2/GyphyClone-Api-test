import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

export default function Logo () {
  return (
    <>
      <Link
        to="/"
        className="nav--logo"
      >
        <img
          src="https://developers.giphy.com/branch/master/static/header-logo-0fec0225d189bc0eae27dac3e3770582.gif"
          alt="logo"
        />
      </Link>
    </>
  )
}
