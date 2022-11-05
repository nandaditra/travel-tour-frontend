import HeaderPage from "../components/HeaderPage"
import FooterPage from "../components/FooterPage"
import {Packet} from  "./Packet"
import { datas } from "./apidatas"
import "../index.css"

export default function Dashboard() {
    return (
        <div >
           <HeaderPage />
            <main className="main-dashboard-pages">
               <div className="container-fluid"> 
                <div className="row mx-5">
                    {datas.map((item, index)=>
                          <Packet 
                             key={index}
                             packet = {item} 
                          />
                    )}
                </div>
              </div>
            </main>
           <FooterPage />
        </div>
    )
}




