import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import Image from 'next/image';
import  { useState } from 'react'

const Registration = () => {
    const initialFormData = {
        studentName: '',
        email: '',
        gender: '',
        dobDay: '',
        dobMonth: '',
        dobYear: '',
        aadharNumber: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        religion: '',
        category: '',
        nationality: '',
        selectedClass: '',
        medium: '',
        fatherName: '',
        fatherOccupation: '',
        fatherContact: '',
        motherName: '',
        motherOccupation: '',
        motherContact: '',
        lastClass: '',
        lastSchoolName: '',
        percentageGrade: '',
        result: '',
      };
      
    const [formData, setFormData] = useState(initialFormData);
    
      // Function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to save or process the form data as needed
      
        // Reset the form data after submission
        setFormData(initialFormData);
        console.log(formData);
      };
      
    
      // Function to handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
  const servicesItems = ["Mobile development", "UI/UX Design", "web development", "SEO"]
  return (
    <div>
        <Navbar/>
        <main className="flex overflow-hidden">
            <div className="flex-1 hidden lg:block">
                <Image height={800} width={800}  loading="lazy" src="/images/admission.png" className="w-full h-screen object-cover" alt="Registran" />
            </div>
            <div className="py-12 flex-1 lg:flex lg:justify-center bg-white lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-2 text-gray-600">
                    <div>
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                           Online Admission Form
                        </h3>
                        <p className="mt-3">
                            We’d love to hear from you! Please fill out the form bellow.
                        </p>
                    </div>
                    <form
    onSubmit={handleSubmit}
    className="space-y-5 mt-12 lg:pb-12">
        



    {/* Personal Details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
            <label className="font-medium">
                Students&apos; Name *
            </label>
            <input
             name="studentName"
             value={formData.studentName}
             onChange={handleInputChange}
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Email *
            </label>
            <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
    </div>

    {/* Gender, Date of Birth, Aadhar Number */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
            <label className="font-medium">
                Gender *
            </label>
            <div>
                {/* Add your gender input here */}
                <input type="radio" id="male" name="gender" value="male"  checked={formData.gender === 'male'}
        onChange={handleInputChange} />
                <label htmlFor="male" >Male</label>
                
                <input type="radio" id="female" name="gender" value="female"   checked={formData.gender === 'female'}
        onChange={handleInputChange} />
                <label htmlFor="female" >Female</label>
                
                <input type="radio" id="other" name="gender" value="other" className='mr-2' checked={formData.gender === 'other'}
        onChange={handleInputChange} />
                <label htmlFor="other" >Other</label>
            </div>
        </div>
        <div>
            <label className="font-medium">
                Date of Birth *
            </label>
           {/* <div className="grid grid-cols-3 gap-2"> */}
                 {/* Add your date of birth inputs here */} 
               {/* <input type="text" placeholder="Day"  name="dobDay" value={formData.dobDay}
        onChange={handleInputChange} />
                <input type="text" placeholder="Month" name="dobMonth"
        value={formData.dobMonth}
        onChange={handleInputChange} />
                <input type="text" placeholder="Year" name="dobYear"
        value={formData.dobYear}
        onChange={handleInputChange} />
            </div>  */}
            
            <div className="relative max-w-sm">
  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker="true" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
   focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600
    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    onChange={handleInputChange} placeholder="Select date"/>
</div>


        </div>
        <div>
            <label className="font-medium">
                Aadhar Number
            </label>
            <input
                type="number" name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
    </div>

    {/* Address, City, State, Pincode, Religion, Category, Nationality */}
    <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your address-related inputs here */}
        <div>
            <label className="font-medium">
                Address *
            </label>
            <input
                type="text"  name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                City *
            </label>
            <input
                type="text" name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                State *
            </label>
            <select  name="state"
      value={formData.state}
      onChange={handleInputChange} className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg">
                {/* Add state options here */}
                <option>Haryana</option>
                <option>Punjab</option>
                <option>Rajeshthan</option>
                <option>Delhi</option>
            </select>
        </div>
        <div>
            <label className="font-medium">
                Pincode *
            </label>
            <input
                type="number"  name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Religion
            </label>
            <input
                type="text"  name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Category
            </label>
            <input
                type="text"  name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Nationality
            </label>
            <input
                type="text"  name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
    </div>

    {/* Class, Medium */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add your class and medium inputs here */}
        <div>
            <label className="font-medium">
                Class *
            </label>
            <select   name="selectedClass"
      value={formData.selectedClass}
      onChange={handleInputChange}className="w-full mt-2 px-2 py-3 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg">
                {/* Add class options here */}
                <option>Select Class</option>
                <option>Nusserry</option>
                <option>L.K.G</option>
                <option>U.K.G</option>
                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
                <option>Class 11</option>
                <option>Class 12</option>
                
                

            </select>
        </div>
        <div>
            <label className="font-medium">
                Medium
            </label>
            <select  name="medium"
      value={formData.medium}
      onChange={handleInputChange} className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg">
                {/* Add medium options here */}
                <option>Hindi</option>
                <option>English</option>
                <option>Local Language</option>
            </select>
        </div>
    </div>

    {/* Parent/Guardian Details */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your parent/guardian details inputs here */}
        <div>
            <label className="font-medium">
                Father&apos;s Name *
            </label>
            <input
                type="text" onChange={handleInputChange} value={formData.fatherName} name="fatherName"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Father&apos;s Occupation *
            </label>
            <input
                type="text" onChange={handleInputChange} value={formData.fatherOccupation} name="fatherOccupation"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Father&apos;s Contact *
            </label>
            <input
                type="number" onChange={handleInputChange} value={formData.fatherContact} name="fatherContact"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Mother&apos;s Name
            </label>
            <input
                type="text" onChange={handleInputChange} value={formData.motherName} name="motherName"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Mother&apos;s Occupation
            </label>
            <input
                type="text" onChange={handleInputChange} value={formData.motherOccupation} name="motherOccupation"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Mother&apos;s Contact
            </label>
            <input
                type="number" onChange={handleInputChange} value={formData.motherContact} name="motherContact"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
    </div>

    {/* Previous School Details */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your previous school details inputs here */}
        <div>
            <label className="font-medium">
                Last Class
            </label>
            <input
                type="text" onChange={handleInputChange} value={formData.lastClass} name="lastClass"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Last School Name
            </label>
            <input
                type="text" onChange={handleInputChange} value={formData.lastSchoolName} name="lastSchoolName"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Percentage/Grade
            </label>
            <input
                type="number" onChange={handleInputChange} value={formData.percentageGrade} name="percentageGrade"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
        <div>
            <label className="font-medium">
                Result (Pass/Fail)
            </label>
            <input
                type="text" onChange={handleInputChange} value={formData.result} name="result"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
            />
        </div>
    </div>

    <button
        className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
    >
        Submit
    </button>
</form>

                </div>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Registration