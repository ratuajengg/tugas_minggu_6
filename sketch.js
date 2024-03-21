let judul;
let nama;
let nim;
let tombol;
let newton;
let objek;
let jalan = false;
let gravForce;
let windForce;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  judul = createElement('h1', 'Simulasi Hukum Newton')
  judul.position(windowWidth/4, 15)
  nama = createElement('h2','Ratu Ajeng Fadila Husen')
  nama.position(30, 80)
  nim = createElement('h2','122160029')
  nim.position(30, 108)
  tombol = createButton('Jalankan/Pause')
  tombol.position(30,160)
  
  
  objekPos = createVector(width/10,200);
  objekVel = createVector(0,0);
  objekAcc = createVector(0,0);
  objekMass = 10;
  objek = new Mover(objekPos, objekVel, objekAcc, objekMass);
  
  gravForce = createVector(0, objek.mass*0.1);
  windForce = createVector(0.5,0);
} 
  

function draw() {
  background("lightgreen");
  
  var Cd = 0.0001;
  var diam1 = (2*objek.mass);
  var A1 = PI*diam1/2;
  var frictionForce = objek.velocity.copy();
  frictionForce.normalize()
  frictionForce.mult(-1* (frictionForce.mag()**2) *A1*Cd)
  
  
  objek.display();
  objek.applyForce(gravForce);
  objek.applyForce(windForce);
  objek.applyForce(frictionForce);
  
  tombol.mousePressed(run);
  
  if (jalan){
    objek.update();
  }

function run(){
  // objek.update();
  if (jalan){
    jalan = false;
  }
  else{
    jalan = true
  }
}
}

class Mover {
    constructor(loc, vel, acc, m){
      this.location = loc;
      this.mass = m;
      this.velocity = vel;
      this.acceleration = acc;
 }
    update(){
      this.velocity.add(this.acceleration);
      this.location.add(this.velocity);
 }
    display(){
      noStroke();
      fill("brown")
      ellipse(this.location.x, this.location.y, 2*this.mass, 2*this.mass);
 }
    applyForce(force){
      force.div(this.mass)
      this.acceleration.add(force);
 }
}
  
 
  
  
