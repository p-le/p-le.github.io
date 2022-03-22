import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import Card from "./card"
import "./layout.css"
import { HomeIcon, BookOpenIcon, AtSymbolIcon } from "@heroicons/react/solid"

const pageMainStyles = {
  flex: "1 0 auto",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="flex">
        <div className="md:flex w-2/5 md:w-1/4 h-screenborder-r hidden">
          <div className="mx-auto py-10">
            <div className="flex justify-center items-center">
              <img
                className="w-96 rounded-full"
                src="https://raw.githubusercontent.com/p-le/p-le/main/assets/logo2.png"
                alt="FullstacKAGE"
              />
            </div>
            <ul>
              <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                <HomeIcon className="h-5 w-5 text-white" />
                <span className="font-semibold text-white">Home</span>
              </li>
              <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                <BookOpenIcon className="h-5 w-5 text-white" />
                <span className="font-semibold text-white">All Courses</span>
              </li>
              <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
                <AtSymbolIcon className="h-5 w-5 text-white" />
                <span className="font-semibold text-white">About Me</span>
              </li>
              <button className="w-full mt-10 bg-[#EC5252] rounded-full py-1.5 text-white">Learn</button>
            </ul>
          </div>
        </div>
        <main className="min-h-screen w-full">
          <nav className="flex items-center justify-between px-10 py-6 border-b">
            <Header siteTitle={data.site.siteMetadata?.title || `title`} />
          </nav>
          <div className="mx-6">
            <h1 className="my-6 text-3xl">Latest Video</h1>
            {children}
            <div className="md:flex  space-y-3 md:space-y-0 md:space-x-4 mt-6">
              <div className="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10">
                <p className="text-3xl font-thin text-indigo-50 cursor-pointer">
                  How to do Basic Jumping and how to landing safely
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                    alt=""
                  />
                  <div>
                    <h3 className="text-indigo-50 font-semibold cursor-pointer">Thomas Hope</h3>
                    <p className="text-indigo-50 text-sm font-thin">53K views • 2 weeks ago</p>
                  </div>
                </div>
              </div>
              <div className="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10">
                <p className="text-3xl font-thin text-indigo-50 cursor-pointer">
                  How to do Basic Jumping and how to landing safely
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <img
                    className="w-10 h-10 rounded-full cursor-pointer"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                    alt=""
                  />
                  <div>
                    <h3 className="text-indigo-50 font-semibold cursor-pointer">Thomas Hope</h3>
                    <p className="text-indigo-50 text-sm font-thin">53K views • 2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6">
            <h1 className="my-6 text-3xl">All Courses (WIP)</h1>
          </div>
          <div className="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
            <div className="shadow-lg rounded-t-md overflow-hidden">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"
                  alt=""
                />
                <div className="p-2 relative">
                  <p className="text-lg mt-6 font-semibold">Basic how to ride your skateboard comfortly</p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="shadow-lg rounded-t-md overflow-hidden">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"
                  alt=""
                />
                <div className="p-2 relative">
                  <p className="text-lg mt-6 font-semibold">Basic how to ride your skateboard comfortly</p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="shadow-lg rounded-t-md overflow-hidden">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"
                  alt=""
                />
                <div className="p-2 relative">
                  <p className="text-lg mt-6 font-semibold">Basic how to ride your skateboard comfortly</p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="shadow-lg rounded-t-md overflow-hidden">
              <div className="">
                <img
                  className="w-sm"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"
                  alt=""
                />
                <div className="p-2 relative">
                  <p className="text-lg mt-6 font-semibold">Basic how to ride your skateboard comfortly</p>
                  <p>53K views • 2 weeks ago</p>
                  <img
                    className="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Card />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
