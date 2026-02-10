"use client"
import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function PostRequirement() {

  const [form, setForm] = useState({
    equipment_type: "",
    quantity: "",
    city: "",
    start_date: "",
    duration: "",
    company_name: "",
    contact_person: "",
    phone: "",
    email: ""
  })

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.placeholder]: e.target.value,
    })
  }

  async function handleSubmit(e: any) {
    e.preventDefault()

    const { error } = await supabase
      .from("leads")
      .insert([form])

    if (error) {
      alert(error.message)
      return
    }

    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(form),
    })

    alert("Requirement submitted successfully!")
  }

  return (
    <div className="min-h-screen p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Post Equipment Requirement
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border p-3 rounded" placeholder="equipment_type" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="quantity" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="city" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="start_date" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="duration" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="company_name" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="contact_person" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="phone" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="email" onChange={handleChange}/>

        <button className="bg-black text-white p-3 rounded">
          Get Supplier Matches
        </button>
      </form>
    </div>
  )
}
