

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import info from "../../assets/info.png"
import img1 from "../../assets/slide1.png"
import img2 from "../../assets/slide2.png"

const items = [
  {
    id: '3443',
    color:"#E8F4FD",
    icon:img1,
    title: 'Lorem ipsum dolor sit amet, consectetur',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, quam vitae iaculis gravida, nunc velit semper nunc, at efficitur dolor purus at velit. Integer vel velit non felis sagittis hendrerit. Mauris non ex a orci consequat congue vitae vel nunc.',
  },
  {
    id: '3443',
    color:"#EBF9F4",
    icon:img2,
    title: 'Lorem ipsum dolor sit amet, consectetur',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, quam vitae iaculis gravida, nunc velit semper nunc, at efficitur dolor purus at velit. Integer vel velit non felis',
  },
  {
    id: '3443',
    color:"#E8F4FD",
    icon:img1,
    title: 'Lorem ipsum dolor sit amet, consectetur',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, quam vitae iaculis gravida, nunc velit semper nunc, at efficitur dolor purus at velit. Integer vel velit non felis sagittis hendrerit. Mauris non ex a orci consequat congue vitae vel nunc.',
  },
  {
    id: '3443',
    color:"#EBF9F4",
    icon:img2,
    title: 'Lorem ipsum dolor sit amet, consectetur',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra, quam vitae iaculis gravida, nunc velit semper nunc, at efficitur dolor purus at velit. Integer vel velit non felis',
  },

]

export default function SentimentSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [nextSlide, prevSlide])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-slide every 5 seconds

    return () => {
      clearInterval(interval)
    }
  }, [nextSlide])

  return (
    <div className="relative w-full bg-white p-4">
        <div className='space-y-1 mb-2'>
            <h1 className='text-xl font-semibold'>Sentiment</h1>
        <p className='text-sm font-medium flex items-center gap-1'>Key Events <img src={info} alt="info icon" className='size-4' /></p>
        </div>
      <div className="w-full p-4 bg-[#EBF9F4] rounded-md">
        <div>
          <div className='flex gap-1 justify-center'>
            <img src={items[currentIndex].icon} alt=""  className='size-8'/>
            <div>
            <p className='text-lg font-medium mb-2'> {items[currentIndex].title}</p>
          <p className='text-sm'>{items[currentIndex].content}</p>
        </div>
           </div>
        </div>
        
      </div>
      <div className="absolute top-1/2 translate-y-1/2 left-0 right-0 flex justify-between px-4">
        <button  onClick={prevSlide} className="rounded-full bg-white p-2 text-gray-800 transition">
          <ChevronLeftIcon className="size-5" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button  onClick={nextSlide} className="rounded-full bg-white p-2 text-gray-800 transition">
          <ChevronRightIcon className="size-5"/>
          <span className="sr-only">Next slide</span>
        </button>
      </div>
     

    

    </div>
  )
}