import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/api";
import { z } from "zod";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const schema = z.object({
    firstName: z
      .string()
      .nonempty("Primeiro nome é obrigatório")
      .min(2, {
        message: "Primeiro nome deve ter pelo menos 2 caracteres",
      })
      .max(50, {
        message: "Primeiro nome deve ter no máximo 50 caracteres",
      }),
    lastName: z
      .string()
      .nonempty("Último nome é obrigatório")
      .min(2, "Último nome deve ter pelo menos 2 caracteres")
      .max(50, "Último nome deve ter no máximo 50 caracteres"),
    age: z
      .number()
      .min(1, "Idade deve ser maior que 0")
      .max(150, "Idade inválida"),
    username: z
      .string()
      .nonempty("Usuário é obrigatório")
      .max(50, "Usuário deve ter no máximo 50 caracteres"),
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    password: z
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .nonempty("Senha é obrigatória"),
    agree: z.literal(true, {
      errorMap: () => ({ message: "Você deve concordar com os termos" }),
    }),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      schema.parse({
        firstName,
        lastName,
        age,
        username,
        email,
        password,
        agree,
      });
      const response = await register({
        firstName,
        lastName,
        age: Number(age),
        username,
        email,
        password,
      });
      console.log(response);
      alert("Cadastro bem-sucedido!");
      navigate("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert(error.errors[0].message);
      } else {
        alert("Erro no cadastro. Tente novamente.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://via.placeholder.com/400"
            alt="Signup"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) =>
                    setAge(e.target.value ? Number(e.target.value) : "")
                  }
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mr-2"
                required
              />
              <label className="text-gray-700">
                I agree with{" "}
                <a href="#" className="text-gray-900 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-gray-900 hover:underline">
                  Terms of Use
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-900 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
