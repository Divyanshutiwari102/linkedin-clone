// src/utils/schemaValidation/auth.ts
import * as Yup from "yup";

/* =============================
   🔹 Sign Up Schema
============================= */
export const SignUpSchemaValidation = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name must not exceed 25 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
  imageUrl: Yup.string().url("Please enter a valid image URL").optional(),
});

// alias for compatibility
export const signupSchemaValidation = SignUpSchemaValidation;

/* =============================
   🔹 Login Schema (fixed)
============================= */


export const LoginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),

  // ✅ Optional boolean without null type errors
  acceptTerms: Yup.bool()
    .nullable()
    .transform((value) => value ?? false)
    .notRequired(),
});


/* =============================
   🔹 Forgot / Reset Schema
============================= */
export const ResetPasswordSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address"),
});

export const RestPasswordSchemaValidation = ResetPasswordSchemaValidation;
export const ForgotPasswordSchemaValidation = ResetPasswordSchemaValidation;
