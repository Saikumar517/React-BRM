import React from 'react'

const PageNotFound = () => {
  return (
    <div style={styles} >
      <h1> Oops..! Page not found </h1>
    </div>
  )
}

const styles ={
  display: "flex",
  justifyContent : "center",
  alignItems: "center",
  alignContent : "center",
  height: "100vh",
  textShadow: "5px 2px 3px red",
  color: "#fff",
  backgroundColor: "#000"
  }

export default PageNotFound