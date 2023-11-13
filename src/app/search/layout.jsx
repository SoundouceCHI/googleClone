import Footer from '@/component/Footer'
import './../globals.css'
import SearchHeader from '@/component/SearchHeader'

export default function SearchLayout({ children }) {
  return (
    <div>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <SearchHeader/>
        {children}
      
    </div>
  )
}
