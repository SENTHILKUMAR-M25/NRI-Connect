

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateEmployee } from "../../slice/Employee";
// import { useNavigate } from "react-router-dom";

// export default function Hiring() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const employee = useSelector((state) => state.employee.employee);

//   const [formData, setFormData] = useState({
//     fullName: employee.fullName || "",
//     email: employee.email || "",
//     mobileNumber: employee.mobileNumber || "",
//     dateOfBirth: employee.dateOfBirth || "",
//     gender: employee.gender || "",
//     currentAddress: employee.currentAddress || "",
//     jobRole: employee.jobRole || "",
//     workExperience: employee.workExperience || "",
//     rate: employee.rate || "",
//     skills: employee.skills || "",
//     bio: employee.bio || "",
//     profilePhotoUrl: employee.profilePhotoUrl || "",
//     idProofUrl: employee.idProofUrl || "",
//     certificateUrl: employee.certificateUrl || "",
//   });

//   // Handle text inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file uploads (local preview)
//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const fileURL = URL.createObjectURL(files[0]);
//       setFormData({ ...formData, [name]: fileURL });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateEmployee(formData));
//     navigate("/employee");
//   };

//   return (

//     <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//   <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-t-lg">
//     <h2 className="text-2xl font-bold text-white">Edit Employee Profile</h2>
//     <p className="text-blue-100">Update your professional information</p>
//   </div>

//   <form onSubmit={handleSubmit} className="space-y-8 p-6">
//     {/* Personal Info Section */}
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Information</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Full Name</label>
//           <input
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
//           <input
//             name="mobileNumber"
//             value={formData.mobileNumber}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Gender</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Current Address</label>
//           <input
//             name="currentAddress"
//             value={formData.currentAddress}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//       </div>
//     </div>

//     {/* Professional Info Section */}
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Professional Information</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Job Role</label>
//           <input
//             name="jobRole"
//             value={formData.jobRole}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Work Experience (years)</label>
//           <input
//             type="number"
//             name="workExperience"
//             value={formData.workExperience}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Hourly Rate</label>
//           <input
//             type="number"
//             name="rate"
//             value={formData.rate}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//         <div className="space-y-1">
//           <label className="block text-sm font-medium text-gray-600">Skills (comma separated)</label>
//           <input
//             name="skills"
//             value={formData.skills}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//           />
//         </div>
//       </div>
//     </div>

//     {/* Bio Section */}
//     <div className="space-y-1">
//       <label className="block text-sm font-medium text-gray-600">Short Bio</label>
//       <textarea
//         name="bio"
//         value={formData.bio}
//         onChange={handleChange}
//         rows={4}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//       />
//     </div>

//     {/* File Uploads Section */}
//     <div className="space-y-4">
//       <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Documents</h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-600">Profile Photo</label>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <input
//                 type="file"
//                 name="profilePhotoUrl"
//                 onChange={handleFileChange}
//                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 id="profilePhotoInput"
//               />
//               <label htmlFor="profilePhotoInput" className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition">
//                 Choose File
//               </label>
//             </div>
//             {formData.profilePhotoUrl && (
//               <img
//                 src={formData.profilePhotoUrl}
//                 alt="Preview"
//                 className="h-12 w-12 rounded-full object-cover border-2 border-white shadow"
//               />
//             )}
//           </div>
//         </div>
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-600">ID Proof</label>
//           <div className="relative">
//             <input
//               type="file"
//               name="idProofUrl"
//               onChange={handleFileChange}
//               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               id="idProofInput"
//             />
//             <label htmlFor="idProofInput" className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition">
//               Upload ID Proof
//             </label>
//           </div>
//           {formData.idProofUrl && (
//             <a
//               href={formData.idProofUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
//             >
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//               </svg>
//               View Document
//             </a>
//           )}
//         </div>
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-600">Certificate</label>
//           <div className="relative">
//             <input
//               type="file"
//               name="certificateUrl"
//               onChange={handleFileChange}
//               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//               id="certificateInput"
//             />
//             <label htmlFor="certificateInput" className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition">
//               Upload Certificate
//             </label>
//           </div>
//           {formData.certificateUrl && (
//             <a
//               href={formData.certificateUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
//             >
//               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//               </svg>
//               View Document
//             </a>
//           )}
//         </div>
//       </div>
//     </div>

//     {/* Buttons */}
//     <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
      
//       <button
      
//         type="submit"
//         className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white font-medium hover:from-blue-700 hover:to-blue-900 transition shadow-md"
//       >
//         Hiried
//       </button>
//     </div>
//   </form>
// </div>
//   );
// }


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../slice/Employee";
import { useNavigate } from "react-router-dom";

export default function Hiring() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector((state) => state.employee.employee);

  const [formData, setFormData] = useState({
    employeeId: employee.employeeId || "",
    fullName: employee.fullName || "",
    email: employee.email || "",
    mobileNumber: employee.mobileNumber || "",
    dateOfBirth: employee.dateOfBirth || "",
    gender: employee.gender || "",
    currentAddress: employee.currentAddress || "",
    jobRole: employee.jobRole || "",
    workExperience: employee.workExperience || "",
    rate: employee.rate || "",
    skills: employee.skills || "",
    bio: employee.bio || "",
    profilePhotoUrl: employee.profilePhotoUrl || "",
    idProofUrl: employee.idProofUrl || "",
    certificateUrl: employee.certificateUrl || "",
  });

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file uploads (local preview)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const fileURL = URL.createObjectURL(files[0]);
      setFormData({ ...formData, [name]: fileURL });
    }
  };

  // Function to generate unique ID like "YN-1606"
  const generateEmployeeId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit number
    return `YN-${randomNum}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure Employee ID is created
    const updatedData = {
      ...formData,
      employeeId: formData.employeeId || generateEmployeeId(),
    };

    // Dispatch to Redux
    dispatch(updateEmployee(updatedData));

    // For debugging (to check all collected data)
    console.log("Final Employee Data:", updatedData);

    // Navigate to employee page
    navigate("/employee");
  };

  return (
    <div className="p-8 relative top-12 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-t-lg">
        <h2 className="text-2xl font-bold text-white">Employee Profile Hiring</h2>
        <p className="text-blue-100">Update your professional information</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 p-6">
        {/* Employee ID (Read Only if generated) */}
        {formData.employeeId && (
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Employee ID
            </label>
            <input
              type="text"
              value={formData.employeeId}
              readOnly
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
            />
          </div>
        )}

        {/* ---- Personal Info ---- */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Mobile Number
              </label>
              <input
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Current Address
              </label>
              <input
                name="currentAddress"
                value={formData.currentAddress}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* ---- Professional Info ---- */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Professional Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Job Role
              </label>
              <input
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Work Experience (years)
              </label>
              <input
                type="number"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Hourly Rate
              </label>
              <input
                type="number"
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Skills
              </label>
              <input
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Short Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        {/* File Uploads */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">
            Documents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Profile Photo
              </label>
              <input
                type="file"
                name="profilePhotoUrl"
                onChange={handleFileChange}
              />
              {formData.profilePhotoUrl && (
                <img
                  src={formData.profilePhotoUrl}
                  alt="Preview"
                  className="h-12 w-12 rounded-full object-cover mt-2"
                />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                ID Proof
              </label>
              <input
                type="file"
                name="idProofUrl"
                onChange={handleFileChange}
              />
              {formData.idProofUrl && (
                <a
                  href={formData.idProofUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm block mt-2"
                >
                  View Document
                </a>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Certificate
              </label>
              <input
                type="file"
                name="certificateUrl"
                onChange={handleFileChange}
              />
              {formData.certificateUrl && (
                <a
                  href={formData.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 text-sm block mt-2"
                >
                  View Document
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white font-medium hover:from-blue-700 hover:to-blue-900 transition shadow-md"
          >
            Hired
          </button>
        </div>
      </form>
    </div>
  );
}
