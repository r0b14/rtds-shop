import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from 'yup'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../services/api";
import { Product } from "../types/product";

// // Definindo o schema de validação com Yup
// const schema = yup.object().shape({
//   title: yup.string().required("O título é obrigatório"),
//   price: yup
//     .number()
//     .typeError("O preço precisa ser um número")
//     .required("Preço é obrigatório"),
// });

type FormInputs = {
  title: string;
  price: number;
};

//yup
export function AddProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: FormInputs) {
    try {
      // Chamamos a função de criação
      const newProd = await addProduct(data as Partial<Product>);
      toast.success(`Produto criado! ID: ${newProd.id}`);
      reset(); // Limpa o formulário
    } catch (err) {
      toast.error("Falha ao criar produto.");
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Criar Produto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-semibold">Título</label>
          <input
            type="text"
            className="border border-gray-300 w-full p-2 rounded"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block font-semibold">Preço</label>
          <input
            type="number"
            className="border border-gray-300 w-full p-2 rounded"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded"
        >
          Criar
        </button>
      </form>
    </div>
  );
}
