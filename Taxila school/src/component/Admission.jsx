import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AdmissionForm from '@/components/AdmissionForm';
import PaymentPortal from '@/components/PaymentPortal';

const Admission = () => {
  return (
    <section id="admission" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Admission Portal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the Taxila family. Apply online and secure your child's future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {/* Side Image for Authenticity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:col-span-1 sticky top-24"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
              <img 
                className="w-full h-[600px] object-cover" 
                alt="Indian student studying"
               src="https://images.unsplash.com/photo-1629872430082-93d8912beccf" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Need Help?</h4>
              <p className="text-gray-600 text-sm mb-2">Contact our admission office:</p>
              <p className="text-blue-700 font-semibold">+91 98765 43210</p>
            </div>
          </motion.div>

          {/* Tabs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Tabs defaultValue="admission" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 h-14 bg-white shadow-sm p-1">
                <TabsTrigger value="admission" className="text-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white">Admission Form</TabsTrigger>
                <TabsTrigger value="payment" className="text-lg data-[state=active]:bg-green-600 data-[state=active]:text-white">Fee Payment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="admission">
                <AdmissionForm />
              </TabsContent>
              
              <TabsContent value="payment">
                <PaymentPortal />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Admission;