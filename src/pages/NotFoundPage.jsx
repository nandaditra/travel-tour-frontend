import HeaderPage from '../components/HeaderPage'
import FooterPage from '../components/FooterPage'
import '../App.css'

export default function NotFoundPage() {
     return (
         <div className="container text-center">
            <HeaderPage />
             <h1>404 Not Found</h1>
             <h6>Your Keyword Did Not Match In Other File</h6>
             <FooterPage />
         </div>  
     )
}