"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { loginSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./form-input";

const FormLogin = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  return (
    <form className="mx-auto flex w-full max-w-lg flex-col items-center justify-center gap-y-6 px-2 sm:px-10">
      <Form {...form}>
        <FormInput
          formInstance={form}
          name="username"
          placebholder="Username"
        />
        <FormInput
          formInstance={form}
          name="password"
          placebholder="*******"
          type="password"
        />
        <Button className="w-full rounded-3xl px-5 py-6 font-semibold shadow-lg">
          Login
        </Button>
      </Form>
    </form>
  );
};

export default FormLogin;
