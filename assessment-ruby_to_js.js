// Convert the following from ruby to javascript
// a function that opens the door if the password is correct 

// def open_door(password)
// correct_password = "OpenSesame"
//   if password == correct_password     
//   	output = "The door is open."             
//   else              
//   	output = "You fall to your doom."   
//   end
//   output       
//   end       


function open_door(password) {
	var correct_password = "OpenSesame"

	if (password === correct_password) {
		return "The door is open"
	} else {
        return "You fall to your doom"
    }
}

open_door("randompwd")
open_door("OpenSesame")


//   a function that makes a sandwich from a hash 

//   def sandwich(ingredients)    
	//   puts "#{ingredients['bread']} bread"    
	//   puts "#{ingredients['cheese']} cheese"    
	//   puts ingredients['protein']    
	//   puts ingredients['condiment']    
	//   puts "#{ingredients['bread']} bread" 
//   end

// i haven't finished this one fffffffff

// function sandwich(ingredients) {
//     console.log(ingredients["bread"] + "bread");
//     console.log(ingredients["cheese"] + "cheese");
//     console.log(ingredients["protein"]);
//     console.log(ingredients["condiment"]);
//     console.log(ingredients["bread"] + "bread");
// }

// var ingredients = {
//     "bread": "something",
//     "cheese": "something",
//     "protein": "something",
//     "condiment": "something"
// }

// sandwich(ingredients)




