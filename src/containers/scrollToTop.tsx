import { ScrollUp } from '@src/components/Icons/Icons'
import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div
          aria-hidden="true"
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 lg:bottom-5 lg:right-5 bg-gray-800 p-2 rounded cursor-pointer"
        >
          <ScrollUp />
        </div>
      )}
    </>
  )
}
