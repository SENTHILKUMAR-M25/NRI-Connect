// // // employeeSlice.js
// // import { createSlice } from '@reduxjs/toolkit';

// // const initialState = {
// //   formData: {
// //     fullName: '',
// //     mobileNumber: '',
// //     dateOfBirth: '',
// //     gender: '',
// //     currentAddress: '',
// //     jobRole: '',
// //     workExperience: '',
// //     idProof: null,
// //     profilePhoto: null,
// //   },
// //   status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
// //   error: null
// // };

// // const employeeSlice = createSlice({
// //   name: 'employee',
// //   initialState,
// //   reducers: {
// //     setFormData: (state, action) => {
// //       state.formData = { ...state.formData, ...action.payload };
// //     },
// //     resetForm: (state) => {
// //       state.formData = initialState.formData;
// //     },
// //     setStatus: (state, action) => {
// //       state.status = action.payload;
// //     },
// //     setError: (state, action) => {
// //       state.error = action.payload;
// //     }
// //   },
// // });

// // export const { setFormData, resetForm, setStatus, setError } = employeeSlice.actions;

// // export default employeeSlice.reducer;

// // // Selectors
// // export const selectEmployeeForm = (state) => state.employee.formData;
// // export const selectStatus = (state) => state.employee.status;
// // export const selectError = (state) => state.employee.error;
// // employeeSlice.js






// // import { createSlice, nanoid } from '@reduxjs/toolkit';

// // const initialState = {
// //   formData: {
// //     id: '',
// //     fullName: '',
// //     mobileNumber: '',
// //     dateOfBirth: '',
// //     gender: '',
// //     currentAddress: '',
// //     jobRole: '',
// //     workExperience: '',
// //     idProof: null,
// //     profilePhoto: null,
// //     email: '',
// //     skills: '',
// //     rate: '',
// //     bio: '',
// //     certificate: null
// //   },
// //   employees: [],
// //   status: 'idle',
// //   error: null,
// //   viewingProfile: false,
// //   currentEmployeeId: null
// // };

// // const employeeSlice = createSlice({
// //   name: 'employee',
// //   initialState,
// //   reducers: {
// //     setFormData: (state, action) => {
// //       state.formData = { ...state.formData, ...action.payload };
// //     },
// //     resetForm: (state) => {
// //       state.formData = initialState.formData;
// //     },
// //     addEmployee: (state, action) => {
// //       const newEmployee = {
// //         ...action.payload,
// //         id: nanoid() // Generate unique ID
// //       };
// //       state.employees.push(newEmployee);
// //     },
// //     setStatus: (state, action) => {
// //       state.status = action.payload;
// //     },
// //     setError: (state, action) => {
// //       state.error = action.payload;
// //     },
// //     toggleProfileView: (state, action) => {
// //       state.viewingProfile = !state.viewingProfile;
// //       if (action.payload) {
// //         state.currentEmployeeId = action.payload;
// //       }
// //     }
// //   },
// // });

// // export const { 
// //   setFormData, 
// //   resetForm, 
// //   addEmployee, 
// //   setStatus, 
// //   setError,
// //   toggleProfileView
// // } = employeeSlice.actions;

// // export default employeeSlice.reducer;

// // // Selectors
// // export const selectEmployeeForm = (state) => state.employee.formData;
// // export const selectEmployees = (state) => state.employee.employees;
// // export const selectStatus = (state) => state.employee.status;
// // export const selectError = (state) => state.employee.error;
// // export const selectViewingProfile = (state) => state.employee.viewingProfile;
// // export const selectCurrentEmployee = (state) => 
// //   state.employee.employees.find(emp => emp.id === state.employee.currentEmployeeId) || state.employee.formData;



// // import { createSlice, nanoid } from '@reduxjs/toolkit';

// // // Helper function to process file fields
// // const processFileFields = (data) => {
// //   if (!data) return data;

// //   const fileFields = ['idProof', 'profilePhoto', 'certificate'];
// //   const processedData = { ...data };

// //   fileFields.forEach(field => {
// //     if (processedData[field] instanceof File) {
// //       processedData[field] = {
// //         name: processedData[field].name,
// //         type: processedData[field].type,
// //         size: processedData[field].size,
// //         lastModified: processedData[field].lastModified,
// //         _isFileObject: true
// //       };
// //     }
// //   });

// //   return processedData;
// // };

// // const initialState = {
// //   formData: {
// //     id: '',
// //     fullName: '',
// //     mobileNumber: '',
// //     dateOfBirth: '',
// //     gender: '',
// //     currentAddress: '',
// //     jobRole: '',
// //     workExperience: '',
// //     idProof: null,
// //     profilePhoto: null,
// //     email: '',
// //     skills: '',
// //     rate: '',
// //     bio: '',
// //     certificate: null
// //   },
// //   employees: [],
// //   status: 'idle',
// //   error: null,
// //   viewingProfile: false,
// //   currentEmployeeId: null
// // };

// // const employeeSlice = createSlice({
// //   name: 'employee',
// //   initialState,
// //   reducers: {
// //     setFormData: (state, action) => {
// //       state.formData = { 
// //         ...state.formData, 
// //         ...processFileFields(action.payload) 
// //       };
// //     },
// //     resetForm: (state) => {
// //       state.formData = initialState.formData;
// //     },
// //     addEmployee: (state, action) => {
// //       const newEmployee = {
// //         ...processFileFields(action.payload),
// //         id: nanoid()
// //       };
// //       state.employees.push(newEmployee);
// //     },
// //     setStatus: (state, action) => {
// //       state.status = action.payload;
// //     },
// //     setError: (state, action) => {
// //       state.error = action.payload;
// //     },
// //     toggleProfileView: (state, action) => {
// //       state.viewingProfile = !state.viewingProfile;
// //       if (action.payload) {
// //         state.currentEmployeeId = action.payload;
// //       }
// //     },
// //     updateEmployee: (state, action) => {
// //       const { id, data } = action.payload;
// //       const index = state.employees.findIndex(emp => emp.id === id);
// //       if (index !== -1) {
// //         state.employees[index] = {
// //           ...state.employees[index],
// //           ...processFileFields(data)
// //         };
// //       }
// //     },
// //     deleteEmployee: (state, action) => {
// //       state.employees = state.employees.filter(emp => emp.id !== action.payload);
// //     }
// //   },
// // });

// // export const { 
// //   setFormData, 
// //   resetForm, 
// //   addEmployee, 
// //   setStatus, 
// //   setError,
// //   toggleProfileView,
// //   updateEmployee,
// //   deleteEmployee
// // } = employeeSlice.actions;

// // export default employeeSlice.reducer;

// // // Selectors
// // export const selectEmployeeForm = (state) => state.employee.formData;
// // export const selectEmployees = (state) => state.employee.employees;
// // export const selectStatus = (state) => state.employee.status;
// // export const selectError = (state) => state.employee.error;
// // export const selectViewingProfile = (state) => state.employee.viewingProfile;
// // export const selectCurrentEmployee = (state) => {
// //   const employee = state.employee.employees.find(emp => emp.id === state.employee.currentEmployeeId) || 
// //                    state.employee.formData;

// //   // Create preview URLs for images (only for profilePhoto)
// //   if (employee.profilePhoto?._isFileObject && employee.profilePhoto.type.startsWith('image/')) {
// //     return {
// //       ...employee,
// //       profilePhoto: URL.createObjectURL(new Blob([], { type: employee.profilePhoto.type }))
// //     };
// //   }

// //   return employee;
// // };


// // employeeSlice.js
// // import { createSlice, nanoid } from '@reduxjs/toolkit';

// // const initialState = {
// //   formData: {
// //     fullName: '',
// //     email: '',
// //     mobileNumber: '',
// //     dateOfBirth: '',
// //     gender: '',
// //     jobRole: '',
// //     workExperience: '',
// //     rate: '',
// //     skills: '',
// //     currentAddress: '',
// //     bio: '',
// //     idProof: null,
// //     profilePhoto: null,
// //     certificate: null
// //   },
// //   employees: [],
// //   status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
// //   error: null
// // };

// // const employeeSlice = createSlice({
// //   name: 'employee',
// //   initialState,
// //   reducers: {
// //     setFormData: (state, action) => {
// //       state.formData = {
// //         ...state.formData,
// //         ...action.payload
// //       };
// //     },
// //     resetForm: (state) => {
// //       state.formData = initialState.formData;
// //     },
// //     addEmployee: {
// //       reducer: (state, action) => {
// //         state.employees.push(action.payload);
// //       },
// //       prepare: (employeeData) => {
// //         return {
// //           payload: {
// //             ...employeeData,
// //             id: nanoid(), // Generates a unique ID
// //             createdAt: new Date().toISOString()
// //           }
// //         };
// //       }
// //     },
// //     updateEmployee: (state, action) => {
// //       const index = state.employees.findIndex(emp => emp.id === action.payload.id);
// //       if (index !== -1) {
// //         state.employees[index] = action.payload;
// //       }
// //     },
// //     deleteEmployee: (state, action) => {
// //       state.employees = state.employees.filter(emp => emp.id !== action.payload);
// //     },
// //     setStatus: (state, action) => {
// //       state.status = action.payload;
// //     },
// //     setError: (state, action) => {
// //       state.error = action.payload;
// //     }
// //   }
// // });

// // // Selectors
// // export const selectEmployeeForm = (state) => state.employee.formData;
// // export const selectEmployees = (state) => state.employee.employees;
// // export const selectEmployeeById = (state, employeeId) => 
// //   state.employee.employees.find(emp => emp.id === employeeId);
// // export const selectStatus = (state) => state.employee.status;
// // export const selectError = (state) => state.employee.error;

// // // Actions
// // export const { 
// //   setFormData, 
// //   resetForm, 
// //   addEmployee, 
// //   updateEmployee,
// //   deleteEmployee,
// //   setStatus, 
// //   setError 
// // } = employeeSlice.actions;

// // export default employeeSlice.reducer;

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//   formData: {
//     fullName: '',
//     email: '',
//     mobileNumber: '',
//     dateOfBirth: '',
//     gender: '',
//     jobRole: '',
//     workExperience: '',
//     rate: '',
//     skills: '',
//     currentAddress: '',
//     bio: '',
//     idProof: null,
//     profilePhoto: null,
//     certificate: null
//   },
//   employees: [],
//   status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,

// };
// const employeeSlice = createSlice({
//   name: 'employee',
//   initialState,
//   reducers: {
//     setFormData: (state, action) => {
//       state.formData = {
//         ...state.formData,
//         ...action.payload
//       };
//     },
//     resetForm: (state) => {
//       state.formData = initialState.formData;
//     },
//     addEmployee: {
//       reducer: (state, action) => {
//         state.employees.push(action.payload);
//       },
//       prepare: (employeeData) => {
//         return {
//           payload: {
//             ...employeeData,
//             id: nanoid(), // Generates a unique ID
//             createdAt: new Date().toISOString()
//           }
//         };
//       }
//     },
//     updateEmployee: (state, action) => {
//       const index = state.employees.findIndex(emp => emp.id === action.payload.id);
//       if (index !== -1) {
//         state.employees[index] = action.payload;
//       }
//     },
//     deleteEmployee: (state, action) => {
//       state.employees = state.employees.filter(emp => emp.id !== action.payload);
//     },
//     setStatus: (state, action) => {
//       state.status = action.payload;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//      toggleProfileView: (state, action) => {  // Fixed casing
//       state.viewingProfile = !state.viewingProfile;
//       if (action.payload) {
//         state.currentEmployeeId = action.payload;
//       }
//     }
//   }
// });
// export const selectCurrentEmployee = (state) => {
//   return state.employee.employees.find(emp => 
//     emp.id === state.employee.currentEmployeeId
//   ) || state.employee.formData;
// };
// // Selectors
// export const selectEmployeeForm = (state) => state.employee.formData;
// export const selectEmployees = (state) => state.employee.employees;
// export const selectEmployeeById = (state, employeeId) =>
//   state.employee.employees.find(emp => emp.id === employeeId);
// export const selectStatus = (state) => state.employee.status;
// export const selectViewingProfile = (state) => state.employee.viewingProfile;
// export const selectError = (state) => state.employee.error;

// // At the bottom of your file, REPLACE the actions export with:
// export const allActions = employeeSlice.actions;
// export const {
//   setFormData,
//   resetForm,
//   addEmployee,
//   updateEmployee,
//   deleteEmployee,
//   setStatus,
//   setError,
//   toggleProfileView
// } = employeeSlice.actions;

// export default employeeSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employee: {
    fullName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    gender: '',
    jobRole: '',
    workExperience: '',
    rate: '',
    skills: '',
    currentAddress: '',
    bio: '',
    idProof: null,
    idProofUrl: '',
    profilePhoto: null,
    profilePhotoUrl: '',
    certificate: null,
    certificateUrl: ''
  }
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    updateEmployee: (state, action) => {
      state.employee = { ...state.employee, ...action.payload };
    },
    resetEmployeeProfile: (state) => {
      state.employee = initialState.employee;
    }
  }
});

export const { updateEmployee, resetEmployeeProfile } = employeeSlice.actions;
export default employeeSlice.reducer;

