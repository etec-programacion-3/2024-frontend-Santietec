import React from 'react';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Legal Notices</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Mobile</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">iOS App</a></li>
              <li><a href="#" className="hover:text-white">Android App</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Netflix Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
