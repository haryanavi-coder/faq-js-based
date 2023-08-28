// selecting all accordians
const accords = document.querySelectorAll('.accordian');

accords.forEach(ff => {
    // fontawesome icon has class = icon also 
    // targeting it
    const ic = ff.querySelector('.icon');
    const ans = ff.querySelector('.answer');

    // on click event listner on 
    ff.addEventListener('click', ()=>{
        // ic.classList.toggle('active-icon');
        // ans.classList.toggle('active-answer');
        // removing above as animaiton were difficult to introduce

        if(ic.classList.contains('active-icon')){
            ic.classList.remove('active-icon');
            ans.style.maxHeight = null;
        }
        else{
            ic.classList.add('active-icon');
            ans.style.maxHeight = ans.scrollHeight + 'px';
        }
    })

})