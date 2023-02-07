import COLORDICT from "./DATA"

const yearListData = (labelData) =>{ 
    return({2019: {
      label: `2019`,
      data: [1600,400,300,600,100,50,200],
      backgroundColor: labelData.map((field)=>COLORDICT.COLORDICT[field]),
      // backgroundColor: createBackgroundGradient(ctx),
      borderColor: "black",
      borderWidth: 2
    },
    2020:{
      label: `2020`,
      data: [2600,400,500,400,10,50,200],
      backgroundColor: labelData.map((field)=>COLORDICT.COLORDICT[field]),
      // backgroundColor: createBackgroundGradient(ctx),
      borderColor: "black",
      borderWidth: 2
    },
    2021:{
      label: `2021`,
      data: [2100,800,300,100,0,50,200],
      backgroundColor: labelData.map((field)=>COLORDICT.COLORDICT[field]),
      // backgroundColor: createBackgroundGradient(ctx),
      borderColor: "black",
      borderWidth: 2
    }})}
export default yearListData