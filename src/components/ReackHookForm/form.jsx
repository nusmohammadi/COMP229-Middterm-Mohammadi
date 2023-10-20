import { useForm } from "react-hook-form";
import "./form-styles.css";

function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const onCancel = () => {
    reset();
  };

  return (

<div className="form-container">
      <h1>New Product</h1>

    <form onSubmit={handleSubmit(onSubmit)} className="hook">
      <label className="input_text">Name</label>
      <input
        type="text"
        className="input_labels"
        {...register("name", { required: true })}
      />
      {errors.name && <p className="error">Name is required</p>}

      <label className="input_text">Description</label>
      <input
        type="text"
        className="input_labels"
        {...register("description", { required: true })}
      />
      {errors.description && <p className="error">Description is required</p>}

      <label className="input_text">Category</label>
      <input
        type="text"
        className="input_labels"
        {...register("category", { required: true })}
      />
      {errors.category && <p className="error">Category is required</p>}

     
      <label className="input_text">Quanitity</label>
      <input
        type="number"
        className="input_labels"
        {...register("quantity", { required: true })}
      />
      {errors.price && <p className="error">Quanitity is required</p>}

      <label className="input_text">Price</label>
      <input
        type="number"
        className="input_labels"
        {...register("price", { required: true })}
      />
      {errors.price && <p className="error">Price is required</p>}

      <button className="button" type="submit">
        Submit
      </button>

      <button className="button" type="button" onClick={onCancel}>
        Cancel
      </button>

    </form>
    </div>
  );
}

export default ProductForm;
