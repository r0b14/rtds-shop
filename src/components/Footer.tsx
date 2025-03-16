import { FaFacebookF, FaInstagram, FaPinterest, FaRegEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16">
      {/* Newsletter */}
      <div className="bg-black text-white py-10 px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-extrabold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full w-full max-w-md">
          <FaRegEnvelope className="text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-transparent focus:outline-none text-gray-800"
          />
        </div>
        <button className="bg-white text-black px-6 py-2 mt-4 rounded-full hover:bg-gray-200 transition">
          Subscribe to Newsletter
        </button>
      </div>

      {/* Informações e Links */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo e redes sociais */}
        <div>
          <h3 className="text-2xl font-bold">SHOP.CO</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-gray-600 hover:text-black transition cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-black transition cursor-pointer" />
            <FaPinterest className="text-gray-600 hover:text-black transition cursor-pointer" />
          </div>
        </div>

        {/* Links úteis */}
        <div>
          <h4 className="text-lg font-semibold mb-4">COMPANY</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Features</a></li>
            <li><a href="#" className="hover:text-black">Works</a></li>
            <li><a href="#" className="hover:text-black">Career</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">HELP</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Customer Support</a></li>
            <li><a href="#" className="hover:text-black">Delivery Details</a></li>
            <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">FAQ</h4>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li><a href="#" className="hover:text-black">Account</a></li>
            <li><a href="#" className="hover:text-black">Manage Deliveries</a></li>
            <li><a href="#" className="hover:text-black">Orders</a></li>
            <li><a href="#" className="hover:text-black">Payments</a></li>
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-300 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 max-w-7xl mx-auto px-6">
        <p>Shop.co © 2000-2023. All Rights Reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Apple_Pay_logo.svg" alt="Apple Pay" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Google_Pay_Logo.svg" alt="Google Pay" className="h-5" />
        </div>
      </div>
    </footer>
  )
}
