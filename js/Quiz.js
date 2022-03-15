class Quiz {
constructor(){

    this.accessCode1 = "ADA LOVENLECE";
    this.accessCode2 = "ALAN KAY";
    this.accessCode3 = "CHARLES BABBAGE";

    this.clue1  = createElement("h4") ;
    this.clue2  = createElement("h4") ;
    this.clue3  = createElement("h4") ;
    this.q1 = createElement("h4") ;
    this.q2 = createElement("h4") ;
    this.q3 = createElement("h4") ;


    
    this.access1 = createInput("").attribute("placeholder", "Enter your Answer");
     

    this.button1 = createButton('Check');
    

    this.access2 = createInput("").attribute("placeholder", "Enter your Answer");
   

    this.button2 = createButton('Check');
  

    this.access3 = createInput("").attribute("placeholder", "Enter your Answer");
    

     this.button3 = createButton('Check');
   
}

 clues() {
    var clue1 , clue2 , clue3 ;
    clue1 = `A D D L V O E L E E` ;
    this.clue1.html(clue1) ;

    clue2 = `K A L A N Y A` ;
    this.clue2.html(clue2) ;
    
    clue3 = `C R H A E L S B B A B A G E` ;
    this.clue3.html(clue3) ;

    var q1 , q2 , q3 ;

    q1 = `Question: Name the person who created coding !!` ;
    this.q1.html(q1) ;

    q2 = `Question: Name the person who invented OOP ?` ;
    this.q2.html(q2) ;

    q3 = `Question: Who invented computer ?` ;
    this.q3.html(q3) ;
    

}


handleQuiz(){
    this.access1.position(100,100);
    this.access1.style('background', 'white');

    this.button1.position(100,130);
    this.button1.style('background', 'lightgrey');  

    this.access2.position(700,200);
    this.access2.style('background', 'white');  

    this.button2.position(700,230);
    this.button2.style('background', 'lightgrey');

    this.access3.position(100,300);
    this.access3.style('background', 'white'); 

    this.button3.position(100,330);
    this.button3.style('background', 'lightgrey');


    this.clue1.position(100,50) ;
    this.clue1.class("quizq") ;
    this.q1.position(100,30) ;
    this.q1.class("quizq") ;

    this.clue2.position(700,150);
    this.clue2.class("quizq") ;
    this.q2.position(700,130) ;
    this.q2.class("quizq") ;


    this.clue3.position(100,250);
    this.clue3.class("quizq") ;
    this.q3.position(100,230) ;
    this.q3.class("quizq") ;



}

display(){
    this.handleQuiz() ;
    this.clues() ;
    this.button1.mousePressed(() => {
        if(system.authenticate(accessCode1,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
        }
    });

    this.button2.mousePressed(() => {
        if(system.authenticate(accessCode2,this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
        }
    });

    this.button3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.access3.value())){
      
            this.button3.hide();
             this.access3.hide();
             score++;
            }
        });
    }

}