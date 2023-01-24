import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Need a longer password")
    .required("password is required"),
  email: yup
    .string()
    .min(5, "Need a longer email")
    .required("Email is required"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form">
        <input
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
        <br />
        <input
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
          placeholder="Password"
        />

        {formik.touched.password && formik.errors.password
          ? formik.errors.password
          : ""}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
