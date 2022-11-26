import HeaderPage from '../../components/HeaderPage'
import FooterPage from '../../components/FooterPage'
import notFound from '../../img/not-found.png'
import '../../index.css'

export default function NotFoundPage() {
     return (
         <div className="text-center main-dashboard-pages">
            <HeaderPage />
                <h1 className="fs-1 pt-5 pb-5">404 Not Found</h1>
                <h6>Your Keyword Did Not Match In Other File</h6>
                <img className="w-50 pb-5" src={notFound} alt="not-found"/>
             <FooterPage />
         </div>  
     )
}