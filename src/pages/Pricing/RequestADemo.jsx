import React, { useState } from 'react';
import Button from '../../components/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RequestADemo = () => {

    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const timeSlots = ["10:00 AM", "11:00 AM", "01:30 PM", "04:00 AM"];
    const [formData, setFormData] = useState({
        jobType: "",
        firstName: "",
        lastName: "",
        jobTitle: "",
        industry: "",
        email: "",
        phone: ""
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.jobType) newErrors.jobType = 'Job Type is required';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.jobTitle) newErrors.jobTitle = 'Job Title is required';
        if (!formData.industry) newErrors.industry = 'Industry is required';
        if (!formData.email) newErrors.email = 'Email is required';
        // Add other validation rules here

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return false;
        }
        return true;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (!isValid) {
            setFormSubmitted(false);
            return;
        }

        setErrors({});
        console.log('Form Data:', formData);
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);

        setFormSubmitted(true);

        // Clear form data or handle other post-submit logic
        setFormData({
            firstName: '',
            lastName: '',
            jobTitle: "",
            industry: "",
            email: '',
            phone: ''
        });
        setSelectedDate(new Date());
        setSelectedTime('');
    };

    // Handle date change
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // Handle time selection
    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    return (
        <div className=' mt-[50px] lg:mt-[70px] xl:mt-[120px] capitalize'>
            <div className='mt-[50px] lg:mt-[70px] xl:mt-[120px] text-center'>
                <h1 className='text-4xl sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>Request A Demo</h1>
                <div className='flex justify-center'>
                    <p className='text-base lg:text-[24px] lg:leading-[34px] font-medium text-[#020F20] tracking-[0.5px] mt-3 mb-[50px] max-w-[1100px]'>To receive a guided walkthrough of our product, please request a demo by submitting the form to the down. A member of our team will reach out to you shortly to meeting.</p>
                </div>
            </div>

            <div className='flex justify-center gap-5'>
                <form className='sm:p-10 w-full max-w-[1272px]'>
                    <div className='grid lg:grid-cols-2 gap-7 lg:gap-[72px]'>
                        <div>
                            <p className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]">How would you like to use our product?</p>
                            <label className="flex items-center gap-5 mt-2">
                                <div className='flex items-center gap-2 lg:gap-5 text-base lg:text-lg text-[#0068E5] border border-[#0068E5] rounded-xl p-[10px] lg:p-[14px] max-w-[200px] lg:max-w-none w-full'>
                                    <input type="radio" name="jobType" value="For-Business" checked={formData.jobType === "For-Business"} onChange={handleChange} className="accent-[#0068E5] w-4 lg:w-5 h-4 lg:h-5" />For Business
                                </div>
                                <div className='flex items-center gap-2 lg:gap-5 text-base lg:text-lg text-[#0068E5] border border-[#0068E5] rounded-xl p-[10px] lg:p-[14px] max-w-[200px] lg:max-w-none w-full'>
                                    <input type="radio" name="jobType" value="For-Personal" checked={formData.jobType === "For-Personal"} onChange={handleChange} className="accent-[#0068E5] w-4 lg:w-5 h-4 lg:h-5" />For Personal
                                </div>
                            </label>
                            {errors.jobType && <p className="text-red-500 text-sm mt-1">{errors.jobType}</p>}
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-y-5 gap-x-7 lg:gap-y-10 lg:gap-x-[72px] mt-5 lg:mt-10'>
                        <label htmlFor="firstName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> First Name
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder='Enter your first name' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </label>
                        <label htmlFor="lastName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> Last Name(Optional)
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder='Enter your surname' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                        </label>
                        <label htmlFor="jobTitle" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5] "> Job Title
                            <select id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] bg-transparent rounded-xl focus:outline-none" >
                                <option className='text-lg text-[#BBBBBB]' value="" disabled>Select</option>
                                <option value="Retail">Retail</option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Logistics and Transportation">Logistics and Transportation</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Finance">Finance</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="Education">Education</option>
                                <option value="Legal">Legal</option>
                                <option value="Construction">Construction</option>
                                <option value="Media and Entertainment">Media and Entertainment</option>
                                <option value="Government">Government</option>
                                <option value="Hospitality">Hospitality</option>
                                <option value="Automotive">Automotive</option>
                                <option value="Pharmaceuticals">Pharmaceuticals</option>
                                <option value="Agriculture">Agriculture</option>
                                <option value="Energy">Energy</option>
                                <option value="Telecom">Telecom</option>
                                <option value="Professional Services">Professional Services</option>
                                <option value="Aerospace and Defense">Aerospace and Defense</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                        </label>
                        <label htmlFor="industry" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> Industry
                            <select id="industry" name="industry" value={formData.industry} onChange={handleChange} className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] bg-transparent rounded-xl focus:outline-none">
                                <option className='text-lg text-[#BBBBBB]' value="" disabled>Select</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Business Analyst">Business Analyst</option>
                                <option value="Operations Manager">Operations Manager</option>
                                <option value="Customer Service Representative">Customer Service Representative</option>
                                <option value="Human Resources Manager">Human Resources Manager</option>
                                <option value="Financial Analyst">Financial Analyst</option>
                                <option value="Marketing Specialist">Marketing Specialist</option>
                                <option value="Sales Manager">Sales Manager</option>
                                <option value="IT Support Specialist">IT Support Specialist</option>
                                <option value="Data Analyst">Data Analyst</option>
                                <option value="Account Manager">Account Manager</option>
                                <option value="Administrative Assistant">Administrative Assistant</option>
                                <option value="Product Manager">Product Manager</option>
                                <option value="Quality Assurance Specialist">Quality Assurance Specialist</option>
                                <option value="Supply Chain Manager">Supply Chain Manager</option>
                                <option value="Logistics Coordinator">Logistics Coordinator</option>
                                <option value="Technical Support Specialist">Technical Support Specialist</option>
                                <option value="Compliance Officer">Compliance Officer</option>
                                <option value="Training and Development Coordinator">Training and Development Coordinator</option>
                                <option value="Research and Development (R&D) Specialist">Research and Development (R&D) Specialist</option>
                                <option value="Content Creator">Content Creator</option>
                                <option value="Graphic Designer">Graphic Designer</option>
                                <option value="Web Developer">Web Developer</option>
                                <option value="Systems Analyst">Systems Analyst</option>
                                <option value="Database Administrator">Database Administrator</option>
                                <option value="Legal Advisor">Legal Advisor</option>
                                <option value="Executive Assistant">Executive Assistant</option>
                                <option value="Operations Analyst">Operations Analyst</option>
                                <option value="Customer Success Manager">Customer Success Manager</option>
                                <option value="Risk Manager">Risk Manager</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                        </label>
                        <label htmlFor="email" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> Email
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='Enter your email' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </label>
                        <label htmlFor="phone" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> Phone Number(Optional)
                            <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder='Enter your contact number' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] bg-transparent rounded-xl focus:outline-none" />
                        </label>
                        <div>
                            <h2 className="text-[22px] leading-8 text-[#0068E5]">Select Date & Time</h2>
                            <div className="flex flex-wrap lg:flex-nowrap gap-[50px] mt-[10px]">
                                <DatePicker className='bg-[#EEF5FD]' selected={selectedDate} onChange={handleDateChange} inline />
                                <div className="time-container">
                                    <p className='text-xl text-[#020F20]'>{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        {timeSlots.map((time, index) => (
                                            <button key={index} type="button" onClick={() => handleTimeSelect(time)} className={`py-2 px-3 rounded-md text-base lg:text-[18px] lg:leading-[24px] border border-[#0068E5] w-[111px] ${selectedTime === time ? 'bg-[#0068E5] text-white font-bold' : 'text-[#0068E5]'}`} >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg lg:text-2xl font-bold text-[#0068E5]'>Important</p>
                            <ul className='list-disc ml-7'>
                                <li className='text-sm lg:text-lg text-[#020F20] mt-4 lg:mt-8'>Choose your preferred demo date from the calendar.</li>
                                <li className='text-sm lg:text-lg text-[#020F20] mt-2 lg:mt-4'>Select a time slot that best suits your availability.</li>
                                <li className='text-sm lg:text-lg text-[#020F20] mt-2 lg:mt-4'>Ensure the chosen date is at least 24 hours from today.</li>
                                <li className='text-sm lg:text-lg text-[#020F20] mt-2 lg:mt-4'>All time slots are displayed in New York time zone.</li>
                                <li className='text-sm lg:text-lg text-[#020F20] mt-2 lg:mt-4'>If no suitable time is available, contact us for assistance.</li>
                            </ul>
                            <label className='text-sm lg:text-lg text-[#0068E5] flex items-center gap-2 mt-5 lg:mt-[59px]'>
                                <input type='checkbox' className='w-3 lg:w-[18px] h-3 lg:h-[18px]' /> I agree to procced with my personal data
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-center mt-5 lg:mt-[50px]'>
                        <Button type="submit" onClick={handleSubmit} className="py-2 px-[30px] text-white hover:bg-[#0068E5]">Get Free Demo</Button>
                        {formSubmitted && <p className="text-green-500 mt-3">Form submitted successfully!</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RequestADemo;
