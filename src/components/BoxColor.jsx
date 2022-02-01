function BoxColor ({r, g, b}) {
    const divStyle = {
      backgroundColor: `rgb(${r},${g},${b})`
      }
    return (
      <div>
        <h4 style={divStyle}> rgb{r},{g},{b}</h4>
      </div>
    )
}

export default BoxColor;