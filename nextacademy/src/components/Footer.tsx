import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Our Institute</h2>
                    <p className="mb-4">Our institute is a leading hub for web and mobile app development education. We are committed to equipping our students with the skills and knowledge needed to excel in the rapidly evolving field of technology. Through hands-on learning experiences and expert guidance, we empower aspiring developers to build innovative solutions and shape the future of digital platforms.</p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Courses</a></li>
                        <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Faisalabad, pakistan</p>
                    <p>Samanabad</p>
                    <p>Email: info@developers.com</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© {currentYear} Developers. All rights reserved.</p>
        </footer>

    )
}