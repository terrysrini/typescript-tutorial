/**
 * Type Annotation of Function Parameters
 */
function display(id:number, name:string)
{
    console.log("Id = " + id + ", Name = " + name);
}


/**
 * Type Annotation in Object
 */


var employee : { 
    id: number; 
    name: string; 
}; 

employee = { 
  id: 100, 
  name : "John"
}
