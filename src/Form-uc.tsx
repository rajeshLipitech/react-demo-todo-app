import React from "react";

export const FormUc: React.FC<{}> = () => {
  const inp1: string = "Formc UC";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.sample.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="sample" defaultValue={inp1} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
