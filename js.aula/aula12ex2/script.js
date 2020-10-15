function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 5) {
                // bebê
                img.setAttribute('src','bebe.png')
                document.body.style.background = '#943800'
            }   else if (idade < 10){
                // Criança
                img.setAttribute('src','crianca.m.png')
                document.body.style.background = '#4B806F'
            }   else if (idade < 21) {
                // Jovem
                img.setAttribute('src','jovem.m.png')
                document.body.style.background = '#A08A71'
            }   else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adulto.m.png')
                document.body.style.background = '#CDD7E1'
            }   else {
                // Idoso
                img.setAttribute('src','idoso.m.png')
                document.body.style.background = '#B7211E'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 5) {
                // bebê
                img.setAttribute('src','bebe.png')
                document.body.style.background = '#D1B04F'
            }   else if (idade < 10){
                // Criança
                img.setAttribute('src','crianca.f.png')
                document.body.style.background = '#6E7EB5'
            }   else if (idade < 21) {
                // Jovem
                img.setAttribute('src','jovem.f.png')
                document.body.style.background = '#F31687'
            }   else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adulto.f.png')
                document.body.style.background = '#FF7C0B'
            }   else {
                // Idoso
                img.setAttribute('src','idoso.f.png')
                document.body.style.background = '#F7D9BD'
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    

}