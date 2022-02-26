let x=document.querySelectorAll('.images');
let player1,player2;
for(let images of x){

    images.addEventListener('click',function()
    {
       player1= document.querySelector('.Heading').innerHTML=this.getAttribute('alt');
        this.style.transform='scale(1.3)'
        computer()

  if(player1==player2)
  {
      document.querySelector('.result').innerHTML='Draw!!!!';
      document.querySelector('.result').style.backgroundColor='yellowgreen';
  }
  else if(player1=='Rock'&&(player2=='Scissor' || player2=='Lizard'))
  {
    document.querySelector('.result').innerHTML='You Won!!!!';
    document.querySelector('.result').style.backgroundColor='green';
  }
  else if(player1=='Paper'&&(player2=='Rock' || player2=='Spock'))
  {
    document.querySelector('.result').innerHTML='You Won!!!!!';
    document.querySelector('.result').style.backgroundColor='green';
  }
  else if(player1=='Scissor'&&(player2=='Paper' || player2=='Lizard'))
  {
    document.querySelector('.result').innerHTML='You Won!!!!!';
    document.querySelector('.result').style.backgroundColor='green';
  }
  else if(player1=='Lizard'&&(player2=='Spock' || player2=='Paper'))
  {
    document.querySelector('.result').innerHTML='You Won!!!!';
    document.querySelector('.result').style.backgroundColor='green';
  }
  else if(player1=='Spock'&&(player2=='Rock' || player2=='Scissor'))
  {
    document.querySelector('.result').innerHTML='You Won!!!!';
    document.querySelector('.result').style.backgroundColor='green';
  }

  else
  {
    document.querySelector('.result').innerHTML='You Lost!!!!';
    document.querySelector('.result').style.backgroundColor='red';
  }
document.querySelector('.cover').style.display='block'

    })
}
let arr=['Lizard','Paper','Rock','Scissor','Spock'];
let secondPlayer=document.querySelectorAll('.images1')
let random=Math.trunc(Math.random()*5)
player2=arr[random]
function computer()
{
    document.querySelector('.computerHeading').innerHTML=arr[random];
    for (x of secondPlayer)
    {
        if(arr[random]==x.getAttribute('alt'))
        {
            x.style.transform='scale(1.3 )'
        }
    }
}
