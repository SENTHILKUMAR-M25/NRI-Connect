import { createSlice } from '@reduxjs/toolkit';




const initialState = {
  properties: [
    // Dummy Data
    {
      id: 1,
      basicInfo: {
        type: "Apartment",
        totalArea: "1800 sq. ft.",
        bedrooms: 3,
        bathrooms: 2,
        balconies: 2,
        floorNumber: "5th",
        totalFloors: 20,
        furnishing: "Fully Furnished",
        age: "New Construction",
      },
      location: {
        address: "123 Main St, Bangalore, KA 560001",
        landmark: "Near MG Road",
        coordinates: { lat: 12.9716, lng: 77.5946 },
      },
      pricing: {
        listingPrice: "$450,000",
        maintenance: "$200/month",
        bookingAmount: "$10,000",
        paymentPlans: "20-80 Plan Available",
        taxes: "Included",
      },
      media: {
        images: [
          "https://via.placeholder.com/600x400?text=Luxury+Apartment",
          "https://via.placeholder.com/600x400?text=Living+Room",
        ],
        videoTour: "https://example.com/tour1",
        floorPlan: "https://example.com/floorplan1.pdf",
        legalDocs: ["RERA: AP123456"],
      },
      sellerInfo: {
        name: "John Doe",
        email: "john@example.com",
        phone: "+91 9876543210",
        company: "Elite Realty",
        verified: true,
      },
      additional: {
        amenities: ["Swimming Pool", "Gym", "24/7 Security"],
        availability: "Ready to Move",
        possessionDate: "",
      },
    },
  ],
};

export const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    addProperty:(state, action) => {
      state.properties.push({ id: Date.now(), ...action.payload });
    },
    removeProperty: (state, action) => {
      state.properties = state.properties.filter(
        (property,index) => index != action.payload
      );
    },
    
  },
});

export const { addProperty , removeProperty } = propertySlice.actions;
export default propertySlice.reducer;