/*
Avaliar se um estudante passou no vestibular 
Para passar,tem que obedecer uma destas condições:
1) Aprovado no Vestibular

2)Passou no Enem
*/



let vestibular = true
let enem = false


if (vestibular || enem == true){

    alert("Passou no enem, e no vestibular");

} else if (vestibular == true){

    alert ("Passou pelo vestibular");

}else if (enem == true){

    alert ("Passou pelo enem");

}else if(vestibular || enem == false){

    alert("Foi reprovado");


}