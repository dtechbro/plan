import Image from "next/image";
export default function PhotoGallery() {
  const photos = [
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">{`That's who we are`}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={photo}
                alt={`Couple photo ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
