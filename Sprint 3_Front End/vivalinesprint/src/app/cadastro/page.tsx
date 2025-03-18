"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Cadastro = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = { name: "", email: "", password: "" };
    let isValid = true;

    if (!form.name) {
      formErrors.name = "Nome é obrigatório.";
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!form.email) {
      formErrors.email = "E-mail é obrigatório.";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      formErrors.email = "E-mail inválido.";
      isValid = false;
    }

    if (!form.password) {
      formErrors.password = "Senha é obrigatória.";
      isValid = false;
    } else if (form.password.length < 6) {
      formErrors.password = "A senha deve ter pelo menos 6 caracteres.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validate()) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = users.find((user: any) => user.email === form.email);

      if (userExists) {
        alert("E-mail já cadastrado!");
        setIsSubmitting(false);
        return;
      }

      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));
      
      alert("Cadastro realizado com sucesso!");
      setIsSubmitting(false);
      setForm({ name: "", email: "", password: "" });
      router.push("/login");
    } else {
      setIsSubmitting(false);
    }
  };

  
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Cadastre-se</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            name="name"
            placeholder="Nome"
            value={form.name}
            onChange={handleChange}
            required
            className="w-80 p-2 border border-gray-300 rounded"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>
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
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
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
          <br />
          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isSubmitting ? "Enviando..." : "Cadastrar"}
        </button>
        <a href="../login" className="text-sm font-semibold text-center mb-4">Login</a>
      </form>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-white to-[#C7CDCF]">
      <Cadastro />
    </div>
  );
};

export default Page;