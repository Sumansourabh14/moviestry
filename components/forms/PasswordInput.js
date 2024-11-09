"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ password, handlePasswordChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
        className="pr-12"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
};

export default PasswordInput;
