var data = new Date()
var anoatual = Number(data.getFullYear())
var res = document.getElementById('res')

function verificar(){
    var anonascimento = Number(document.getElementById('anonas').value)

    if(anonascimento < 0 || anonascimento > anoatual){ //confere se o ano escolhido condis com data
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var idade = anoatual - anonascimento //calcula idade

        var img = document.createElement('img') //cria um elemento html do tipo img <img>
        img.setAttribute('id', 'foto')          // adiciona um atributo ao elemento id='foto'
        img.setAttribute('width', '400px')
        img.setAttribute('height', '400px')
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        if(fsex[0].checked){ //descobre se o primeiro radio foi checkado
            genero = 'Homem'
            if (idade < 10){
                img.setAttribute('src', 'menino.jpg')
            }else if (idade < 26){
                img.setAttribute('src', 'jovem.jpg')
            }else if (idade < 55){
                img.setAttribute('src', 'homem.jpg')
            }else{
                img.setAttribute('src', 'idoso.jpg')
            }

        }else if(fsex[1].checked){ //descobre se o segundo radio foi checkado
            genero = 'Mulher'
            if (idade < 10){
                img.setAttribute('src', 'menina.jpg')
            }else if (idade < 26){
                img.setAttribute('src', 'moça.jpg')
            }else if (idade < 55){
                img.setAttribute('src', 'mulher.jpg')
            }else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos!<br>`
        res.appendChild(img) //adicio um elemento
    }
}