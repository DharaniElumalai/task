//localStorage.setItem("lastname", "Smith");
function myFunction() {
  var addtask = document.getElementById("myText").value; //get
  //localStorage.setItem("addtask","hello");
 
  if(addtask==""){
      alert("Your input field is empty" );
  }
  else
  {   
       var a=document.querySelector('#list').innerHTML += `
      
          <p class="task">
              <span id="taskname">
              ${document.querySelector('#myText').value}
              </span>
              
          </p>
          `;
//delete
         
          {
              var span=document.createElement("span");
              span.className="close";
              var close=document.createTextNode("Delete");
              span.appendChild(close,a);
              taskname[i].appendChild(span);
          }
      
      
          var close=document.getElementsByClassName("close");
          for(i=0;i<close.length;i++){
              close[i].onclick=function(){
              
                  if (confirm("Are you sure do you want to delete!") == true) {
                      text = "You pressed OK!";
                    } else {
                      text = "You canceled!";
                      return false;
                    }
           
                  
                      var d=this.parentElement;
                  d.style.display="none";
                  }           
              }   
         
              }
//edit


             var scan=document.createElement("span");
              scan.className="close1";
              var close1=document.createTextNode("Edit");
              scan.appendChild(close1);
              taskname[i].appendChild(scan);

            

              
             
              var close=document.getElementsByClassName("close1");
              for(i=0;i<close.length;i++){
                  close[i].onclick=function(){
                      if (confirm("Are you sure do you want to Edit!") == true) 
                      {
                        list.onclick=function()
                        {
                          paragraph.contentEditable = true;
                        }
                      
                        }
                         else {
                          text = "You canceled!";
                          return false;
                        }
               
                                
                  }  
                  /* 
                var end=document.createElement("end");
              end.className="close1";
              var close1=document.createTextNode("Submit");
              end.appendChild(sub);
              taskname[i].appendChild(end);

              var close=document.getElementsByClassName("close1");
              for(i=0;i<close.length;i++)
                  close[i].onclick=function(){
                      if (confirm("Are you sure do you want to Edit!") == true) 
                      
                        list.onclick=function()
                        {
                          paragraph.contentEditable = true;
                        }
                      
                        
                         else {
                          text = "You canceled!";
                          return false;
                        }
                      }
*/

                  const paragraph = document.getElementById("list");
                  const edit = document.getElementsByTagName("Edit");
                  const sub = document.getElementsByTagName("submit");
              
                  
              
               sub.onclick=function() 
               {
                  list.contentEditable = false;
                  list.style.backgroundColor = "#ffe44d";
                } 
              } 
          
              
              
                
          
          }
      


      

        
        
          
                
    
     
  
     
  function Delete(){
      document.getElementById("list").style.display = "none";
     }

     
     var edit=document.getElementsByClassName("edit");
     for(i=0;i<edit.length;i++){
         edit[i].onclick=function(){         

                           
                 if (onclick=="edit") {
                         mytext.removeAttribute("readonly");
                         
                         edit.innerText = "Save";
                         myText.style.textDecoration="none"
                 }else{
                     myText.setAttribute("readonly", "readonly");
                     myText.innerText ="Edit";
                     
                 }
             }
            
          }
              
      
             
          
          
         
  
  /*
      var edit=document.getElementsByClassName("edit");
      for(i=0;i<edith.length;i++){
          edit[i].onclick=function(){
              alert("Are you sure do you want to add");
       var to=task;
              
       if (edit.innerHTML == "edit") 
       {
         
         edit.innerHTML = "save";
         input_filed_element.removeAttribute("readonly"); 
         let editButton = document.createElement("button");
       }
        else 
       {
         input_filed_element.setAttribute("readonly", "readonly");
         edit.innerHTML = "edit";
       }
              }
      }*/
