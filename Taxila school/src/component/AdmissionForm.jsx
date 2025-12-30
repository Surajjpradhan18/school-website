import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { User, Calendar, Users, Phone, Mail, MapPin, FileText } from 'lucide-react';

const AdmissionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    dateOfBirth: '',
    gender: '',
    fatherName: '',
    motherName: '',
    guardianPhone: '',
    guardianEmail: '',
    address: '',
    classApplying: '',
    previousSchool: '',
    bloodGroup: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    const requiredFields = ['studentName', 'dateOfBirth', 'gender', 'fatherName', 'motherName', 'guardianPhone', 'address', 'classApplying'];
    const emptyFields = requiredFields.filter(field => !formData[field]);
    
    if (emptyFields.length > 0) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      return;
    }

    // Generate student ID if not provided
    const studentId = formData.studentId || `TXL${Date.now().toString().slice(-6)}`;
    
    // Save to localStorage
    const savedApplications = JSON.parse(localStorage.getItem('admissionApplications') || '[]');
    const application = {
      ...formData,
      studentId,
      applicationDate: new Date().toISOString(),
      status: 'Pending'
    };
    savedApplications.push(application);
    localStorage.setItem('admissionApplications', JSON.stringify(savedApplications));

    toast({
      title: "Application Submitted Successfully!",
      description: `Your application ID is: ${studentId}. Please proceed to fee payment.`
    });

    // Reset form
    setFormData({
      studentId: '',
      studentName: '',
      dateOfBirth: '',
      gender: '',
      fatherName: '',
      motherName: '',
      guardianPhone: '',
      guardianEmail: '',
      address: '',
      classApplying: '',
      previousSchool: '',
      bloodGroup: '',
      medicalConditions: '',
      emergencyContact: '',
      emergencyPhone: ''
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
        <FileText className="w-8 h-8 text-blue-600" />
        <h3 className="text-3xl font-bold text-gray-800">Student Admission Form</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Student Information */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Student Information
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="studentId" className={labelClasses}>Student ID (Auto-generated if empty)</Label>
              <input
                type="text"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Leave empty for auto-generation"
              />
            </div>

            <div>
              <Label htmlFor="studentName" className={labelClasses}>Student Full Name *</Label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="dateOfBirth" className={labelClasses}>Date of Birth *</Label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>

            <div>
              <Label htmlFor="gender" className={labelClasses}>Gender *</Label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="bloodGroup" className={labelClasses}>Blood Group</Label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div>
              <Label htmlFor="classApplying" className={labelClasses}>Class Applying For *</Label>
              <select
                id="classApplying"
                name="classApplying"
                value={formData.classApplying}
                onChange={handleChange}
                className={inputClasses}
                required
              >
                <option value="">Select Class</option>
                <option value="Nursery">Nursery</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
              </select>
            </div>
          </div>
        </div>

        {/* Parent/Guardian Information */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Parent/Guardian Information
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fatherName" className={labelClasses}>Father's Name *</Label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter father's full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="motherName" className={labelClasses}>Mother's Name *</Label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Enter mother's full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="guardianPhone" className={labelClasses}>Guardian Phone *</Label>
              <input
                type="tel"
                id="guardianPhone"
                name="guardianPhone"
                value={formData.guardianPhone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="+1234567890"
                required
              />
            </div>

            <div>
              <Label htmlFor="guardianEmail" className={labelClasses}>Guardian Email</Label>
              <input
                type="email"
                id="guardianEmail"
                name="guardianEmail"
                value={formData.guardianEmail}
                onChange={handleChange}
                className={inputClasses}
                placeholder="email@example.com"
              />
            </div>
          </div>
        </div>

        {/* Contact & Emergency Information */}
        <div className="border-b border-gray-200 pb-6">
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            Contact & Emergency Information
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Label htmlFor="address" className={labelClasses}>Residential Address *</Label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputClasses}
                rows="3"
                placeholder="Enter complete address"
                required
              />
            </div>

            <div>
              <Label htmlFor="emergencyContact" className={labelClasses}>Emergency Contact Name</Label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Emergency contact person"
              />
            </div>

            <div>
              <Label htmlFor="emergencyPhone" className={labelClasses}>Emergency Phone</Label>
              <input
                type="tel"
                id="emergencyPhone"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="+1234567890"
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Additional Information
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="previousSchool" className={labelClasses}>Previous School (if any)</Label>
              <input
                type="text"
                id="previousSchool"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Previous school name"
              />
            </div>

            <div>
              <Label htmlFor="medicalConditions" className={labelClasses}>Medical Conditions/Allergies</Label>
              <input
                type="text"
                id="medicalConditions"
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Any medical conditions or allergies"
              />
            </div>
          </div>
        </div>

        <div className="pt-6">
          <Button
            type="submit"
            size="lg"
            className="w-full bg-blue-600 hover:bg-blue-700 text-lg"
          >
            Submit Application
          </Button>
          <p className="text-sm text-gray-500 text-center mt-4">
            * Required fields | After submission, please proceed to fee payment
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default AdmissionForm;