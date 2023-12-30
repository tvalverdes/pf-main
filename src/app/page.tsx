import { AboutUs } from '@/components/sections/home/about-us/Index'
import { BooksRecommended } from '@/components/sections/home/books-recommended/Index'
import { FinancialAdvice } from '@/components/sections/home/financial-advice/Index'
import { Reputation } from '@/components/sections/home/reputation/Index'
import { Statistics } from '@/components/sections/home/statistics/Index'
import Testimonials from '@/components/sections/home/testimonials/Index'
import { Topics } from '@/components/sections/home/topics/Index'
export default function Home() {
  
  return (
    <>
      <FinancialAdvice />
      <AboutUs />
      <Topics />
      <Reputation />
      <Statistics />
      <Testimonials />
      <BooksRecommended />
    </>
  )
}
