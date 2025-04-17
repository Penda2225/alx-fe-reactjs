import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted with Formik:', values);
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Formik Registration</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1">Username</label>
            <Field
              name="username"
              className="w-full border p-2 rounded"
              placeholder="Enter your username"
            />
            <ErrorMessage name="username" component="p" className="text-red-600 text-sm" />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <Field
              name="email"
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="p" className="text-red-600 text-sm" />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <Field
              name="password"
              type="password"
              className="w-full border p-2 rounded"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="p" className="text-red-600 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
