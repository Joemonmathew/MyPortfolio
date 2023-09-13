import React from "react";
import MainContent from './components/MainContent/page'
import Sidebar from "./components/Sidebar/page";
export default function Home() {
  return (
   <div className="flex">
     <Sidebar />
    <MainContent />
   </div>
  )
}
