import React, { useState } from "react";
import { makeStyles, createStyles } from "@material-ui/core";
// import styled from "styled-components";

// const StyledForm = styled.div`
//   margin-top: 5rem;
// `;

const useStyles = makeStyles(() =>
  createStyles({
    topMargin: {
      marginTop: "10rem",
    },
  })
);

export const Form: React.FC<{ handleSubmit(e: any): void }> = ({
  handleSubmit,
}) => {
  const [inp1, setInp1] = useState<string>("form");
  const cssClasses = useStyles();

  const handleChange = (e: any) => {
    setInp1(e.target.value);
  };

  return (
    // <StyledForm>
    <form onSubmit={handleSubmit} className={cssClasses.topMargin}>
      <label>
        Name:
        <input type="text" value={inp1} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <p>{inp1}</p>
    </form>
    // </StyledForm>
  );
};
