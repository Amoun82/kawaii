function Afficher()
{ 
    let input = document.getElementById("motdepasse"); 
    
    if (input.type === "password")
    { 
        input.type = "text"; 
    } 
    else
    { 
        input.type = "password"; 
    } 
}