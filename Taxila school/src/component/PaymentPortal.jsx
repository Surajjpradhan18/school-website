import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CreditCard, DollarSign, Calendar, CheckCircle2 } from 'lucide-react';

const PaymentPortal = () => {
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState({
    studentId: '',
    studentName: '',
    feeType: '',
    amount: '',
    paymentMethod: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  const feeStructure = {
    'Registration Fee': 5000,
    'Monthly Fee - Nursery/KG': 3000,
    'Monthly Fee - Class 1-3': 3500,
    'Monthly Fee - Class 4-5': 4000,
    'Annual Fee': 15000,
    'Transport Fee (Monthly)': 2000,
    'Exam Fee': 1500,
    'Sports Fee': 1000,
    'Library Fee': 500
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({ ...prev, [name]: value }));

    if (name === 'feeType' && feeStructure[value]) {
      setPaymentData(prev => ({ ...prev, amount: feeStructure[value].toString() }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['studentId', 'studentName', 'feeType', 'amount', 'paymentMethod'];
    const emptyFields = requiredFields.filter(field => !paymentData[field]);
    
    if (emptyFields.length > 0) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (paymentData.paymentMethod === 'card') {
      if (!paymentData.cardNumber || !paymentData.cardName || !paymentData.expiryDate || !paymentData.cvv) {
        toast({
          title: "Card Details Required",
          description: "Please fill in all card details",
          variant: "destructive"
        });
        return;
      }
    }

    if (paymentData.paymentMethod === 'upi' && !paymentData.upiId) {
      toast({
        title: "UPI ID Required",
        description: "Please enter your UPI ID",
        variant: "destructive"
      });
      return;
    }

    // Save payment to localStorage
    const savedPayments = JSON.parse(localStorage.getItem('feePayments') || '[]');
    const payment = {
      ...paymentData,
      transactionId: `TXN${Date.now()}`,
      paymentDate: new Date().toISOString(),
      status: 'Success'
    };
    savedPayments.push(payment);
    localStorage.setItem('feePayments', JSON.stringify(savedPayments));

    toast({
      title: "Payment Successful!",
      description: `Transaction ID: ${payment.transactionId}. Amount: ₹${paymentData.amount}`,
      duration: 5000
    });

    // Reset form
    setPaymentData({
      studentId: '',
      studentName: '',
      feeType: '',
      amount: '',
      paymentMethod: '',
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      upiId: ''
    });
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <CreditCard className="w-8 h-8 text-blue-600" />
        <h3 className="text-3xl font-bold text-gray-800">Fee Payment Portal</h3>
      </div>

      {/* Fee Structure Display */}
      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-blue-600" />
          Fee Structure
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(feeStructure).map(([feeType, amount]) => (
            <div key={feeType} className="flex justify-between items-center bg-white p-3 rounded-lg">
              <span className="text-gray-700 font-medium">{feeType}</span>
              <span className="text-blue-600 font-bold">₹{amount}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Details */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Student Details</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="studentId" className={labelClasses}>Student ID *</Label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={paymentData.studentId}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter student ID"
                required
              />
            </div>

            <div>
              <Label htmlFor="studentName" className={labelClasses}>Student Name *</Label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={paymentData.studentName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter student name"
                required
              />
            </div>
          </div>
        </div>

        {/* Fee Details */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Fee Details</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="feeType" className={labelClasses}>Fee Type *</Label>
              <select
                id="feeType"
                name="feeType"
                value={paymentData.feeType}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="">Select Fee Type</option>
                {Object.keys(feeStructure).map((fee) => (
                  <option key={fee} value={fee}>{fee}</option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="amount" className={labelClasses}>Amount (₹) *</Label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={paymentData.amount}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Amount"
                required
                readOnly={!!feeStructure[paymentData.feeType]}
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h4>
          
          <div className="mb-4">
            <Label className={labelClasses}>Select Payment Method *</Label>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => setPaymentData(prev => ({ ...prev, paymentMethod: 'card' }))}
                className={`p-4 border-2 rounded-lg transition-all ${
                  paymentData.paymentMethod === 'card'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <CreditCard className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-800">Debit/Credit Card</p>
              </button>

              <button
                type="button"
                onClick={() => setPaymentData(prev => ({ ...prev, paymentMethod: 'upi' }))}
                className={`p-4 border-2 rounded-lg transition-all ${
                  paymentData.paymentMethod === 'upi'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-800">UPI</p>
              </button>

              <button
                type="button"
                onClick={() => setPaymentData(prev => ({ ...prev, paymentMethod: 'netbanking' }))}
                className={`p-4 border-2 rounded-lg transition-all ${
                  paymentData.paymentMethod === 'netbanking'
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-400'
                }`}
              >
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <p className="font-semibold text-gray-800">Net Banking</p>
              </button>
            </div>
          </div>

          {/* Card Details */}
          {paymentData.paymentMethod === 'card' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="md:col-span-2">
                <Label htmlFor="cardNumber" className={labelClasses}>Card Number *</Label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="1234 5678 9012 3456"
                  maxLength="16"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="cardName" className={labelClasses}>Cardholder Name *</Label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Name on card"
                />
              </div>

              <div>
                <Label htmlFor="expiryDate" className={labelClasses}>Expiry Date *</Label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={paymentData.expiryDate}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>

              <div>
                <Label htmlFor="cvv" className={labelClasses}>CVV *</Label>
                <input
                  type="password"
                  id="cvv"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="123"
                  maxLength="3"
                />
              </div>
            </motion.div>
          )}

          {/* UPI Details */}
          {paymentData.paymentMethod === 'upi' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
            >
              <Label htmlFor="upiId" className={labelClasses}>UPI ID *</Label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                value={paymentData.upiId}
                onChange={handleChange}
                className={inputClasses}
                placeholder="yourname@upi"
              />
            </motion.div>
          )}

          {/* Net Banking */}
          {paymentData.paymentMethod === 'netbanking' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-center p-6 bg-blue-50 rounded-lg"
            >
              <p className="text-gray-700">You will be redirected to your bank's secure payment gateway</p>
            </motion.div>
          )}
        </div>

        <div className="pt-6">
          <Button
            type="submit"
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-lg"
          >
            Pay ₹{paymentData.amount || '0'}
          </Button>
          <p className="text-sm text-gray-500 text-center mt-4">
            All transactions are secure and encrypted
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default PaymentPortal;