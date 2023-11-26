


document.addEventListener("DOMContentLoaded", function() {
    
    var container = document.querySelector('.box-3');

    
    container.scrollLeft = container.scrollWidth;

    setTimeout(() => {
        var scrollAnimation = setInterval(function() {
            container.scrollLeft -= 5; 
            if (container.scrollLeft <= 0) {
                clearInterval(scrollAnimation);
                setTimeout(() => {
                    var scrollAnimation = setInterval(function() {
                        container.scrollLeft += 3; 
                        if (container.scrollLeft >= 70) {
                            clearInterval(scrollAnimation);
                        }
                    }, 8); 
                }, 300);
            }
        }, 8); 
    }, 1000);
    
    
});

console.log("hello")