import { useState } from "react" 
import HeaderPage from "../components/HeaderPage"
import FooterPage from "../components/FooterPage"
import NotFoundPage from "./NotFoundPage"
import {Packet} from  "./Packet"
import { datas } from "./apidatas"
import "../index.css"

export default function Dashboard() {
    const [search, setSearch] = useState()
    
    const findData = datas.find((data) => data.name === datas)

    // const seacrhQuery = () => {
    //     setSearch()
    // }

    if(search !== findData) {
        return <NotFoundPage />
    } else {
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


}

