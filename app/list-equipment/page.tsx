"use client"
import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function ListEquipment() {
  const [form, setForm] = useState({
    company_name: "",
    contact_person: "",
    phone: "",
    email: "",
    cities_served: "",
    equipment_types: "",
    machine_count: ""
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.placeholder]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const { error } = await supabase.from("suppliers").insert([form])

    if (error) {
      alert(error.message)
    } else {
      alert("Details submitted!")
    }
  }

  return (
    <div className="min-h-screen p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">List Your Equipment</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border p-3 rounded" placeholder="company_name" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="contact_person" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="phone" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="email" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="cities_served" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="equipment_types" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="machine_count" onChange={handleChange}/>

        <button className="bg-black text-white p-3 rounded">
          Submit Details
        </button>
      </form>
    </div>
  )
}
