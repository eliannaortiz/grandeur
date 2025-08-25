import React, { useState } from 'react';
import { Menu, X, Star, MapPin, Phone, Mail, Wifi, Car, Coffee, Dumbbell, Utensils, Space as Spa, Calendar, Users, Award, ChefHat, Clock, DollarSign, Wine, Leaf, Heart, Shield, Droplets, Sun, TreePine, Building, Camera, FileText, Send, Bed, CheckCircle, Mountain, Camera as CameraIcon, Utensils as UtensilsIcon, ShoppingBag, Map, Globe, Users as UsersIcon, Palette, Compass, CreditCard, User } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };

  const openAvailabilityModal = (roomType: string) => {
    setSelectedRoom(roomType);
    setShowAvailabilityModal(true);
  };

  const closeAvailabilityModal = () => {
    setShowAvailabilityModal(false);
    setSelectedRoom('');
  };

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav id="home" className="absolute top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-2xl md:text-3xl tracking-tight">
            Grandeur
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-200 transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('rooms')} className="hover:text-amber-200 transition-colors duration-300">Rooms</button>
            <button onClick={() => scrollToSection('amenities')} className="hover:text-amber-200 transition-colors duration-300">Amenities</button>
            <button onClick={() => scrollToSection('dining')} className="hover:text-amber-200 transition-colors duration-300">Dining</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-200 transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-200 transition-colors duration-300">Contact</button>
          </div>

          {/* Book Now Button */}
          <button className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            <Compass className="w-5 h-5" />
            Book Now
          </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-md">
          <div className="flex flex-col space-y-4 px-6 py-8 text-white">
            <button onClick={() => scrollToSection('home')} className="hover:text-amber-200 transition-colors duration-300 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('rooms')} className="hover:text-amber-200 transition-colors duration-300 w-full text-left">Rooms</button>
            <button onClick={() => scrollToSection('amenities')} className="hover:text-amber-200 transition-colors duration-300 w-full text-left">Amenities</button>
            <button onClick={() => scrollToSection('dining')} className="hover:text-amber-200 transition-colors duration-300 w-full text-left">Dining</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-amber-200 transition-colors duration-300 w-full text-left">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-amber-200 transition-colors duration-300 w-full text-left">Contact</button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 mt-4 self-start">
              Book Now
            </button>
          </div>
        </div>
      )}

    {/* Hero Section */}
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')`
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Experience
          <span className="block text-amber-400">Luxury Redefined</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Indulge in the ultimate escape where every detail is crafted to perfection and every moment becomes an unforgettable memory.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={openBookingModal}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Book Your Stay
          </button>
          <button 
            onClick={() => scrollToSection('rooms')}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Rooms
          </button>
        </div>

        {/* Quick Info */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300">
            <Star className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <div className="text-2xl font-bold">5★</div>
            <div className="text-sm opacity-80">Luxury Rating</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300">
            <Users className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <div className="text-2xl font-bold">250+</div>
            <div className="text-sm opacity-80">Rooms & Suites</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <div className="text-2xl font-bold">Prime</div>
            <div className="text-sm opacity-80">Location</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4 hover:bg-opacity-20 transition-all duration-300">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-amber-400" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm opacity-80">Concierge</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>

    {/* Quick Booking Bar */}
    <section className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-amber-400" />
            <span className="font-medium">Reserve by Phone: </span>
            <a href="tel:+1234567890" className="text-amber-400 hover:text-amber-300 transition-colors">
              +1 (234) 567-8900
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@grandeurhotel.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Downtown District</span>
              </div>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Rooms & Accommodations Section */}
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exquisite <span className="text-amber-500">Accommodations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each room is a sanctuary of comfort and elegance, meticulously designed to provide 
            an unparalleled experience of luxury and tranquility.
          </p>
        </div>

        {/* Featured Room */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-96 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Presidential Suite"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Featured Suite
                </div>
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
                  From ₹59,999/night
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Presidential Suite
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  The pinnacle of luxury living with panoramic city views, marble bathrooms, 
                  private balcony, and personalized concierge service. Experience unmatched 
                  elegance in our crown jewel accommodation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-5 h-5 text-amber-500" />
                    <span>Up to 4 guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    <span>City view</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-amber-500" />
                    <span>Premium amenities</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    <span>24/7 service</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Book Now
                  </button>
                  <button className="border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-500 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Deluxe Ocean View */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Deluxe Ocean View"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-2xl font-bold">₹33,999</div>
                <div className="text-sm">per night</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Deluxe Ocean View</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Wake up to breathtaking ocean vistas in this elegantly appointed room featuring modern amenities and coastal-inspired décor.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">2 guests</span>
              </div>
              <button 
                onClick={() => openAvailabilityModal('Ocean View Suite')}
                className="w-full bg-gray-900 hover:bg-amber-500 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Reserve Room
              </button>
            </div>
          </div>

          {/* Executive Suite */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Executive Suite"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-2xl font-bold">₹74,999</div>
                <div className="text-sm">per night</div>
              </div>
              <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Executive Suite</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Spacious suite with separate living area, premium furnishings, and exclusive access to executive lounge privileges.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">3 guests</span>
              </div>
              <button 
                onClick={() => openAvailabilityModal('Deluxe Garden Room')}
                className="w-full bg-gray-900 hover:bg-amber-500 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Reserve Room
              </button>
            </div>
          </div>

          {/* Garden Villa */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Garden Villa"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-2xl font-bold">₹1,09,999</div>
                <div className="text-sm">per night</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Garden Villa</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Private villa surrounded by lush gardens with outdoor terrace, perfect for those seeking tranquility and natural beauty.
              </p>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">4 guests</span>
              </div>
              <button 
                onClick={() => openAvailabilityModal('Presidential Suite')}
                className="w-full bg-gray-900 hover:bg-amber-500 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Reserve Room
              </button>
            </div>
          </div>
        </div>

        {/* View All Rooms CTA */}
        <div className="text-center mt-16">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            View All Accommodations
          </button>
        </div>
      </div>
    </section>

    {/* Amenities & Services Section */}
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            World-Class <span className="text-amber-500">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in unparalleled luxury with our comprehensive collection of 
            premium amenities and personalized services designed to exceed every expectation.
          </p>
        </div>

        {/* Featured Amenity - Spa & Wellness */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Luxury Spa"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </div>
              <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Spa className="w-8 h-8 text-amber-400" />
                  <span className="text-amber-400 font-medium text-lg">Featured Experience</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Serenity Spa & Wellness Center
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Rejuvenate your mind, body, and soul in our award-winning spa featuring 
                  therapeutic treatments, meditation gardens, and state-of-the-art wellness facilities. 
                  Experience tranquility like never before.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">12</div>
                    <div className="text-sm text-gray-400">Treatment Rooms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">24/7</div>
                    <div className="text-sm text-gray-400">Wellness Access</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">5★</div>
                    <div className="text-sm text-gray-400">Spa Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-400">Expert</div>
                    <div className="text-sm text-gray-400">Therapists</div>
                  </div>
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl self-start">
                  Book Spa Treatment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Fitness Center */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
              <Dumbbell className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fitness Center</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              State-of-the-art equipment and personal training services available 24/7.
            </p>
            <div className="text-sm text-amber-500 font-medium">Open 24/7</div>
          </div>

          {/* Fine Dining */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
              <Utensils className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fine Dining</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Award-winning restaurants featuring world-class cuisine and sommelier-selected wines.
            </p>
            <div className="text-sm text-amber-500 font-medium">3 Restaurants</div>
          </div>

          {/* Pool & Beach */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
              <Droplets className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pool & Beach</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Infinity pool with ocean views and private beach access with luxury cabanas.
            </p>
            <div className="text-sm text-amber-500 font-medium">Private Beach</div>
          </div>

          {/* Concierge */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
              <Shield className="w-8 h-8 text-amber-500 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Concierge</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Personalized service to arrange experiences, reservations, and special requests.
            </p>
            <div className="text-sm text-amber-500 font-medium">24/7 Service</div>
          </div>
        </div>

        {/* Services Showcase */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium <span className="text-amber-500">Services</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every detail is thoughtfully curated to ensure your stay exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Wifi className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">High-Speed WiFi</h4>
              <p className="text-sm text-gray-600">Complimentary throughout property</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Car className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Valet Parking</h4>
              <p className="text-sm text-gray-600">Secure covered parking</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Coffee className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Room Service</h4>
              <p className="text-sm text-gray-600">24-hour gourmet dining</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Prime Location</h4>
              <p className="text-sm text-gray-600">Heart of the city center</p>
            </div>
          </div>
        </div>

        {/* Experience More CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Experience Luxury Beyond Imagination
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Discover all the ways we can make your stay extraordinary with our complete amenities guide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                View All Amenities
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105">
                Plan Your Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Dining & Culinary Experiences Section */}
    <section id="dining" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Area */}
        <div className="relative mb-20 rounded-3xl overflow-hidden h-96 bg-gradient-to-r from-black/60 to-black/30">
          <div 
            className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
            }}
          />
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                A Culinary Journey
                <span className="block text-amber-400">Awaits</span>
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Indulge in world-class dining experiences crafted by renowned chefs using the finest ingredients
              </p>
            </div>
          </div>
        </div>

        {/* Restaurant Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Fine Dining Restaurant */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Le Grandeur Fine Dining"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Michelin Recommended
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Le Grandeur</h3>
              <p className="text-gray-600 mb-4">
                Exquisite French cuisine in an elegant atmosphere. Our signature restaurant offers a sophisticated dining experience with panoramic city views.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>6:00 PM - 11:00 PM | Dress Code: Smart Casual</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold">
                  View Menu
                </button>
                <button className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 font-semibold">
                  Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Rooftop Bar */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sky Lounge Rooftop Bar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Rooftop Views
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sky Lounge</h3>
              <p className="text-gray-600 mb-4">
                Craft cocktails and light bites with breathtaking 360° city views. The perfect spot for sunset drinks and sophisticated evenings.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>5:00 PM - 2:00 AM | Smart Casual</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold">
                  View Menu
                </button>
                <button className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 font-semibold">
                  Reserve
                </button>
              </div>
            </div>
          </div>

          {/* Casual Bistro */}
          <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Garden Bistro"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Garden Terrace
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Garden Bistro</h3>
              <p className="text-gray-600 mb-4">
                Fresh, seasonal cuisine in a relaxed garden setting. Perfect for breakfast, lunch, or a casual dinner with family and friends.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="w-4 h-4 mr-2" />
                <span>7:00 AM - 10:00 PM | Casual</span>
              </div>
              <div className="flex space-x-3">
                <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold">
                  View Menu
                </button>
                <button className="flex-1 border border-amber-600 text-amber-600 py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors duration-300 font-semibold">
                  Reserve
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chef's Spotlight */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-20 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Chef's Spotlight</h3>
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mr-6 border-4 border-amber-400">
                  <img 
                    src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Chef Marcus Laurent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-amber-400">Chef Marcus Laurent</h4>
                  <p className="text-gray-300">Executive Chef & Culinary Director</p>
                </div>
              </div>
              <blockquote className="text-lg italic text-gray-200 mb-6">
                "Cooking is not just about feeding the body, but nourishing the soul. Every dish tells a story, and I'm honored to share these culinary narratives with our guests."
              </blockquote>
              <div className="flex items-center text-amber-400">
                <Award className="w-5 h-5 mr-2" />
                <span className="font-semibold">James Beard Award Winner | 15+ Years Michelin Experience</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef in kitchen"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white p-4 rounded-2xl shadow-lg">
                <Star className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Special Events & Tastings */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Special Events & Tastings</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for exclusive culinary experiences that celebrate the art of fine dining
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wine Tasting Event */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wine Tasting"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Limited Seats
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Sommelier's Wine Tasting</h4>
              <p className="text-gray-600 mb-4">
                An intimate evening exploring rare vintages paired with artisanal cheeses and canapés.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Every Friday | 7:00 PM - 9:00 PM | $85 per person</span>
              </div>
              <button className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold">
                Book Experience
              </button>
            </div>
          </div>

          {/* Cooking Class */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <img 
                src="https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cooking Class"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Hands-On
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">Chef's Table Cooking Class</h4>
              <p className="text-gray-600 mb-4">
                Learn the secrets behind our signature dishes in an interactive cooking experience.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Saturdays | 2:00 PM - 5:00 PM | $125 per person</span>
              </div>
              <button className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors duration-300 font-semibold">
                Book Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Meetings & Events Section */}
    <section id="meetings-events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Area */}
        <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
          <img
            src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Elegant ballroom setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
            <div className="max-w-3xl mx-auto px-8 text-center text-white">
              <h2 className="text-5xl font-bold mb-6">Host Your Unforgettable Event</h2>
              <p className="text-xl leading-relaxed">
                From intimate boardroom meetings to grand celebrations, our versatile venues and dedicated team ensure every detail exceeds expectations.
              </p>
            </div>
          </div>
        </div>

        {/* Event Venues */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Premier Event Venues</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of sophisticated spaces, each designed to create the perfect atmosphere for your occasion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Grand Ballroom */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Grand Ballroom"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Premium Venue
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Grand Ballroom</h4>
                <p className="text-gray-600 mb-4">
                  Our flagship venue featuring crystal chandeliers, marble floors, and panoramic city views.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Banquet Style:</span>
                    <span className="font-medium">400 guests</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Theater Style:</span>
                    <span className="font-medium">600 guests</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Square Footage:</span>
                    <span className="font-medium">5,000 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Features:</span>
                    <span className="font-medium">AV System, Natural Light</span>
                  </div>
                </div>
                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors duration-200 mb-2">
                  View Floor Plan
                </button>
              </div>
            </div>

            {/* Executive Boardroom */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Executive Boardroom"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Business Focus
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Executive Boardroom</h4>
                <p className="text-gray-600 mb-4">
                  Sophisticated meeting space with state-of-the-art technology and premium furnishings.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Boardroom Style:</span>
                    <span className="font-medium">24 guests</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">U-Shape:</span>
                    <span className="font-medium">18 guests</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Square Footage:</span>
                    <span className="font-medium">800 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Features:</span>
                    <span className="font-medium">Video Conferencing, WiFi</span>
                  </div>
                </div>
                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors duration-200 mb-2">
                  View Floor Plan
                </button>
              </div>
            </div>

            {/* Garden Pavilion */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Garden Pavilion"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Outdoor Venue
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Garden Pavilion</h4>
                <p className="text-gray-600 mb-4">
                  Enchanting outdoor venue surrounded by manicured gardens, perfect for ceremonies and receptions.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Reception Style:</span>
                    <span className="font-medium">200 guests</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Ceremony Style:</span>
                    <span className="font-medium">150 guests</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Square Footage:</span>
                    <span className="font-medium">3,000 sq ft</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Features:</span>
                    <span className="font-medium">Garden Views, Weather Backup</span>
                  </div>
                </div>
                <button className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors duration-200 mb-2">
                  View Floor Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Event Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Event Services</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team provides end-to-end support to ensure your event runs flawlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Dedicated Event Planner</h4>
              <p className="text-gray-600 text-sm">
                Personal coordinator from planning to execution
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Catering</h4>
              <p className="text-gray-600 text-sm">
                Tailored menus from our award-winning chefs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Support</h4>
              <p className="text-gray-600 text-sm">
                Full AV equipment and on-site tech assistance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Group Accommodations</h4>
              <p className="text-gray-600 text-sm">
                Special rates for event attendees
              </p>
            </div>
          </div>
        </div>

        {/* Past Events Gallery */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Past Events Gallery</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the versatility and elegance of our venues through successful events we've hosted.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Corporate Gala"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-semibold mb-1">Corporate Gala</h4>
                  <p className="text-sm opacity-90">Annual Awards Ceremony - 350 guests</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Garden Wedding"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-semibold mb-1">Garden Wedding</h4>
                  <p className="text-sm opacity-90">Romantic Ceremony - 120 guests</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                alt="Business Conference"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-semibold mb-1">Tech Conference</h4>
                  <p className="text-sm opacity-90">3-Day Summit - 500 attendees</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Event Organizers Say</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The Grand Ballroom exceeded our expectations. The attention to detail and professional service made our annual gala unforgettable. Our guests are still talking about it!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Sarah Mitchell</h5>
                  <p className="text-sm text-gray-600">Event Director, TechCorp</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "From the initial planning to the final toast, everything was flawless. The Garden Pavilion provided the perfect romantic setting for our daughter's wedding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h5 className="font-semibold text-gray-900">Robert Chen</h5>
                  <p className="text-sm text-gray-600">Father of the Bride</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RFP Form */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h3>
          <p className="text-xl mb-8 opacity-90">
            Submit a Request for Proposal and let our expert team create a customized package for your special occasion.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="Event Type"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Expected Guests"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <textarea
              placeholder="Tell us about your event vision and requirements..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white mb-6"
            ></textarea>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg">
              Submit RFP Request
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* About & Experience Section */}
    <section id="about" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-amber-500"></div>
              <span className="text-amber-400 font-medium text-lg">Our Story</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Where <span className="text-amber-400">Timeless Elegance</span> Meets Modern Luxury
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              For over three decades, Grandeur has been the epitome of sophisticated hospitality, 
              welcoming discerning travelers from around the world to experience unparalleled luxury 
              in the heart of the city.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our commitment to excellence is reflected in every detail, from our meticulously appointed 
              accommodations to our world-class amenities. We believe that true luxury lies not just in 
              opulent surroundings, but in the personalized service and unforgettable experiences we create 
              for each guest.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">30+</div>
                <div className="text-sm text-gray-400">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">50K+</div>
                <div className="text-sm text-gray-400">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Discover Our Heritage
            </button>
          </div>
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
              <img 
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Hotel Heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-4">
                  <div className="text-white font-bold text-lg mb-1">Est. 1990</div>
                  <div className="text-gray-200 text-sm">Three decades of hospitality excellence</div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>

        {/* Location & Attractions */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Prime <span className="text-amber-400">Location</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Perfectly positioned in the vibrant heart of the city, with world-class attractions, 
              shopping, and cultural experiences just moments away.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Business District */}
            <div className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-500 bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                <MapPin className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Business District</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Walking distance to major corporate offices and financial centers.
              </p>
              <div className="text-amber-400 text-sm font-medium">2 min walk</div>
            </div>

            {/* Shopping & Dining */}
            <div className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-500 bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                <Utensils className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Shopping & Dining</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Premium shopping districts and Michelin-starred restaurants nearby.
              </p>
              <div className="text-amber-400 text-sm font-medium">5 min walk</div>
            </div>

            {/* Cultural Sites */}
            <div className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-500 bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                <Star className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Cultural Sites</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Museums, theaters, and historic landmarks within easy reach.
              </p>
              <div className="text-amber-400 text-sm font-medium">10 min walk</div>
            </div>

            {/* Transportation */}
            <div className="group bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-10 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-500 bg-opacity-20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-opacity-30 transition-all duration-300">
                <Car className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Transportation</h4>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Direct access to metro stations and major transportation hubs.
              </p>
              <div className="text-amber-400 text-sm font-medium">3 min walk</div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Preview */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Experience <span className="text-amber-400">Gallery</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A glimpse into the extraordinary experiences and breathtaking spaces that await you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Large Featured Image */}
            <div className="col-span-2 row-span-2 relative group cursor-pointer overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Hotel Lobby"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="text-2xl font-bold mb-2">Grand Lobby</div>
                  <div className="text-sm">Click to explore</div>
                </div>
              </div>
            </div>

            {/* Smaller Gallery Images */}
            <div className="relative group cursor-pointer overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Luxury Suite"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="font-bold">Suite</div>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Spa"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="font-bold">Spa</div>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Restaurant"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="font-bold">Dining</div>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer overflow-hidden rounded-xl">
              <img 
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                alt="Pool"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="font-bold">Pool</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              View Full Gallery
            </button>
          </div>
        </div>

        {/* Trust & Recognition */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Recognized Excellence
          </h3>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Our commitment to exceptional service has earned recognition from prestigious organizations worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-white font-bold text-lg">Forbes 5-Star</div>
              <div className="text-white opacity-80 text-sm">Luxury Hotel</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-white font-bold text-lg">AAA Diamond</div>
              <div className="text-white opacity-80 text-sm">Five Diamond</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-white font-bold text-lg">TripAdvisor</div>
              <div className="text-white opacity-80 text-sm">Travelers' Choice</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-white font-bold text-lg">Condé Nast</div>
              <div className="text-white opacity-80 text-sm">Gold List</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact & Reservation Section */}
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-amber-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team is available 24/7 to assist with reservations, special requests, 
            and to help plan your perfect luxury escape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 transform hover:scale-[1.02] transition-all duration-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Reservations</h4>
                    <p className="text-gray-600 mb-1">24/7 Booking Hotline</p>
                    <a href="tel:+1234567890" className="text-amber-500 hover:text-amber-600 font-medium text-lg transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600 mb-1">General Inquiries</p>
                    <a href="mailto:info@grandeurhotel.com" className="text-amber-500 hover:text-amber-600 font-medium transition-colors">
                      info@grandeurhotel.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600 leading-relaxed">
                      123 Luxury Boulevard<br />
                      Downtown District<br />
                      Metropolitan City, MC 12345
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                    <Calendar className="w-6 h-6 text-amber-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Concierge Hours</h4>
                    <p className="text-gray-600">Available 24/7</p>
                    <p className="text-sm text-gray-500 mt-1">Front desk always staffed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Booking Form */}
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-2">Quick Reservation</h3>
              <p className="text-gray-300 mb-8">Secure your luxury escape in just a few clicks</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Check-in</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Check-out</label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
                    <select className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300">
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Room Type</label>
                    <select className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300">
                      <option value="deluxe">Deluxe Room</option>
                      <option value="suite">Executive Suite</option>
                      <option value="villa">Garden Villa</option>
                      <option value="presidential">Presidential Suite</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Special Requests</label>
                  <textarea 
                    rows={3}
                    placeholder="Anniversary celebration, dietary requirements, accessibility needs..."
                    className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Check Availability & Rates
                </button>
                
                <p className="text-center text-sm text-gray-400">
                  Or call <a href="tel:+1234567890" className="text-amber-400 hover:text-amber-300 transition-colors">+1 (234) 567-8900</a> for immediate assistance
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Hotel Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-6 text-amber-400">Grandeur</div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              Experience unparalleled luxury in the heart of the city. For over three decades, 
              Grandeur has been the epitome of sophisticated hospitality, creating unforgettable 
              memories for discerning travelers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#rooms" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Accommodations</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Amenities</a></li>
              <li><a href="#dining" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Dining</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Gallery</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Spa & Wellness</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-amber-400">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Concierge</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Room Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Valet Parking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Airport Transfer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Business Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Laundry Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Pet Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors duration-300">Wedding Planning</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Stay Connected</h3>
              <p className="text-white opacity-90 mb-8 text-lg max-w-2xl mx-auto">
                Subscribe to receive exclusive offers, luxury travel tips, and be the first to know about our special events and packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300"
                />
                <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-white opacity-70 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Grandeur Hotel. All rights reserved. | 
              <a href="#" className="hover:text-amber-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-amber-400 transition-colors ml-1">Terms of Service</a> | 
              <a href="#" className="hover:text-amber-400 transition-colors ml-1">Accessibility</a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Forbes 5-Star</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Book Your Stay</h2>
                <button 
                  onClick={closeBookingModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Check-in Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Adults
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Children
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>0 Children</option>
                      <option>1 Child</option>
                      <option>2 Children</option>
                      <option>3 Children</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Room Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>Ocean View Suite</option>
                    <option>Deluxe Garden Room</option>
                    <option>Presidential Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Any special requests or preferences..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={closeBookingModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-4 h-4" />
                    Complete Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Availability Modal */}
      {showAvailabilityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Check Availability</h2>
                <button 
                  onClick={closeAvailabilityModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="mb-4 p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-amber-800">Selected Room:</h3>
                <p className="text-amber-700">{selectedRoom}</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Check-in Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Adults
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Children
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>0 Children</option>
                      <option>1 Child</option>
                      <option>2 Children</option>
                      <option>3 Children</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="button"
                    onClick={closeAvailabilityModal}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-300"
                  >
                    Check Availability
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default App;