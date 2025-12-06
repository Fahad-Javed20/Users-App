interface UserFormComponentProps {
  onAddUser: (newUser: UserType) => void;
}

import { useForm } from "react-hook-form";
import type { UserType } from "../types/UserType";

const UserFormComponent = ({ onAddUser }: UserFormComponentProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserType>();

  const onSubmit = (data: UserType) => {
    onAddUser(data);
    reset();
  };

  return (
    <div className="p-6">
      <h1 className="font-bold bg-gray-700 text-white text-xl py-3 mb-6 rounded text-center">
        User Form
      </h1>

      <div className="flex justify-center bg-gray-100 p-6 rounded-lg shadow-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-1/2 bg-white shadow-lg rounded-xl p-6 space-y-5 "
        >
          <div>
            <label className="block font-medium mb-1 text-left">Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-left">Email</label>
            <input
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-left">City</label>
            <select
              {...register("city", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
            <option value="">Select City</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Lahore</option>
            <option value="Chicago">Karachi</option>
            <option value="Houston">Houston</option>
            <option value="Phoenix">Phoenix</option>
          </select>
            
            {errors.city && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1 text-left">Salary</label>
            <input
              {...register("salary", { required: true })}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.salary && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormComponent;
