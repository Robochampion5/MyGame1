class Game {
  constructor() {
    this.resetTitle = createElement("h2");
    this.resetButton = createButton("");
    //this.playerMoving = false;
    this.leftKeyActive = false;
   }

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  
  



  start() 
  {
    player = new Player();
    playerCount = player.getCount();

    forms = new Formm();
    forms.display();

    //this.createmaze();

    edgegroup = new Group();

    edge1 =createSprite(400,380,7,560);
    edge2 =createSprite(1135,380,7,560);
    edge3 =createSprite(546.5,100,300,7);
    edge4 =createSprite(971,100,335,7);
    edge5 =createSprite(596.5,660,400,7);
    edge6 =createSprite(1013.5,660,250,7);
    edge7 =createSprite(885,613.5,7,100);
    edge8 =createSprite(680,570,7,180);
    edge9 =createSprite(732.5,530,100,7);
    edge10 =createSprite(810,595,150,7);
    edge11 =createSprite(803.5,121.5,7, 50);
    edge12 =createSprite(1003.5,136.5,7,80);
    edge13 =createSprite(853.5,175.5,7,50);
    edge14 =createSprite(898.5,153.5,90,7);
    edge15 =createSprite(943.5,215.5,7,130);
    edge16 =createSprite(1061,250,7,200);
    edge17 =createSprite(1001.75,245,117.5,7);
    edge18 =createSprite(1095,405,75,7);
    edge19 =createSprite(803.5,261.5,7,120);
    edge20 =createSprite(876.3,280.5,141.5,7);
    edge21 =createSprite(969,347.5,188.25,7);
    edge22 =createSprite(875,379.5,7,70);
    edge23 =createSprite(1000,369,7,150);
    edge24 =createSprite(827.5,379.5,100,7);
    edge25 =createSprite(827.5,409.5,7,60);
    edge26 =createSprite(1016.5,447.5,40,7);
    edge27 =createSprite(1036.5,484,7,80);
    edge28 =createSprite(1020,527.5,40,7);
    edge29 =createSprite(936.5,497.5,7,170);
    edge30 =createSprite(958,582.5,50,7);
    edge31 =createSprite(1050,620,7,80);
    edge32 =createSprite(680,340,7,160);
    edge33 =createSprite(768.5,318,70,7);
    edge34 =createSprite(681.5,201.5,250,7);
    edge35 =createSprite(590,340,180,7);
    edge36 =createSprite(460,270,120,7);
    edge37 =createSprite(480,440,160,7);
    edge38 =createSprite(620,480,7,160);
    edge39 =createSprite(530,580,7,160);
    edge40 =createSprite(603.5,247.5,7,90);
    edge41 =createSprite(646.5,400,60,7);
    edge42 =createSprite(653.5,121.5,7, 50);
    edge43 =createSprite(559,174.5,7,60);
    edge44 =createSprite(512.5,141,100,7);
    edge45 =createSprite(693.5,50,7,100); 
    edge46 =createSprite(803.5,50,7,100);
    edge47 =createSprite(750,3.5,106,7);

    


    man = createSprite(725,65);
    man.addImage("man1", player1);
    man.scale = 0.3;

    child = createSprite(775, 65);
    child.addImage("child1", player2);
    child.scale = 0.15;

    
    players = [man, child];

    man.collide(edge1);
    man.collide(edge2);
    man.collide(edge3);
    man.collide(edge4);
    man.collide(edge5);
    man.collide(edge6);
    man.collide(edge7);
    man.collide(edge8);
    man.collide(edge9);
    man.collide(edge10);
    man.collide(edge11);
    man.collide(edge12);
    man.collide(edge13);
    man.collide(edge14);
    man.collide(edge15);
    man.collide(edge16);
    man.collide(edge17);
    man.collide(edge18);
    man.collide(edge19);
    man.collide(edge20);
    man.collide(edge21);
    man.collide(edge22);
    man.collide(edge23);
    man.collide(edge24);
    man.collide(edge25);
    man.collide(edge26);
    man.collide(edge27);
    man.collide(edge28);
    man.collide(edge29);
    man.collide(edge30);
    man.collide(edge31);
    man.collide(edge32);
    man.collide(edge33);
    man.collide(edge34);
    man.collide(edge35);
    man.collide(edge36);
    man.collide(edge37);
    man.collide(edge38);
    man.collide(edge39);
    man.collide(edge40);
    man.collide(edge41);
    man.collide(edge42);
    man.collide(edge43);
    man.collide(edge44);
    man.collide(edge45);
    man.collide(edge46);
    man.collide(edge47);


    child.collide(edge1);
    child.collide(edge2);
    child.collide(edge3);
    child.collide(edge4);
    child.collide(edge5);
    child.collide(edge6);
    child.collide(edge7);
    child.collide(edge8);
    child.collide(edge9);
    child.collide(edge10);
    child.collide(edge11);
    child.collide(edge12);
    child.collide(edge13);
    child.collide(edge14);
    child.collide(edge15);
    child.collide(edge16);
    child.collide(edge17);
    child.collide(edge18);
    child.collide(edge19);
    child.collide(edge20);
    child.collide(edge21);
    child.collide(edge22);
    child.collide(edge23);
    child.collide(edge24);
    child.collide(edge25);
    child.collide(edge26);
    child.collide(edge27);
    child.collide(edge28);
    child.collide(edge29);
    child.collide(edge30);
    child.collide(edge31);
    child.collide(edge32);
    child.collide(edge33);
    child.collide(edge34);
    child.collide(edge35);
    child.collide(edge36);
    child.collide(edge37);
    child.collide(edge38);
    child.collide(edge39);
    child.collide(edge40);
    child.collide(edge41);
    child.collide(edge42);
    child.collide(edge43);
    child.collide(edge44);
    child.collide(edge45);
    child.collide(edge46);
    child.collide(edge47);
    
    //edgegroup.collide(players);

    // man.bounceOff(edgegroup);
    //man.collide(child);
  }

  

  handleElements() 
  {
    forms.hide();
    forms.titleImg.position(40, 50);
    forms.titleImg.class("gameTitleAfterEffect");

    //C39
    this.resetTitle.html("Reset Game");
    this.resetTitle.class("resetText");
    this.resetTitle.position(1300, 20);

    this.resetButton.class("resetButton");
    this.resetButton.position(1330, 70);
  }


  play() 
  {
    this.handleElements();
    this.handleResetButton();

    Player.getPlayersInfo();
    player.getCarsAtEnd();

    if (allPlayers !== undefined)
    {
     
      //index of the array
      var index = 0;
      for (var plr in allPlayers) 
      {
        //add 1 to the index for every loop
        index = index + 1;

        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;

        //console.log(x , y);

       
        players[index - 1].position.x = x;
        players[index - 1].position.y = y;

        if (index === player.index) 
        {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);

          this.handlePlayerCollisionWithEdge(index);
          this.handlePlayerCollisionWithPlayer(index);

          
          // Changing camera position in x & y direction
          //camera.position.y = players[index - 1].position.y;
          //camera.position.x = players[index - 1].position.x;
        }
      }

      /*if (this.playerMoving) {
        player.positionY += 5;
        player.update();
      }*/



      // handling keyboard events
      this.handlePlayerControls();

      // Finshing Line
      //const finshLine = height * 6 - 100;

      if (player.positionY > 700 ) {
        gameState = 2;
        player.rank += 1;
        Player.updateCarsAtEnd(player.rank);
        player.update();
        this.showRank();
      }

      drawSprites();
    }
  }

  handlePlayerCollisionWithPlayer(index)
  {
    if (index === 1) {
      if (players[index - 1].collide(players[1])) {
        
          player.positionX -=5;
          player.update();
      }
    }
    if (index === 2) {
      if (players[index - 1].collide(players[0])) {
        player.positionX -=5;
          player.update();
      }
    }
  }

  handlePlayerCollisionWithEdge(index)
  {

    for(var i=1; i<=47; i++)
    {
      if (index === 1) 
      {
       if( players[index - 1].collide("edge"+i) && keyIsDown(LEFT_ARROW))
       {
        player.positionX +=5;
        player.update();
       }
       if( players[index - 1].collide("edge"+i) && keyIsDown(RIGHT_ARROW))
        {
         player.positionX -=5;
         player.update();
        }        
      }


      if (index === 2) 
      {
        if(players[index - 1].collide("edge"+i) && keyIsDown(LEFT_ARROW))
        {
          player.positionX +=5;
          player.update();
        }
        if(players[index - 1].collide("edge"+i) && keyIsDown(RIGHT_ARROW))
        {
          player.positionX -=5;
          player.update();
        }          
      }
    }

  }



  handleResetButton() 
  {
    this.resetButton.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
        carsAtEnd: 0
      });
      window.location.reload();
    });
  }



  handlePlayerControls() 
  {
    //if(!this.playerMoving)
    
      if (keyIsDown(UP_ARROW)) 
      {
      
        player.positionY -= 5;
        player.update();
        
      }

      if (keyIsDown(DOWN_ARROW) ) 
      {
        
        player.positionY += 5;
        player.update();
        
      }
  
      if (keyIsDown(LEFT_ARROW) ) 
      {
        //this.leftKeyActive = true;
        player.positionX -= 5;
        player.update();

        if (index === 1) {
          if( players[index - 1].collide(edge1))
          {
           player.positionX +=5;
           player.update();
          }
           
         }
        if (index === 2) 
        {
          if(players[index - 1].collide(edge1))
          {
            player.positionX +=5;
            player.update();
          }
               
        }
        //players[index-1].collide(edgegroup);
        
        
      }
  
      if (keyIsDown(RIGHT_ARROW) ) 
      {
        
        player.positionX += 5;
        player.update();

        //players[index-1].collide(edgegroup);
        
        
      }
     
    

  }

 

  showRank()
  {
    swal({
      title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
      text: "You reached the finish line successfully",
      imageUrl:
        "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png",
      imageSize: "100x100",
      confirmButtonText: "Ok"
    });
  }

  gameOver() 
  {
    swal({
      title: `Game Over`,
      text: "Oops you lost the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });

  }

  end()
  {
    console.log("Game Is Over");
  }
  }