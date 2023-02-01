const GENDER = 
{
  labelData:['male','female'],
  valueData:[450,550]
}
const RACE = {
  labelData:['white','black','hispanic','first nation','asian','2 or more'],
  valueData:[500,150,150,50,100,50]
}
const COLORDICT = {
  Female:'#FC363B',
  Male:'#2766F6',
  White:'#60dbe8',
  'Black or African American':'#9b5fe0',
  'Hispanic or Latino':'#16a4d8',
  'Native Hawaiian Or Pacific Islander':'#8bd346',
  Asian:'#D5933C',
  'American Indian or Alaska Native':'#d64e12',
  'Two or More Races':'#efdf48',
  'Exec/Sr. Officials & Mgrs':'#E3342F',
  'First/Mid Officials & Mgrs':'F6993F',
  'Professionals':'#FFED4A',
  'Technicians':'#38C172',
  'Sales Workers':'#4DC0B5',
  'Administrative Support':'#F66D9B',
  'Craft Workers':'#6574CD',
  'Operatives':'#3490DC',
  'Laborers & Helpers':'#6574CD',
  'Service Workers':'#9561E2'
}

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

export default {GENDER,RACE,COLORDICT}