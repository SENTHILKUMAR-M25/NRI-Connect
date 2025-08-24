import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const EmployeeProfile = () => {
  const [showFullProfile, setShowFullProfile] = useState(false);
  const emp = useSelector((state) => state.employee.employee);
  const feedbacks = useSelector((state) => state.feedback.feedbacks);
  const user = useSelector((state) => state.userinfo.user);

  const toggleProfileView = () => {
    setShowFullProfile(!showFullProfile);
  };

  return (
    <div className="p-6 relative top-16 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Compact View */}
      <div className="flex gap-6 items-center">
        {emp.profilePhotoUrl ? (
          <img
            src={emp.profilePhotoUrl}
            alt="Profile"
            className="h-28 w-28 rounded-full object-cover"
          />
        ) : (
          <div className="h-28 w-28 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            No Photo
          </div>
        )}

        <div className="flex-1">
          <h1 className="text-3xl font-bold">{emp.fullName || 'Employee Name'}</h1>
          <p className="text-gray-600">{emp.jobRole || 'Job Role'}</p>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Employee ID:</span> {emp.employeeId || 'N/A'}
          </p>
          <div className="block mt-2 md:grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <p><span className="font-extrabold">Experience:</span> {emp.workExperience || '0'} yrs</p>
            <p><span className="font-extrabold">Location:</span> {emp.currentAddress || 'N/A'}</p>
          </div>
        </div>

        <button
          onClick={toggleProfileView}
          className="relative inline-flex flex-wrap items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
        >
          <span className="relative p-2 lg:px-5 lg:py-2.5 transition-all bg-white rounded-md group-hover:bg-transparent">
            {showFullProfile ? 'Hide Profile' : 'View Profile'}
          </span>
        </button>
      </div>

      {/* Full Profile */}
      {showFullProfile && (
        <>
          {/* Bio */}
          <div className="mt-4">
            <p className="text-gray-700">{emp.bio || 'No bio provided'}</p>
          </div>

          {/* Info Sections */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Info */} {user?.role === "admin" && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold text-lg mb-3">Personal Information</h2>
              <p><span className="font-medium">Employee ID:</span> {emp.employeeId || 'N/A'}</p>
              <p><span className="font-medium">Full Name:</span> {emp.fullName || 'N/A'}</p>
              <p><span className="font-medium">Email:</span> {emp.email || 'N/A'}</p>
              <p><span className="font-medium">Mobile:</span> {emp.mobileNumber || 'N/A'}</p>
              <p><span className="font-medium">Date of Birth:</span> {emp.dateOfBirth || 'N/A'}</p>
              <p><span className="font-medium">Gender:</span> {emp.gender || 'N/A'}</p>
              <p><span className="font-medium">Address:</span> {emp.currentAddress || 'N/A'}</p>
            </div>)}
           
              {/* Professional Info */ }
              <div className="bg-gray-50 p-4 rounded-lg">
            <h2 className="font-semibold text-lg mb-3">Professional Information</h2>
            <p><span className="font-medium">Job Role:</span> {emp.jobRole || 'N/A'}</p>
            <p><span className="font-medium">Experience:</span> {emp.workExperience || '0'} yrs</p>
            <p><span className="font-medium">Hourly Rate:</span> {emp.rate ? `$${emp.rate}/hr` : 'N/A'}</p>
            <p><span className="font-medium">Skills:</span> {emp.skills || 'N/A'}</p>
          </div>
        </div>
      {/* Documents */}
      {user?.role === "admin" && (
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="font-semibold text-lg mb-3">Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Photo */}
          <div>
            <p className="font-medium mb-1">Profile Photo:</p>
            {emp.profilePhotoUrl ? (
              <img
                src={emp.profilePhotoUrl}
                alt="Profile"
                className="h-24 w-24 object-cover rounded-full"
              />
            ) : (
              <span className="text-red-600">Not Uploaded</span>
            )}
          </div>

          {/* ID Proof */}
          <div>
            <p className="font-medium mb-1">ID Proof:</p>
            {emp.idProofUrl ? (
              <a
                href={emp.idProofUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View File
              </a>
            ) : (
              <span className="text-red-600">Not Uploaded</span>
            )}
          </div>

          {/* Certificate */}
          <div>
            <p className="font-medium mb-1">Certificate:</p>
            {emp.certificateUrl ? (
              <a
                href={emp.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View File
              </a>
            ) : (
              <span className="text-red-600">Not Uploaded</span>
            )}
          </div>
        </div>
      </div>)}
      <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 ">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-blue-700 drop-shadow-md">
              Customer Feedbacks
            </h2>
            {user?.role === "admin" && (

              <button
                onClick={() => dispatch(clearFeedbacks())}
                className="px-4 py-2 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg shadow"
              >
                Clear All
              </button>
            )}
          </div>

          {feedbacks.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-600 text-center italic"
            >
              No feedback submitted yet 🙁
            </motion.p>
          ) : (
            <div className="space-y-6">
              {feedbacks.map((fb, index) => (
                <motion.div
                  key={fb.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl text-gray-800">{fb.name}</h3>
                    <span className="text-sm text-gray-500">
                      ID: <span className="font-medium">{fb.servicePersonId}</span>
                    </span>
                  </div>

                  <p className="text-gray-600 mt-1">
                    Service Person:{" "}
                    <span className="font-semibold text-blue-600">
                      {fb.servicePerson}
                    </span>
                  </p>

                  {/* Rating Stars */}
                  <div className="flex items-center mt-2">
                    {Array.from({ length: fb.rating }, (_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">★</span>
                    ))}
                    {Array.from({ length: 5 - fb.rating }, (_, i) => (
                      <span key={i} className="text-gray-300 text-lg">★</span>
                    ))}
                    <span className="ml-2 text-sm text-gray-500">
                      {fb.rating} / 5
                    </span>
                  </div>

                  {/* Feedback Text */}
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    “{fb.feedback}”
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Book Now Button */}
      <button
        type="button"
        className="text-white mt-6 flex justify-end gap-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        <Link to="/enquiry" className="flex gap-1.5">
          Book now
          <svg
            className="relative top-1 rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </button>
    </>
  )
}
    </div >
  );
};

export default EmployeeProfile;
