"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user: any) => user.email === form.email && user.password === form.password
    );

    if (user) {
      localStorage.setItem("loggedUser", JSON.stringify(user));
      alert("Login realizado com sucesso!");
      setIsSubmitting(false);
      router.push("/");
    } else {
      setError("E-mail ou senha incorretos.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
            className="w-80 p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            required
            className="w-80 p-2 border border-gray-300 rounded"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isSubmitting ? "Enviando..." : "Entrar"}
        </button>
        <a href="../cadastro" className="text-sm font-semibold text-center mb-4">Cadastrar-se</a>
      </form>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-white to-[#C7CDCF]">
      <Login />
    </div>
  );
};

export default Page;