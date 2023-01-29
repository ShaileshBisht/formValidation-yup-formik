//tutorail link
// https://www.youtube.com/watch?v=0S-pyTJ2ZvU&t=4s

import logo from "./logo.svg";
import "./App.css";
import { useFormik } from "formik";
import { formSchema } from "./validation";

function App() {
  const initialValues = {
    name: "",
    number: "",
    email: "",
    password: "",
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {},
  });

  console.log(errors);

  return (
    <div className="App">
      <h1>hello</h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "0 auto",
          gap: "2rem",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={values.name}
        />
        {errors?.name && <p>{errors.name}</p>}
        <input
          type="number"
          name="number"
          placeholder="number"
          onChange={handleChange}
          value={values.number}
        />
        {errors.number && <p>{errors.number}</p>}

        <input
          type="email"
          name="email"
          id=""
          placeholder="email"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          onChange={handleChange}
          value={values.password}
        />
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
