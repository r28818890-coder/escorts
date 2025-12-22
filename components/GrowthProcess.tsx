import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle } from 'lucide-react';

const GrowthProcess: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="w-full lg:w-1/2"
           >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us.</h2>
              <div className="h-2 w-24 bg-black mb-8"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At <span className="font-bold text-gray-900">Business Nesta</span>, we believe that every business deserves the right guidance and resources to grow with confidence. We are a trusted business consultancy dedicated to supporting both newly registered startups and established businesses in achieving their goals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                What sets us apart is our end-to-end approach. Whether you are just starting out or looking to expand, we act as your reliable partner, offering professional guidance, seamless processes, and innovative solutions tailored to your needs.
              </p>
              <div className="bg-gray-50 border-l-4 border-black p-6 italic text-gray-800 font-medium">
                "To make business success easier, faster, and sustainable for every entrepreneur we serve."
              </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
           >
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg shadow-lg" alt="Consulting" />
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg shadow-lg mt-8" alt="Teamwork" />
           </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gray-900 text-white p-10 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={150} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white text-black p-3 rounded-full">
                  <Target size={24} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-widest">Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower startups and businesses with the right guidance, resources, and strategies by providing end-to-end consultancy services in registration, compliance, funding, and digital growth. We aim to simplify business processes.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white border-2 border-gray-100 p-10 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye size={150} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-black text-white p-3 rounded-full">
                  <Eye size={24} />
                </div>
                <h3 className="text-3xl font-bold uppercase tracking-widest text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become a leading business consultancy in India, recognized for trust, innovation, and results. We envision a future where every entrepreneur has access to the right tools and support to turn ideas into successful enterprises.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default GrowthProcess;