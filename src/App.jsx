import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {


  return (
    <>
        <Header></Header>
        <div className="md:flex mx-4">
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
        </div>
     
    
    </>
  )
}

export default App
