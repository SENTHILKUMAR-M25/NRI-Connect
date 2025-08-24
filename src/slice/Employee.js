
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   employee: {
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
//     idProofUrl: '',
//     profilePhoto: null,
//     profilePhotoUrl: '',
//     certificate: null,
//     certificateUrl: ''
//   }
// };

// const employeeSlice = createSlice({
//   name: 'employee',
//   initialState,
//   reducers: {
//     updateEmployee: (state, action) => {
//       state.employee = { ...state.employee, ...action.payload };
//     },
//     resetEmployeeProfile: (state) => {
//       state.employee = initialState.employee;
//     }
//   }
// });

// export const { updateEmployee, resetEmployeeProfile } = employeeSlice.actions;
// export default employeeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employee: {
    employeeId: '',        // ✅ Unique Service Person ID (YN-XXXX)
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
