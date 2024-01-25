const bungkus = document.querySelector('.bungkus');
const angka = document.querySelectorAll('.button');

bungkus.addEventListener('click',function(e){
    if(e.target.classList.contains('button')){
        console.log(e.target.innerText);
        if(e.target.innerText != '=' && e.target.innerText != 'AC' && e.target.innerText != 'x²'){
            let click = e.target.innerText;
            display(click);
        }else if(e.target.innerText === 'AC'){
            hapus();
        }else if(e.target.innerText === 'x²'){
            kuadrat()
        }else if(e.target.innerText === '='){
           calculate()
        }
    }
})

function display(value){
    const tampil = document.querySelector('.tampil');
    tampil.innerText += value;
}

function hapus(){
    const tampil = document.querySelector('.tampil');
    tampil.innerText = '';
}

function calculate(){
    const tampil = document.querySelector('.tampil');
    const hasil = tampil.innerText;

    try {
        const result = eval(hasil);
        tampil.innerText = result;
    } catch (error) {
        tampil.innerText = 'Error';
    }
}

function kuadrat(){
    const tampil = document.querySelector('.tampil');
    const hasil = tampil.innerHTML;
    parseFloat(hasil);
    let result = hasil*hasil;
    tampil.innerText = result;
}