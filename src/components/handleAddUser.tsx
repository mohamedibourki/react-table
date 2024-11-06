import { AddUserForm } from "@/components/AddUserForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddUser() {
  const navigate = useNavigate();

  const handleAddUser = async (data: any) => {
    try {
      // In a real application, you would make a POST request to your API
      // For now, we'll store the data in localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const newUser = {
        ...data,
        id: existingUsers.length + 1, // Simple ID generation
      };

      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Navigate back to the users table
      navigate("/users");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Ajouter un utilisateur</h1>
      <div className="max-w-md">
        <AddUserForm onSubmit={handleAddUser} />
      </div>
    </div>
  );
}
