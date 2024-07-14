import Navbar from './components/Navbar/Navbar'
import CreateSection from './components/CreatePostSection/Section'


const CreatePost = () => {
  return (
    <div>
        <div>
          <Navbar></Navbar>
        </div>

        <div className='flex items-center flex-col justify-center m-12'>
          <CreateSection></CreateSection>
        </div>
    </div>
  )
}

export default CreatePost