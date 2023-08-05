"use client";
import React, {DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";
import ErrorText from "@/components/client/form/ErrorText";

interface FormInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    classNames?: string;
    error?: FieldError | undefined;
}

const FormInput = forwardRef(function FormInput(
        {classNames, error, ...rest}: FormInputProps,
        ref: ForwardedRef<HTMLInputElement>
    ) {

        return (
            <div>
                <input
                    {...rest}
                    ref={ref}
                    aria-invalid={!!error}
                    aria-describedby={error ? `error-${rest.name}` : undefined}
                    className={`input input-bordered w-full input-ghost placeholder-gray-400 ${classNames}`}
                />
                {error && <ErrorText>{error?.message}</ErrorText>}
            </div>
        );
    }
);
export default FormInput;
