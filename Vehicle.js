let Vehicle = function(e,f,g,mpg,d){
    let engine = e;
    let fuel = f;
    let gastank = g;
    let averageMPG = mpg;
    let mileDriven = m;
}

function totalMiles(){
  return milesDriven;
}
function fuelLeft(){
  return fuel;
}
function fill(percent){
  fuel += percent;
  if(fuel > 1){
    fuel = 1;
  }
}
function drive(){
  let fuelburn = hours*engineEfficency();
  if(fuelburn<=fuel){
    milesDriven += (hours*averageMPG);
    fuel -= fuelburn
  }
  else{
    milesDriven = fuel*averageMPG;
    fuel = 0;
  }
}
function engineEfficency(){
  if(engine == 4){
    return 1;
  }
  else if(engine == 6){
    return 1.2;
  }
  else if(engine == 8){
    return 1.36;
  }
  else{
    return null;
    console.log("You have no engine.");
  }
}

module.expots = Vehicle;
