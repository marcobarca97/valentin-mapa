let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('sadGifContainer3').style.display = 'none';
    document.getElementById('sadGifContainer4').style.display = 'none';
    document.getElementById('sadGifContainer5').style.display = 'none';
    document.getElementById('sadGifContainer6').style.display = 'none';
    document.getElementById('sadGifContainer7').style.display = 'none';
    document.getElementById('sadGifContainer8').style.display = 'none';
    document.getElementById('sadGifContainer9').style.display = 'none';
    document.getElementById('sadGifContainer10').style.display = 'none';
    document.getElementById('sadGifContainer11').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Oh Siii! jajaja';
    document.getElementById('messageContainer').innerHTML = 'Te espero en mi casa el 14/02/2025 a las 7:30pm';
    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segura?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas segura?!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;
        
        case 2:
           
            document.getElementById('noBtn').innerHTML = '¿Es en serio?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer5').style.display = 'none';
            document.getElementById('sadGifContainer3').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        case 3:


            document.getElementById('noBtn').innerHTML = 'Te pasas Nico...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer3').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
         
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Tu tranquila, yo nervioso';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';

            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Jessica Ortega, es en serio!!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer6').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';
            
            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy triste';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer6').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '80px 100px';
  
            noButtonState++;
            break;

        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Bueno, ya dejaré de preguntar...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer4').style.display = 'block';

         
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '90px 110px';
    
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SÍ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer4').style.display = 'none';
            document.getElementById('sadGifContainer9').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '110px 130px';
            
            noButtonState++;
            break;
        
        case 9:
           
            document.getElementById('noBtn').innerHTML = 'Estaré muy muy muy muy muy triste.';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer9').style.display = 'none';
            document.getElementById('sadGifContainer7').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '150px';
            document.getElementById('siBtn').style.padding = '130px 150px';
    
            noButtonState++;
            break;
        
        case 10:
           
            document.getElementById('noBtn').innerHTML = 'Estás rompiendo mi corazón :(';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer7').style.display = 'none';
            document.getElementById('sadGifContainer11').style.display = 'block';

            document.getElementById('siBtn').style.fontSize = '150px';
            document.getElementById('siBtn').style.padding = '130px 150px';
         
            noButtonState++;
            break;
        
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer11').style.display = 'none';
            document.getElementById('sadGifContainer10').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '140px 160px';
            
            noButtonState++;
            break;
        
        case 12:
           
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer10').style.display = 'none';
            document.getElementById('sadGifContainer8').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '170px';
            document.getElementById('siBtn').style.padding = '150px 170px';
          
            noButtonState++;
            break;
        
     
        case 13:
            document.getElementById('noBtn').innerHTML = 'por favooooooor';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
              
            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '180px';
            document.getElementById('siBtn').style.padding = '160px 180px';
                // Vuelve al estado 0
            noButtonState = 0;
            break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});


