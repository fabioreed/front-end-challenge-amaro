import AppRoutes from "./routes"
import GlobalStyle from "./styles/globalSyles"
import Reset from "./styles/reset"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {

  return (
    <>
      <AppRoutes />
      <Reset />
      <GlobalStyle />
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
