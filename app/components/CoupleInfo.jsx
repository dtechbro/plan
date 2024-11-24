import Image from "next/image";


export default function CoupleInfo() {

  const coupleInfo = [
    {
      name: "HER",
      role: "Bride",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "Here you can write a short text about yourself.",
    },
    {
      name: "ME",
      role: "Groom",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Here you can write a short text about yourself.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {coupleInfo.map((person) => (
            <div key={person.name} className="text-center">
              <div className="relative w-64 h-64 mx-auto mb-6">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-2xl mb-2">{person.name}</h3>
              <p className="text-gray-500 mb-4">{person.role}</p>
              <p className="text-gray-600">{person.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
