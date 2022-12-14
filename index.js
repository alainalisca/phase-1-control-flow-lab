function scuberGreetingForFeet(distance){
  let ride;
   if (distance <= 400) {
       return ride = "This one is on me!"; 
    } else if (distance >= 2000 && distance <= 2500) {
        return ride = "I will gladly take your thirty bucks.";
      } else (distance >= 2501) 
      {
          return ride = "No can do.";
  }
}

function ternaryCheckCity(city) {
  let location
  location = city === "NYC" ? "Ok, sounds good." : "No go."  
  return location
}

function switchOnCharmFromTip(tip) {
  let generous

  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.'
  }
}