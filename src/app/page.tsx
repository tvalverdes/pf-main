import { Divider } from '@chakra-ui/react'
import { Header } from './components/header/Index'
import { AboutUs } from './components/sections/about-us/Index'
import { FinancialAdvice } from './components/sections/financial-advice/Index'
import { Topics } from './components/sections/topics/Index'
import { Reputation } from './components/sections/reputation/Index'
import { Statistics } from './components/sections/statistics/Index'
import Testimonials from './components/sections/testimonials/Index'
import { BooksRecommended } from './components/sections/books-recommended/Index'
import { Footer } from './components/footer/Index'

export default function Home() {
  return (
    <>
      <Header />
      <FinancialAdvice />
      <AboutUs />
      <Topics />
      <Reputation />
      <Statistics />
      <Testimonials />
      <BooksRecommended />
      <Footer />
    </>
  )
}
