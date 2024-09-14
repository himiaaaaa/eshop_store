import { Facebook, Twitter, Instagram, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-white bg-[url('/footer-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4 col-span-2 mt-5">
            <a href="#" className="text-3xl font-bold text-white">Paws</a>
            <p className="text-gray-300">
              If you have any question, please contact us at{' '}
              <a href="mailto:support@gmail.com" className="text-orange-500 hover:underline">
                support@gmail.com
              </a>
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <address className="not-italic">10 saari, helsinki FI 00320</address>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <a href="tel:+16234567891011" className="hover:underline">(+0)023-123-4566</a>
              </li>
            </ul>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Twitter size={24} />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
              </li>
            </ul>
          </div>
          
          {['Corporate', 'Information', 'Services'].map((title, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <ul className="space-y-2">
                {[
                  'Careers', 'About Us', 'Contact Us', 'FAQs', 'Vendors', 'Affiliate Program',
                  'Online Store', 'Privacy Policy', 'Refund Policy', 'Shipping Policy', 'Terms of Service', 'Track Order',
                  'Grooming', 'Positive Dog Training', 'Veterinary Services', 'Petco Insurance', 'Pet Adoption', 'Resource Center'
                ].slice(index * 6, (index + 1) * 6).map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
    </footer>
  )
}