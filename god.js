
function myFunction() {
    var addtask = document.getElementById("myText").value; //get
    
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
                    alert("Are you sure do you want to delete");
             
                    
                        var d=this.parentElement;
                    d.style.display="none";
                    }           
                }           
           
                }
               
                let editItem = null;
                //var scan=document.createElement("scan");
                scan.className="close1";
                //var close1=document.createTextNode("Edit");
                scan.appendChild(close1);
                taskname[i].appendChild(scan);
            }
        
        
            var close1=document.getElementsByClassName("close1");
            for(i=0;i<close1.length;i++){
                document.getElementById("mytext").innerHTML
                = "Text edited successfully";
                
                let editButton = document.createElement("button");
  
                editButton.className =
                        "btn-success";
              
                editButton.appendChild(document.createTextNode("Edit"));
              
                butt.appendChild(document.createTextNode(newItem));
               
                li.appendChild(editButton);
              
                items.appendChild(list);
                if (e.target.classList.contains("edit")) {
                    document.getElementById("item").value =
                        e.target.parentNode.childNodes[0].data;
                    submit.value = "EDIT";
                    editItem = e;
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
            

  
          
     
      
    
   


  

        
       
        