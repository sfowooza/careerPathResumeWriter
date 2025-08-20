// FormBoldCVBuilder.jsx
// Usage: import FormBoldCVBuilder from './FormBoldCVBuilder';
// Then use <FormBoldCVBuilder /> in your app.

import React, { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";

// Login Component with FormBold styling
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Simulate login
    setTimeout(() => {
      if (
        formData.email === "test@example.com" &&
        formData.password === "password"
      ) {
        alert("Login successful!");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center p-12 min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#07074D] mb-2">
            Welcome Back
          </h1>
          <p className="text-[#6B7280]">Sign in to your CV Builder account</p>
        </div>
        {error && (
          <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}
        <div className="space-y-5">
          {/* Email Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* Password Field */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 pr-12 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] hover:text-[#07074D]"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          {/* Remember Me & Forgot Password */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-[#6A64F1] focus:ring-[#6A64F1] border-[#e0e0e0] rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-base text-[#07074D]"
              >
                Remember me
              </label>
            </div>
            <button className="btn-text">
              Forgot Password?
            </button>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
          {/* Sign Up Link */}
          <div className="text-center pt-4">
            <p className="text-base text-[#6B7280]">
              Don't have an account?{" "}
              <button className="btn-text">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Register Component with FormBold styling
const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    // Simulate registration
    setTimeout(() => {
      alert("Account created successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center p-12 min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-[550px] bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#07074D] mb-2">
            Create Your Account
          </h1>
          <p className="text-[#6B7280]">
            Join CV Builder and create amazing resumes
          </p>
        </div>
        {error && (
          <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-md">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            </div>
          </div>
        )}
        <div className="space-y-5">
          {/* Full Name Field */}
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* Email Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* Phone Field */}
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* Password Fields Row */}
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="confirmPassword"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          {/* Terms Checkbox */}
          <div className="mb-5">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#6A64F1] focus:ring-[#6A64F1] border-[#e0e0e0] rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-base text-[#07074D]"
              >
                I agree to the{" "}
                <button className="btn-text">
                  Terms of Service
                </button>{" "}
                and{" "}
                <button className="btn-text">
                  Privacy Policy
                </button>
              </label>
            </div>
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              onClick={handleSubmit}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
          {/* Sign In Link */}
          <div className="text-center pt-4">
            <p className="text-base text-[#6B7280]">
              Already have an account?{" "}
              <button className="btn-text">
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// CV Builder Form with FormBold styling
const CVBuilderForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+256",
    profilePhoto: null,
    address: {
      area: "",
      city: "",
      state: "",
      postCode: "",
    },
    experience: "",
    skills: "",
    jobCategory: "technology",
  });

  // Country codes with flags - comprehensive list
  const countryCodes = [
    // Uganda first (default)
    { code: "+256", country: "UG", flag: "🇺🇬", name: "Uganda" },
    
    // African countries
    { code: "+213", country: "DZ", flag: "🇩🇿", name: "Algeria" },
    { code: "+244", country: "AO", flag: "🇦🇴", name: "Angola" },
    { code: "+229", country: "BJ", flag: "🇧🇯", name: "Benin" },
    { code: "+267", country: "BW", flag: "🇧🇼", name: "Botswana" },
    { code: "+226", country: "BF", flag: "🇧🇫", name: "Burkina Faso" },
    { code: "+257", country: "BI", flag: "🇧🇮", name: "Burundi" },
    { code: "+237", country: "CM", flag: "🇨🇲", name: "Cameroon" },
    { code: "+238", country: "CV", flag: "🇨🇻", name: "Cape Verde" },
    { code: "+236", country: "CF", flag: "🇨🇫", name: "Central African Republic" },
    { code: "+235", country: "TD", flag: "🇹🇩", name: "Chad" },
    { code: "+269", country: "KM", flag: "🇰🇲", name: "Comoros" },
    { code: "+243", country: "CD", flag: "🇨🇩", name: "Democratic Republic of Congo" },
    { code: "+242", country: "CG", flag: "🇨🇬", name: "Republic of Congo" },
    { code: "+225", country: "CI", flag: "🇨🇮", name: "Côte d'Ivoire" },
    { code: "+253", country: "DJ", flag: "🇩🇯", name: "Djibouti" },
    { code: "+20", country: "EG", flag: "🇪🇬", name: "Egypt" },
    { code: "+240", country: "GQ", flag: "🇬🇶", name: "Equatorial Guinea" },
    { code: "+291", country: "ER", flag: "🇪🇷", name: "Eritrea" },
    { code: "+251", country: "ET", flag: "🇪🇹", name: "Ethiopia" },
    { code: "+241", country: "GA", flag: "🇬🇦", name: "Gabon" },
    { code: "+220", country: "GM", flag: "🇬🇲", name: "Gambia" },
    { code: "+233", country: "GH", flag: "🇬🇭", name: "Ghana" },
    { code: "+224", country: "GN", flag: "🇬🇳", name: "Guinea" },
    { code: "+245", country: "GW", flag: "🇬🇼", name: "Guinea-Bissau" },
    { code: "+254", country: "KE", flag: "🇰🇪", name: "Kenya" },
    { code: "+266", country: "LS", flag: "🇱🇸", name: "Lesotho" },
    { code: "+231", country: "LR", flag: "🇱🇷", name: "Liberia" },
    { code: "+218", country: "LY", flag: "🇱🇾", name: "Libya" },
    { code: "+261", country: "MG", flag: "🇲🇬", name: "Madagascar" },
    { code: "+265", country: "MW", flag: "🇲🇼", name: "Malawi" },
    { code: "+223", country: "ML", flag: "🇲🇱", name: "Mali" },
    { code: "+222", country: "MR", flag: "🇲🇷", name: "Mauritania" },
    { code: "+230", country: "MU", flag: "🇲🇺", name: "Mauritius" },
    { code: "+212", country: "MA", flag: "🇲🇦", name: "Morocco" },
    { code: "+258", country: "MZ", flag: "🇲🇿", name: "Mozambique" },
    { code: "+264", country: "NA", flag: "🇳🇦", name: "Namibia" },
    { code: "+227", country: "NE", flag: "🇳🇪", name: "Niger" },
    { code: "+234", country: "NG", flag: "🇳🇬", name: "Nigeria" },
    { code: "+250", country: "RW", flag: "🇷🇼", name: "Rwanda" },
    { code: "+239", country: "ST", flag: "🇸🇹", name: "São Tomé and Príncipe" },
    { code: "+221", country: "SN", flag: "🇸🇳", name: "Senegal" },
    { code: "+248", country: "SC", flag: "🇸🇨", name: "Seychelles" },
    { code: "+232", country: "SL", flag: "🇸🇱", name: "Sierra Leone" },
    { code: "+252", country: "SO", flag: "🇸🇴", name: "Somalia" },
    { code: "+27", country: "ZA", flag: "🇿🇦", name: "South Africa" },
    { code: "+211", country: "SS", flag: "🇸🇸", name: "South Sudan" },
    { code: "+249", country: "SD", flag: "🇸🇩", name: "Sudan" },
    { code: "+268", country: "SZ", flag: "🇸🇿", name: "Eswatini" },
    { code: "+255", country: "TZ", flag: "🇹🇿", name: "Tanzania" },
    { code: "+228", country: "TG", flag: "🇹🇬", name: "Togo" },
    { code: "+216", country: "TN", flag: "🇹🇳", name: "Tunisia" },
    { code: "+260", country: "ZM", flag: "🇿🇲", name: "Zambia" },
    { code: "+263", country: "ZW", flag: "🇿🇼", name: "Zimbabwe" },
    
    // Major world countries
    { code: "+1", country: "US", flag: "🇺🇸", name: "United States" },
    { code: "+1", country: "CA", flag: "🇨🇦", name: "Canada" },
    { code: "+44", country: "GB", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+33", country: "FR", flag: "🇫🇷", name: "France" },
    { code: "+49", country: "DE", flag: "🇩🇪", name: "Germany" },
    { code: "+39", country: "IT", flag: "🇮🇹", name: "Italy" },
    { code: "+34", country: "ES", flag: "🇪🇸", name: "Spain" },
    { code: "+31", country: "NL", flag: "🇳🇱", name: "Netherlands" },
    { code: "+41", country: "CH", flag: "🇨🇭", name: "Switzerland" },
    { code: "+46", country: "SE", flag: "🇸🇪", name: "Sweden" },
    { code: "+47", country: "NO", flag: "🇳🇴", name: "Norway" },
    { code: "+45", country: "DK", flag: "🇩🇰", name: "Denmark" },
    { code: "+358", country: "FI", flag: "🇫🇮", name: "Finland" },
    { code: "+61", country: "AU", flag: "🇦🇺", name: "Australia" },
    { code: "+64", country: "NZ", flag: "🇳🇿", name: "New Zealand" },
    { code: "+81", country: "JP", flag: "🇯🇵", name: "Japan" },
    { code: "+82", country: "KR", flag: "🇰🇷", name: "South Korea" },
    { code: "+86", country: "CN", flag: "🇨🇳", name: "China" },
    { code: "+91", country: "IN", flag: "🇮🇳", name: "India" },
    { code: "+55", country: "BR", flag: "🇧🇷", name: "Brazil" },
    { code: "+52", country: "MX", flag: "🇲🇽", name: "Mexico" },
    { code: "+7", country: "RU", flag: "🇷🇺", name: "Russia" },
    { code: "+90", country: "TR", flag: "🇹🇷", name: "Turkey" },
    { code: "+966", country: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
    { code: "+971", country: "AE", flag: "🇦🇪", name: "United Arab Emirates" },
    { code: "+65", country: "SG", flag: "🇸🇬", name: "Singapore" },
    { code: "+60", country: "MY", flag: "🇲🇾", name: "Malaysia" },
    { code: "+66", country: "TH", flag: "🇹🇭", name: "Thailand" },
    { code: "+84", country: "VN", flag: "🇻🇳", name: "Vietnam" },
    { code: "+63", country: "PH", flag: "🇵🇭", name: "Philippines" },
    { code: "+62", country: "ID", flag: "🇮🇩", name: "Indonesia" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      if (validTypes.includes(file.type)) {
        setFormData({
          ...formData,
          profilePhoto: file,
        });
      } else {
        alert('Please select a valid image file (JPEG, PNG, or GIF)');
        e.target.value = '';
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("CV data:", formData);
    alert("CV created successfully!");
  };

  return (
    <div className="flex items-center justify-center p-12 min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-[700px] bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#07074D] mb-2">
            Create Your CV
          </h1>
          <p className="text-[#6B7280]">Build your professional resume</p>
        </div>
        <div className="space-y-5">
          {/* Personal Information */}
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* Profile Photo Upload */}
          <div className="mb-5">
            <label
              htmlFor="profilePhoto"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Profile Photo
            </label>
            <div className="flex items-center space-x-4">
              {formData.profilePhoto && (
                <div className="flex-shrink-0">
                  <img
                    src={URL.createObjectURL(formData.profilePhoto)}
                    alt="Profile preview"
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
              )}
              <div className="flex-1">
                <input
                  type="file"
                  name="profilePhoto"
                  id="profilePhoto"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#6A64F1] file:text-white hover:file:bg-[#5A54E1] file:cursor-pointer"
                />
                <p className="mt-2 text-sm text-[#6B7280]">
                  Upload a professional photo (JPEG, PNG, or GIF)
                </p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <div className="flex space-x-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md min-w-[120px]"
              >
                {countryCodes.map((country, index) => (
                  <option key={index} value={country.code}>
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <p className="mt-2 text-sm text-[#6B7280]">
              Selected: {countryCodes.find(c => c.code === formData.countryCode)?.flag} {countryCodes.find(c => c.code === formData.countryCode)?.name}
            </p>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          {/* Job Category */}
          <div className="mb-5">
            <label
              htmlFor="jobCategory"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Job Category
            </label>
            <select
              name="jobCategory"
              id="jobCategory"
              value={formData.jobCategory}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* Address Section */}
          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="address.area"
                    id="area"
                    placeholder="Enter area"
                    value={formData.address.area}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="address.city"
                    id="city"
                    placeholder="Enter city"
                    value={formData.address.city}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="address.state"
                    id="state"
                    placeholder="Enter state"
                    value={formData.address.state}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="address.postCode"
                    id="postCode"
                    placeholder="Post Code"
                    value={formData.address.postCode}
                    onChange={handleChange}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Experience & Skills */}
          <div className="mb-5">
            <label
              htmlFor="experience"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Work Experience
            </label>
            <textarea
              name="experience"
              id="experience"
              rows={4}
              placeholder="Describe your work experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md resize-none"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="skills"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Skills
            </label>
            <textarea
              name="skills"
              id="skills"
              rows={3}
              placeholder="List your skills (separated by commas)"
              value={formData.skills}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md resize-none"
            />
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-primary"
            >
              Create CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Demo Component
export default function FormBoldCVBuilder() {
  const [currentView, setCurrentView] = useState("login");

  return (
    <div>
      {/* Navigation */}
      <div className="fixed top-4 left-4 z-50 flex space-x-2">
        <button
          onClick={() => setCurrentView("login")}
          className={`nav-btn ${
            currentView === "login" ? "active" : ""
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setCurrentView("register")}
          className={`nav-btn ${
            currentView === "register" ? "active" : ""
          }`}
        >
          Register
        </button>
        <button
          onClick={() => setCurrentView("cv-builder")}
          className={`nav-btn ${
            currentView === "cv-builder" ? "active" : ""
          }`}
        >
          CV Builder
        </button>
      </div>
      {/* Render Current View */}
      {currentView === "login" && <Login />}
      {currentView === "register" && <Register />}
      {currentView === "cv-builder" && <CVBuilderForm />}
    </div>
  );
}
