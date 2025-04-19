"use client";

import { ArrowIcon } from "@/assets";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";
import { GradientedButton } from "../GradientedButton";
import { createPortal } from "react-dom";
import { Input } from "./components";
import { OrderFormData } from "@/types";
import { submitRequest } from "@/service/api";

export const OrderModal: FC = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string>();

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
      }),
    [],
  );

  const {
    control,
    formState: { isSubmitting, errors },
    reset,
    handleSubmit,
  } = useForm<OrderFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    reset();
    setError(undefined);

    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [reset, show]);

  const submitHandler: SubmitHandler<OrderFormData> = useCallback(async (data) => {
    try {
      await submitRequest(data);
      setShow(false);
    } catch {
      setError("Unexpected error. Try again later");
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setShow(true)}
        className="group bg-blue-to-fuchsia bg-clip-text text-4xl uppercase text-transparent transition-[opacity_colors] hover:text-white active:text-transparent"
      >
        <span>/Book AI consultation/</span>
        <ArrowIcon className="-mt-2 ml-2 inline size-8 text-coral transition-[opacity_colors] group-hover:text-white group-active:text-coral" />
      </button>

      {show &&
        createPortal(
          <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-xl">
            <form noValidate onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-6 bg-main px-8 py-10 shadow-xl">
              <h2 className="text-2xl font-bold">Submit request</h2>

              {error && <div className="text-red-500">{error}</div>}

              <div className="flex flex-col gap-4">
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => <Input label="Name" {...field} error={errors.name?.message} width={400} />}
                />
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => <Input label="E-mail" {...field} error={errors.email?.message} />}
                />
                <Controller
                  control={control}
                  name="telegram"
                  render={({ field }) => <Input label="Telegram" {...field} error={errors.telegram?.message} />}
                />
                <Controller
                  control={control}
                  name="whatsapp"
                  render={({ field }) => <Input label="WhatsApp" {...field} error={errors.whatsapp?.message} />}
                />
              </div>

              <div className="flex justify-end gap-6">
                <GradientedButton type="submit" disabled={isSubmitting}>
                  Submit
                </GradientedButton>
                <GradientedButton type="button" onClick={() => setShow(false)}>
                  Cancel
                </GradientedButton>
              </div>
            </form>
          </div>,
          document.body,
        )}
    </>
  );
};
