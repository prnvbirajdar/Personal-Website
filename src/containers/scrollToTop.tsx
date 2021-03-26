import { ScrollUp } from '@src/components/Icons/Icons'
import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <div
          aria-hidden="true"
          onClick={scrollToTop}
          className="fixed bottom-3 right-3 lg:bottom-5 lg:right-5 transition duration-500 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 p-2 rounded cursor-pointer"
        >
          <ScrollUp />
        </div>
      )}
    </>
  )
}
