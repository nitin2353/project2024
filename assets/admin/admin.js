  

  
  let allbutton = document.querySelectorAll("button"); 
       let dash = document.getElementById('dashboard'); 
       let emp = document.getElementById('addemp');
       let sal = document.getElementById('empsal')
       let leave = document.getElementById('empleave')
       let chpass = document.getElementById('chpass')
       
        function dashboard(){
            // document.getElementsByTagName('button').style=" background-color: #2C5454;"
            // document.querySelector('#b1').style="background-color: #2b7575;"
            dash.style="display:block;"
            emp.style="display:none";
            sal.style="display:none";
            leave.style="display:none";
            chpass.style="display:none";
            window.location.href="../../dashboard.html";
          
        }
        function addemp(){
            // document.querySelectorAll('button').style=" background-color: #2C5454;"        
            // document.querySelector('#b2').style="background-color: #2b7575;"
            emp.style="display:block;"
            dash.style="display:none";
            sal.style="display:none";
            leave.style="display:none";
            chpass.style="display:none";
            
        }
        function empsal(){
            // document.getElementsByTagName('button').style=" background-color: #2C5454;"           
            // document.querySelector('#b3').style="background-color: #2b7575;"
            sal.style="display:block;"
            dash.style="display:none";
            emp.style="display:none";
            leave.style="display:none";
            chpass.style="display:none";
           
        }
        function emple(){
            // document.getElementsByTagName('button').style=" background-color: #2C5454;"
            // document.querySelector('#b4').style="background-color: #2b7575;"
            leave.style="display:block;"
            dash.style="display:none";
            emp.style="display:none";
            sal.style="display:none";
            chpass.style="display:none";
            if(document.querySelector('#b4').style.background-color === '#2b7575'){
                document.querySelector('#b4').style.background='#2C5454';
            }else{
                document.querySelector('#b4').style.background='#2b7575';
            }
        
        }
        function chpas(){
            // document.getElementsByTagName('button').style=" background-color: #2C5454;"
            // document.querySelector('#b5').style="background-color: #2b7575;"
            chpass.style="display:block";
            dash.style="display:none";
            emp.style="display:none";
            sal.style="display:none";
            leave.style="display:none";
            
        }
            let adminfield = document.getElementById('adminId');
            let otpfield = document.getElementById('otp');
            let otbtn = document.getElementById('chbtn');

        document.getElementById('adminId').addEventListener('input',function(){
           if(adminfield.value === `${localStorage.getItem('email')}`){             //yaha per local storage se get karenge
                otbtn.setAttribute('value','Send OTP');
                otbtn.style="display: block !important;"
                otbtn.setAttribute('type','button');
           }
        })    

        var temp = ""
        var j = 1;
        document.getElementById('chbtn').addEventListener('click',function(){
  
            this.removeAttribute('data-bs-target');
            let otp =""
            if(j<=1){
            for (let i = 0; i < 4; i++ ) { 
                otp += Math.floor(Math.random() * 10); 
            }
            temp=otp
            console.log(temp)
            j++;
            }
            
            navigator.clipboard.writeText(otp)
            document.getElementById('showotp').innerHTML = otp;
            
            document.getElementById('otp').style.display="block"
            this.value="Submit";
            otbtn.setAttribute('type','button');
            otbtn.setAttribute('onclick','submiting()');

        })
        let form1 = document.querySelector('.form-one');
        let form2 = document.querySelector('.form-two');
        let pdone = document.querySelector('.passdone');
        function submiting(){
            console.log(temp);
            if(adminfield.value != "" && otpfield.value == temp){
                          form1.style="display:none;"
                     document.querySelector('.loading').style="display:flex;"
                        setTimeout(loadingHide,6000);
                        function loadingHide(){
                            document.querySelector('.loading').style="display:none;"
                        }
                        setTimeout(setPass,6000);
                        function setPass(){
                                form2.style="display:block;"
                          
                                // Condition put here for password
                                document.addEventListener('input',function(){
                                    let cp1 = document.getElementById('cpass1').value;
                                    let cp2 = document.getElementById('cpass2').value;

                                        // Password conditions
                                        let errorMessage = document.getElementById('errorMessage');
                                        
                                        if (!/[0-9]/.test(cp1 || cp2)) {
                                            errorMessage.textContent = "Password must contain at least one number.";
                                            return;
                                        }
                                        
                                        if (!/[!@#$%^&*]/.test(cp1 || cp2)) {
                                            errorMessage.textContent = "Password must contain at least one special character (!@#$%^&*).";
                                            return;
                                        }
                                        if (cp1.length < 8  || cp2.length < 8) {
                                            errorMessage.textContent = "Password must be at least 8 characters long.";
                                            return;
                                        }

                                    if(cp1 == cp2 && cp1 != "" && cp2 != ""){
                                        localStorage.setItem('pas',cp2);
                                        document.querySelector('.finalbtn').removeAttribute('disabled');
                                        // save data in local storage
                                        form2.style="display:none;"
                                        document.querySelector('.loading').style="display:flex;"
                                        setTimeout(loadingHide,6000);
                                        function loadingHide(){
                                            document.querySelector('.loading').style="display:none;"
                                            pdone.style="display: block;"
                                        }
                                        setTimeout(stoploading(),6000);
                                        function stoploading(){
                                             pdone.style="display: none;"
                                        }
                                    }

                                })

                        }

                }
                else{
                    alert("Something Went Wrong!!");
                }
        }
        function loadpage(){
            document.querySelector('.container').style="display:none;"
            document.querySelector('.loading2').style="display:flex;"
            setTimeout(hideloader,6000);
            function hideloader(){
                document.querySelector('.loading2').style="display:none;"
                 document.querySelector('.container').style="display:block;"
                 
            }
        }
