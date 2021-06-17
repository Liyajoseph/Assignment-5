document.getElementById('button').addEventListener('click', calculateArea)

let diameter = 0
let radius = 0
const pi = 3.141592653589793
let area = 0
let circumference = 0

function calculateArea () {
  diameter = document.getElementById('input').value
  radius = parseInt(diameter) / 2
  area = pi * radius * radius
  circumference = 2 * pi * radius
  document.getElementById('ans1').innerHTML = 'Area: ' + area
  document.getElementById('ans2').innerHTML = 'Circumference: ' + circumference
}
