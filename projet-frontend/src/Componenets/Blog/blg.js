export default function blogScript() {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active = 3;
    function loadShow(){
       
        items[active].style.transform = `none`;
        items[active].style.zIndex = 3;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // Réinitialiser la couleur pour tous les éléments
        items.forEach(item => {
            item.style.backgroundColor = ''; // Réinitialiser la couleur de fond
           
        });

        // Changer la couleur pour l'élément actif
        items[active].style.backgroundColor = ' #031273'; // Par exemple, définissez la couleur d'arrière-plan à bleu
        let stt = 0;
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${170*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-0.25deg)`;
            items[i].style.zIndex = stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-170*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(0.25deg)`;
            items[i].style.zIndex = stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
}
