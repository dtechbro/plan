'use client'

import { useState } from "react"

export default function RSVPForm() {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   message: ''
 })
  const handleSubmit = (e) => {
   e.preventDefault()
   // Handle form submission
   console.log(formData)
 }
  return (
   <section id="rsvp" className="py-20">
     <div className="max-w-xl mx-auto px-4">
       <h2 className="text-3xl text-center mb-12">Please let us know if you will be with us!</h2>
       
       <form onSubmit={handleSubmit} className="space-y-6">
         <div>
           <input
             type="text"
             placeholder="Name"
             className="w-full p-3 border rounded-md"
             value={formData.name}
             onChange={(e) => setFormData({...formData, name: e.target.value})}
           />
         </div>
         <div>
           <input
             type="email"
             placeholder="Email"
             className="w-full p-3 border rounded-md"
             value={formData.email}
             onChange={(e) => setFormData({...formData, email: e.target.value})}
           />
         </div>
         <div>
           <textarea
             placeholder="Message"
             className="w-full p-3 border rounded-md"
             rows={4}
             value={formData.message}
             onChange={(e) => setFormData({...formData, message: e.target.value})}
           />
         </div>
         <button
           type="submit"
           className="w-full bg-sage-600 text-white py-3 rounded-md hover:bg-sage-700 transition"
         >
           Send
         </button>
       </form>
     </div>
   </section>
  );
}
