class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //escribe aquí el código para ocultar los elementos de la pregunta
question.hide();
    //escribe aquí el código para cambiar el color de fondo 
background("blue");
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
fill("black");
textSize(26);
text("resutaltado del cuestionaro",340,50);
text("----------------------------------------------------------------------------",320,65)
    //llama aquí a getContestantInfo( )
    Contestant.getPlayerInfo();


    //escribe la condición para comprobar si contestantInfor no está indefinido 
      if (allContestants!= undefined) {

        var displayAwnsers=230;
        fill("yello");
        textSize(20);
        text("nota:el concursante que contesto bien es verde",130,230);
        for(var p in allContestants){
          var correctAwnser="2";

          if (correctAwnser ==allContestants[p].awnser) {
            fill("green");
          }else{
            fill("red");
          }
          displayAwnsers+=30;
          textSize(20);
          text(allContestants[p].name+" : "+allContestants[p].awnser,250,displayAwnsers)
        }
      }
    //escribe aquí el código para agregar una nota

    //escribe el código para resaltar al concursante que respondió correctamente
    
  }

}
