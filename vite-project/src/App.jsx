import React from "react"
import Navbar from "./components/Navbar"
import Travels from "./components/Travels"
import data from "./data"

export default function App() {
  const newData = data.map(function(item){
     return (
        <Travels 
          key={item.id}
          item={item}
          /> 
      ) 
  })
  return (
      <div>
          <Navbar />
          <section className="travel--list">
              {newData}
          </section>
      </div>

  )
}