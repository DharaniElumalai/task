localStorage.setItem("lastname", "Smith");
function myFunction() {
    var addtask = document.getElementById("myText").value; //get
    localStorage.setItem("addtask","hello");
    if(addtask==""){
        alert("Your input field is empty" );
    }
    else
    {   
         var a=document.querySelector('#list').innerHTML += `
        
            <div class="task">
                <span id="taskname">
                ${document.querySelector('#myText').value}
                </span>
                
            </div>
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
                var scan=document.createElement("scan");
                scan.className="close1";
                var close1=document.createTextNode("Edit");
                scan.appendChild(close1,a);
                taskname[i].appendChild(scan);

                
                const paragraph = document.getElementById("myText");
                const edit_button = document.getElementsByClassName("close1");
                const end_button = document.getElementById("end-editing");
                
                edit_button.onclick=function(){
                  paragraph.contentEditable = true;
                  paragraph.style.backgroundColor = "#dddbdb";
                } ;
                
                end_button.onclick=function() {
                  paragraph.contentEditable = false;
                  paragraph.style.backgroundColor = "#ffe44d";
                } 
                  
            
            }
        




              /* 
                let editItem = null;
                var scan=document.createElement("scan");
                scan.className="close1";
                var close1=document.createTextNode("Edit");
                scan.appendChild(close1,a);
                taskname[i].appendChild(scan);
            }
        
        
            let viewMode = {};
            let editMode = {};
            if (editing) {
              viewMode.display = 'none';
            } else {
              editMode.display = 'none';
            }
            return (
              <li className={styles.item}>
                <div className={styles.content} style={viewMode}>
                 
                </div>
                <input
                  // ...
                  style={editMode}
                />
              </li>
            );*/
          
            
                  
      
       
    
       
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
            

  
          
     
      
    
   


  

        
       
        