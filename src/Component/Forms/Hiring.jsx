

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployee } from "../../slice/Employee";
import { useNavigate } from "react-router-dom";

export default function Hiring() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employee = useSelector((state) => state.employee.employee);

  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(formData));
    navigate("/employee");
  };

  return (
    // <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
    //   <h2 className="text-2xl font-bold mb-4">Edit Employee Profile</h2>

    //   <form onSubmit={handleSubmit} className="space-y-6">
    //     {/* Personal Info */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <input
    //         name="fullName"
    //         value={formData.fullName}
    //         onChange={handleChange}
    //         placeholder="Full Name"
    //         className="border p-2 rounded"
    //       />
    //       <input
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //         placeholder="Email"
    //         className="border p-2 rounded"
    //       />
    //       <input
    //         name="mobileNumber"
    //         value={formData.mobileNumber}
    //         onChange={handleChange}
    //         placeholder="Mobile Number"
    //         className="border p-2 rounded"
    //       />
    //       <input
    //         type="date"
    //         name="dateOfBirth"
    //         value={formData.dateOfBirth}
    //         onChange={handleChange}
    //         className="border p-2 rounded"
    //       />
    //       <select
    //         name="gender"
    //         value={formData.gender}
    //         onChange={handleChange}
    //         className="border p-2 rounded"
    //       >
    //         <option value="">Select Gender</option>
    //         <option value="Male">Male</option>
    //         <option value="Female">Female</option>
    //       </select>
    //       <input
    //         name="currentAddress"
    //         value={formData.currentAddress}
    //         onChange={handleChange}
    //         placeholder="Current Address"
    //         className="border p-2 rounded"
    //       />
    //     </div>

    //     {/* Professional Info */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <input
    //         name="jobRole"
    //         value={formData.jobRole}
    //         onChange={handleChange}
    //         placeholder="Job Role"
    //         className="border p-2 rounded"
    //       />
    //       <input
    //         type="number"
    //         name="workExperience"
    //         value={formData.workExperience}
    //         onChange={handleChange}
    //         placeholder="Work Experience (years)"
    //         className="border p-2 rounded"
    //       />
    //       <input
    //         type="number"
    //         name="rate"
    //         value={formData.rate}
    //         onChange={handleChange}
    //         placeholder="Hourly Rate"
    //         className="border p-2 rounded"
    //       />
    //       <input
    //         name="skills"
    //         value={formData.skills}
    //         onChange={handleChange}
    //         placeholder="Skills (comma separated)"
    //         className="border p-2 rounded"
    //       />
    //     </div>

    //     {/* Bio */}
    //     <textarea
    //       name="bio"
    //       value={formData.bio}
    //       onChange={handleChange}
    //       placeholder="Short Bio"
    //       className="border p-2 rounded w-full"
    //     />

    //     {/* File Uploads */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //       <div>
    //         <label className="block font-medium">Profile Photo</label>
    //         <input
    //           type="file"
    //           name="profilePhotoUrl"
    //           onChange={handleFileChange}
    //           className="border p-2 rounded w-full"
    //         />
    //         {formData.profilePhotoUrl && (
    //           <img
    //             src={formData.profilePhotoUrl}
    //             alt="Preview"
    //             className="h-20 w-20 mt-2 rounded-full object-cover"
    //           />
    //         )}
    //       </div>
    //       <div>
    //         <label className="block font-medium">ID Proof</label>
    //         <input
    //           type="file"
    //           name="idProofUrl"
    //           onChange={handleFileChange}
    //           className="border p-2 rounded w-full"
    //         />
    //         {formData.idProofUrl && (
    //           <a
    //             href={formData.idProofUrl}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-blue-600 underline block mt-2"
    //           >
    //             View File
    //           </a>
    //         )}
    //       </div>
    //       <div>
    //         <label className="block font-medium">Certificate</label>
    //         <input
    //           type="file"
    //           name="certificateUrl"
    //           onChange={handleFileChange}
    //           className="border p-2 rounded w-full"
    //         />
    //         {formData.certificateUrl && (
    //           <a
    //             href={formData.certificateUrl}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="text-blue-600 underline block mt-2"
    //           >
    //             View File
    //           </a>
    //         )}
    //       </div>
    //     </div>

    //     {/* Buttons */}
    //     <div className="flex justify-end gap-4">
    //       <button
    //         type="button"
    //         onClick={() => navigate("/profile")}
    //         className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
    //       >
    //         Cancel
    //       </button>
    //       <button
    //       onSubmit={handleSubmit}
    //         type="submit"
    //         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    //       >
    //         Save
    //       </button>
    //     </div>
    //   </form>
    // </div>

    <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
  <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-t-lg">
    <h2 className="text-2xl font-bold text-white">Edit Employee Profile</h2>
    <p className="text-blue-100">Update your professional information</p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-8 p-6">
    {/* Personal Info Section */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
          <input
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Current Address</label>
          <input
            name="currentAddress"
            value={formData.currentAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>
    </div>

    {/* Professional Info Section */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Professional Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Job Role</label>
          <input
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Work Experience (years)</label>
          <input
            type="number"
            name="workExperience"
            value={formData.workExperience}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Hourly Rate</label>
          <input
            type="number"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-600">Skills (comma separated)</label>
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>
    </div>

    {/* Bio Section */}
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-600">Short Bio</label>
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        rows={4}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </div>

    {/* File Uploads Section */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Documents</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">Profile Photo</label>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="file"
                name="profilePhotoUrl"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="profilePhotoInput"
              />
              <label htmlFor="profilePhotoInput" className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition">
                Choose File
              </label>
            </div>
            {formData.profilePhotoUrl && (
              <img
                src={formData.profilePhotoUrl}
                alt="Preview"
                className="h-12 w-12 rounded-full object-cover border-2 border-white shadow"
              />
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">ID Proof</label>
          <div className="relative">
            <input
              type="file"
              name="idProofUrl"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="idProofInput"
            />
            <label htmlFor="idProofInput" className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition">
              Upload ID Proof
            </label>
          </div>
          {formData.idProofUrl && (
            <a
              href={formData.idProofUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Document
            </a>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-600">Certificate</label>
          <div className="relative">
            <input
              type="file"
              name="certificateUrl"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="certificateInput"
            />
            <label htmlFor="certificateInput" className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition">
              Upload Certificate
            </label>
          </div>
          {formData.certificateUrl && (
            <a
              href={formData.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
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
        Hiried
      </button>
    </div>
  </form>
</div>
  );
}

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { updateEmployee } from "../../slice/Employee"; // ✅ Import from your slice

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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     if (files.length > 0) {
//       const fileURL = URL.createObjectURL(files[0]);
//       setFormData({ ...formData, [name]: fileURL });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateEmployee(formData)); // ✅ Now defined
//     navigate("/profile");
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Edit Employee Profile</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Personal Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" className="border p-2 rounded" />
//           <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
//           <input name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Mobile Number" className="border p-2 rounded" />
//           <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="border p-2 rounded" />
//           <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded">
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Current Address" className="border p-2 rounded" />
//         </div>

//         {/* Professional Info */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input name="jobRole" value={formData.jobRole} onChange={handleChange} placeholder="Job Role" className="border p-2 rounded" />
//           <input type="number" name="workExperience" value={formData.workExperience} onChange={handleChange} placeholder="Work Experience (years)" className="border p-2 rounded" />
//           <input type="number" name="rate" value={formData.rate} onChange={handleChange} placeholder="Hourly Rate" className="border p-2 rounded" />
//           <input name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (comma separated)" className="border p-2 rounded" />
//         </div>

//         {/* Bio */}
//         <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Short Bio" className="border p-2 rounded w-full" />

//         {/* File Uploads */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block font-medium">Profile Photo</label>
//             <input type="file" name="profilePhotoUrl" onChange={handleFileChange} className="border p-2 rounded w-full" />
//             {formData.profilePhotoUrl && (
//               <img src={formData.profilePhotoUrl} alt="Preview" className="h-20 w-20 mt-2 rounded-full object-cover" />
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">ID Proof</label>
//             <input type="file" name="idProofUrl" onChange={handleFileChange} className="border p-2 rounded w-full" />
//             {formData.idProofUrl && (
//               <a href={formData.idProofUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline block mt-2">View File</a>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Certificate</label>
//             <input type="file" name="certificateUrl" onChange={handleFileChange} className="border p-2 rounded w-full" />
//             {formData.certificateUrl && (
//               <a href={formData.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline block mt-2">View File</a>
//             )}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-end gap-4">
//           <button type="button" onClick={() => navigate("/profile")} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</button>
//           <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// }
