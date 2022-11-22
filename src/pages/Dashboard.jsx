import HeaderPage from "../components/HeaderPage"
import FooterPage from "../components/FooterPage"
import NotFoundPage from "./NotFoundPage"
import {Packet} from  "./Packet"
import { datas } from "./apidatas"
import "../index.css"
import { useEffect, useState } from "react"

export default function Dashboard() {
    const [mounted, setMounted] = useState(false)
    const [data, setData] = useState([])
 
    const fetchData = () => setData(datas)
    useEffect(()=> {
        setTimeout(()=> {
            console.log("Pages on loading...")
            if(!mounted) {
                setMounted(true)
            }
        }, 3000)   
        return fetchData  
    })


    if(null) {
        return <NotFoundPage />
    } else {
        return (
            <div >
              <HeaderPage />
                <main className="main-dashboard-pages">
                <div className="container-fluid"> 
                    <div className="row mx-5">
                        {data.map((item, index)=>
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


}

