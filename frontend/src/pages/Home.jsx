import React from 'react'
import Navbar from './components/Navbar/Navbar'
import PostsSection from './components/PostsSection/PostsSection'

const Home = () => {
  return (
    <html data-theme='dark'>
      <div className="App h-screen">
        <header className="App-header">
          <Navbar></Navbar>
          <PostsSection></PostsSection>
        </header>
      </div>
    </html>
  )
}

export default Home