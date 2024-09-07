import React from "react";
function LogoWithThumbnail() {
  return (
    <>
      <img
        src={"https://avatars.githubusercontent.com/u/10737044?v=4"} // Replace with your image URL or import
       
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          marginRight:"8px",
          objectFit: "cover",
          border: "3px",
        }}
      />
      <span style={{ fontSize: "xx-large" }}>
        <b>Athar Faridi</b>
      </span>
    </>
  );
}

export default LogoWithThumbnail;
