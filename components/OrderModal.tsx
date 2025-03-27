"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FloatingLabel, Modal } from "flowbite-react";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import * as yup from "yup";

const FORM_ID = "order-form";

type FormData = {
  name: string;
  email: string;
  telegram?: string;
  whatsapp?: string;
};

export const OrderModal: FC = () => {
  const [show, setShow] = useState(false);

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
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  useEffect(() => {
    reset();
  }, [reset, show]);

  const submitHandler: SubmitHandler<FormData> = useCallback(async () => {
    try {
    } catch {
      ///
    }
  }, []);

  return (
    <>
      <Button gradientDuoTone="purpleToBlue" onClick={() => setShow(true)} size="xl">
        Book AI consultation
      </Button>

      <Modal show={show} onClose={() => setShow(false)} onSubmit={handleSubmit(submitHandler)}>
        <Modal.Header>Submit request</Modal.Header>

        <Modal.Body>
          <form noValidate id={FORM_ID}>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <FloatingLabel
                  required
                  label="Name"
                  variant="filled"
                  {...field}
                  color={errors.name?.message ? "error" : "default"}
                  helperText={errors.name?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <FloatingLabel
                  label="E-mail"
                  variant="filled"
                  {...field}
                  color={errors.email?.message ? "error" : "default"}
                  helperText={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="telegram"
              render={({ field }) => (
                <FloatingLabel
                  label="Telegram"
                  variant="filled"
                  {...field}
                  color={errors.telegram?.message ? "error" : "default"}
                  helperText={errors.telegram?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="whatsapp"
              render={({ field }) => (
                <FloatingLabel
                  label="WhatsApp"
                  variant="filled"
                  {...field}
                  color={errors.whatsapp?.message ? "error" : "default"}
                  helperText={errors.whatsapp?.message}
                />
              )}
            />
          </form>
        </Modal.Body>

        <Modal.Footer className="justify-end">
          <Button gradientDuoTone="purpleToBlue" type="submit" form={FORM_ID} disabled={isSubmitting}>
            Submit
          </Button>
          <Button type="button" gradientDuoTone="purpleToBlue" outline onClick={() => setShow(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
