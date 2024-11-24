export default function WeddingDetails() {
  return (
    <section id="details" className="py-20 bg-sage-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:-cols-2 gap-12">
         <div className="text-center">
           <h3 className="text-2xl mb-6">Wedding ceremony</h3>
           <div className="space-y-4">
             <div>
               <p className="font-semibold">Location:</p>
               <p>123 Wedding Ave, New York, NY, USA</p>
             </div>
             <div>
               <p className="font-semibold">Date:</p>
               <p>25.05.2025</p>
             </div>
           </div>
         </div>
         
         <div className="text-center">
           <h3 className="text-2xl mb-6">Wedding party</h3>
           <div className="space-y-4">
             <div>
               <p className="font-semibold">Location:</p>
               <p>456 Reception Blvd, New York, NY, USA</p>
             </div>
             <div>
               <p className="font-semibold">Date:</p>
               <p>25.05.2025</p>
             </div>
           </div>
         </div>
       </div>
       
       <div className="text-center mt-12">
         <p className="text-xl">We hope you will be with us on this day!</p>
       </div>
     </div>
   </section>
  );
}
