const HEIGHT = 900;
const WIDTH = 1500;
const detectionDistance=100;

function distance(a,b){
return Math.sqrt(((a.position.x-b.position.x)**2)+((a.position.y-b.position.y)**2))
}