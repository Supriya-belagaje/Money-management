import { useRouter } from "next/router";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Home() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true); // manage toggle state
  
  // Login form validation
  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

// Register form validation
const registerSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  // On login submit
  const handleLogin = (values, { setSubmitting }) => {
    console.log("Login Data:", values);
    router.push("/dashboard");
    setSubmitting(false);
  };

  // On register submit
  const handleRegister = (values, { setSubmitting }) => {
    console.log("Register Data:", values);
    router.push("/dashboard");
    setSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border-none">
        <CardContent className="p-8">
          <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-2">💰 Money Manager</h1>
          <p className="text-sm text-center text-gray-500 mb-6">Track and control your spending smartly.</p>

          {isLogin ? (
            <>
              {/* Login Form */}
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={handleLogin}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <div>
                      <Field
                        as={Input}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="focus:ring-indigo-400"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="focus:ring-indigo-400"
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                      Login
                    </Button>
                  </Form>
                )}
              </Formik>

              <p className="text-sm text-center mt-4 text-gray-600">
                Don't have an account?{" "}
                <button onClick={() => setIsLogin(false)} className="text-indigo-600 font-medium hover:underline">
                  Sign up
                </button>
              </p>
            </>
          ) : (
            <>
              {/* Register Form */}
              <Formik
                initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
                validationSchema={registerSchema}
                onSubmit={handleRegister}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <div>
                      <Field
                        as={Input}
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        className="focus:ring-indigo-400"
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="focus:ring-indigo-400"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="focus:ring-indigo-400"
                      />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <Field
                        as={Input}
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="focus:ring-indigo-400"
                      />
                      <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isSubmitting}>
                      Register
                    </Button>
                  </Form>
                )}
              </Formik>

              <p className="text-sm text-center mt-4 text-gray-600">
                Already have an account?{" "}
                <button onClick={() => setIsLogin(true)} className="text-indigo-600 font-medium hover:underline">
                  Login
                </button>
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
