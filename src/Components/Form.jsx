const Form = (prop) => {
  return (
    <form onSubmit={handleSubmit} className="  form">
      <div className="form-group">
        <label htmlFor={prop}>First Name</label>
        <input
          type={prop}
          className="form-control"
          id={prop}
          name={prop}
          value={formData.email}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;
