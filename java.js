function inscription(){
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    document.getElementById('email').setAttribute("type", "email");
    let tele = document.getElementById('tele').value;
    document.getElementById('tele').setAttribute("type", "tel");
    let checkboxes = document.querySelectorAll('input[name="a"]:checked');
    let checkboxes1 = document.querySelectorAll('input[name="b"]:checked');
    let phoneRGEX = /^[0]{0,1}[5-7]{0,1}[0-9]{3}[0-9]{0,1}[0-9]{4}$/;
    let validRegex = /^[a-zA-Z]+[.]{1}[a-zA-Z]+[@]{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    let regName = /^[a-zA-Z]{3,30}$/;
    let values = [];
    let values1 = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    checkboxes1.forEach((checkbox) => {
        values1.push(checkbox.value);
    });
    let selected = [];
    for (var option of document.getElementById('selected1').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    let tab = "Votre Nom est :" + " " + nom + "<br>" + "<br>"+ "Votre Prénom est :" + " " + " " + prenom + "<br>"+"<br>" + "Votre Email est :" + " " + " " + email + "<br>"+ "<br>" + "Votre Télephone est :" + " " +  " " +tele + "<br>"+ "<br>" + "Votre Genre est :" + " " + " " + values + "<br>"+ "<br>" + "Votre Group est :" + " " + " " + values1 + "<br>"+ "<br>" + "Votre choix du Club(s) est :" + " " + " " + selected;
    if (nom.length == "" || nom.length > 30 || regName.test(nom)===false) {
        document.getElementById('return1').innerHTML="S'il vous plait saisez votre nom!!";
    }
    if (prenom.length == "" || prenom.length > 30 || regName.test(prenom)===false) {
        document.getElementById('return2').innerHTML="S'il vous plait saisez votre prenom!!";
    }
    if(email =="" || validRegex.test(email)===false){
        document.getElementById('return3').innerHTML="S'il vous plait saisez valid format d'email!!";
    }
    if(tele =="" || phoneRGEX.test(tele)===false){
        document.getElementById('return4').innerHTML="S'il vous plait saisez valid format de telephone!!";
    }
    if(values == ""){
        document.getElementById('return5').innerHTML="S'il vous plait choisez votre Genre!!";
    }
    if(values1 == ""){
        document.getElementById('return6').innerHTML="S'il vous plait choisez votre Group!!";
    }
    if(selected == ""){
        document.getElementById('return7').innerHTML="S'il vous plait choisez le choix du club!!";
    }
    if(selected.length > 3){
        document.getElementById('return7').innerHTML="S'il vous plait choisez just 3 choix du club!!";
    }
    if((nom.length <= 30 && regName.test(nom)) && (prenom.length <= 30 && regName.test(prenom)) && validRegex.test(email) && ((tele.length == 10)&&(phoneRGEX.test(tele))) && values.length !== 0 && (values1.length !== 0) && (selected.length !== 0 && selected.length <=3) ){
        window.location.replace("#fieldset");
        document.getElementById('fieldset').style.display='block';
        document.getElementById('ins1').innerHTML="Inscription achevée !!";
        document.getElementById('ins2').innerHTML=tab;  
    }
    else{
       document.getElementById('return8').style.display='block';
       document.getElementById('return8').innerHTML="S'il vous plait saisez tout votre informations!!";
    } 
}

function validName(){
    let nom = document.getElementById('nom').value;
    let regName = /^[a-zA-Z]{3,30}$/;
    if (regName.test(nom)===false){
        document.getElementById('nom').style.border='3px solid red';
        document.getElementById('nom').style.background='rgb(248, 147, 147)';
        document.getElementById('return1').innerHTML="S'il vous plait saisez votre correct nom!!";
        document.getElementById('return1').style.color="red";
    }
    else{
        document.getElementById('nom').style.border='3px solid green';
        document.getElementById('nom').style.background='rgb(130, 246, 130)';   
        document.getElementById('return1').innerHTML="Votre nom est valide";
        document.getElementById('return1').style.color="green";
    }
}

function validPrenom(){
    let prenom = document.getElementById('prenom').value;
    let regName = /^[a-zA-Z]{3,30}$/;
    if (regName.test(prenom)===false) {
        document.getElementById('prenom').style.border='3px solid red';
        document.getElementById('prenom').style.background='rgb(248, 147, 147)';
        document.getElementById('return2').innerHTML="S'il vous plait saisez votre correct prenom!!";
        document.getElementById('return2').style.color="red";
    }
    else{
        document.getElementById('prenom').style.border='3px solid green';
        document.getElementById('prenom').style.background='rgb(130, 246, 130)';
        document.getElementById('return2').innerHTML="Votre prenom est valide";
        document.getElementById('return2').style.color="green";
    }
}

function validTell(){
    let tele = document.getElementById('tele').value;
    let phoneRGEX = /^[0]{0,1}[5-7]{0,1}[0-9]{3}[0-9]{0,1}[0-9]{4}$/;
    document.getElementById('tele').setAttribute("type", "tel");
    let phone = tele.length;
    if(phoneRGEX.test(tele)&&phone==10){
        document.getElementById('tele').style.border='3px solid green';
        document.getElementById('tele').style.background='rgb(130, 246, 130)';
        document.getElementById('return4').innerHTML="Votre telé est valide";
        document.getElementById('return4').style.color="green";

    }
    else{
        document.getElementById('tele').style.border='3px solid red';
        document.getElementById('tele').style.background='rgb(248, 147, 147)';
        document.getElementById('return4').innerHTML="S'il vous plait saisez votre correct telephone!!";
        document.getElementById('return4').style.color="red";

    }
}

function validEmail(){
    let email = document.getElementById('email').value;
    let validRegex = /^[a-zA-Z]+[.]{1}[a-zA-Z]+[@]{1}[o]{1}[f]{1}[p]{2}[t]{1}[.]{1}[m]{1}[a]{1}$/;
    document.getElementById('email').setAttribute("type", "email");
    console.log(validRegex.test(email));
    
    if(validRegex.test(email)){
        document.getElementById('email').style.border='3px solid green';
        document.getElementById('email').style.background='rgb(130, 246, 130)';
        document.getElementById('return3').innerHTML="Votre email est valide";
        document.getElementById('return3').style.color="green";
    }
    else{
        document.getElementById('email').style.border='3px solid red';
        document.getElementById('email').style.background='rgb(248, 147, 147)';
        document.getElementById('return3').innerHTML="S'il vous plait saisez votre correct email!!";
        document.getElementById('return3').style.color="red";
    }
}

function reset(){
    let check = document.getElementById('Féminin').checked;
    let check1 = document.getElementById('Masculin').checked;
    let check2 = document.getElementById('DW101').checked;
    let check3 = document.getElementById('DW102').checked;
    let check4 = document.getElementById('DW103').checked;
    let check5 = document.getElementById('DM101').checked;
    let check6 = document.getElementById('DM102').checked;
    document.getElementById('nom').value="";
    document.getElementById('prenom').value="";
    document.getElementById('email').value="";
    document.getElementById('tele').value=""; 
    document.getElementById('Féminin').checked="";
    document.getElementById('DW101').checked="";
    document.getElementById('DW102').checked="";
    document.getElementById('DW103').checked="";
    document.getElementById('DM101').checked="";
    document.getElementById('DM102').checked="";

}



