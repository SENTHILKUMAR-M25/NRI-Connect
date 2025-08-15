import { useState } from 'react';

const Enquiry = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    'Cook',
    'Cleaner/Maid',
    'Gardener',
    'Plumber',
    'Electrician',
    'Carpenter',
    'Security Guard',
    'Full-time Caretaker',
    'Driver',
    'Other'
  ];

  const sendEnquiry = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    // Construct WhatsApp message
    const message = `*New Home Service Enquiry*\n\n
*Client Details:*
Name: ${formValues.client_name}
Phone: ${formValues.client_phone}
Email: ${formValues.client_email || 'Not provided'}
Address: ${formValues.client_address}

*Service Requested:*
Type: ${formValues.service_type}
When Needed: ${formValues.service_when}
Special Instructions: ${formValues.service_notes || 'None'}

*Preferences:*
Background Verified Staff: ${formValues.background_check ? 'Yes' : 'No'}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your WhatsApp number (with country code, remove +)
    const whatsappNumber = '+918925393946'; // Example: 91 for India, followed by number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Simulate submission success
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-800">
        Home Service Enquiry
      </h1>

      {submitStatus === 'success' && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
          Thank you! Your enquiry has been submitted via WhatsApp.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
          Failed to submit. Please try again or contact us directly.
        </div>
      )}

      <form onSubmit={sendEnquiry} className="space-y-4">
        {/* Client Information */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold border-b pb-1">Your Details</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name*</label>
            <input
              type="text"
              name="client_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone*</label>
              <input
                type="tel"
                name="client_phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="client_email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address*</label>
            <textarea
              name="client_address"
              rows={2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold border-b pb-1">Service Needed</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Service Type*</label>
            {/* <select
              name="service_type"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select service</option>
              {serviceOptions.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select> */}
            <input
              type="text"
              name="client_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              required
              
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">When Needed*</label>
            <select
              name="service_when"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select timing</option>
              <option value="Immediately">Immediately</option>
              <option value="Within a week">Within a week</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Special Instructions</label>
            <textarea
              name="service_notes"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              placeholder="Any specific requirements or details"
            />
          </div>
        </div>

        {/* Verification */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold border-b pb-1">Verification</h2>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="background_check"
              name="background_check"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="background_check" className="ml-2 text-sm text-gray-700">
              Require background verified staff
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-2 rounded-md text-white font-medium ${
              isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {isSubmitting ? 'Opening WhatsApp...' : 'Submit via WhatsApp'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;