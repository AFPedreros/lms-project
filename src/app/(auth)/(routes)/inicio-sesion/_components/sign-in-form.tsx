"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Form } from "@/components/form";
import { Divider, Link } from "@nextui-org/react";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { GoogleSignInButton } from "./google-signin-button";

export function SignInForm() {
  const { handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { redirect: false });
    } catch (error) {
      console.error("Error", error);
      toast.error("Ocurrió un error al iniciar sesión.");
    } finally {
      setIsLoading(false);
      toast.success("Sesión iniciada correctamente.");
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-background lg:w-1/2">
      <div className="flex w-full max-w-sm animate-fade flex-col items-center gap-4 p-4">
        <div className="w-full text-left">
          <p className="pb-2 text-xl font-medium">Bienvenido de nuevo</p>
          <p className="text-small text-default-500">
            Inicia sesión para continuar
          </p>
        </div>
        <Form
          className="flex w-full flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <GoogleSignInButton isLoading={isLoading} />
        </Form>
        <Divider className="w-full" />
        <p className="text-pretty text-sm">
          Creando una cuenta aceptas nuestros{" "}
          <Link
            className="text-sm"
            href="#"
            color="secondary"
            underline="hover"
          >
            Términos y Condiciones
          </Link>{" "}
          y{" "}
          <Link
            className="text-sm"
            href="#"
            color="secondary"
            underline="hover"
          >
            Políticas de Privacidad
          </Link>
        </p>
      </div>
    </div>
  );
}
