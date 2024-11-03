
  function capitalize (s) {
    let odd = s.split("") .map((l, i)=> i % 2 !== 0 ? l.toUpperCase() : l).join("")
    let even = s.split("").map((l,i)=> i % 2 === 0 ? l.toUpperCase() : l).join("")
    return [even, odd]
  }
  console.log(capitalize("abcdef"))