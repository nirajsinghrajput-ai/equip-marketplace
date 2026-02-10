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
    setForm({ ...form, [e.target.placeholder]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const { error } = await supabase.from("leads").insert([form])

    if (error) {
      alert(error.message)
      return
    }

    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(form),
    })

    alert("Requirement submitted!")
  }

  return (
    <div className="min-h-screen p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Post Equipment Requirement</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border p-3 rounded" placeholder="equipment_type" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="quantity" onChange={handleChange}/>
        <input className="border p-3 rounded" placeholder="city"
