function pieceOfPie(array, firstPie, secondPie) {
   let firstIndex =  array.indexOf(firstPie);
   let secondIndex =  array.indexOf(secondPie);

   let newArray = array.slice(firstIndex, secondIndex + 1);

   console.log(newArray);
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
)