function attachEventsListeners() {

    let allButtons = Array.from(document.querySelectorAll("div input[type='button']"));

    for (const button of allButtons) {
        button.addEventListener("click", onClick);
        
    }

    function onClick(e) {
        let parent = e.target.parentElement;

        let typeOfButton = e.target.id;

        let num = Number(parent.children[1].value);

        switch(typeOfButton) {
            case 'daysBtn':
                populate(num * 24 * 60);
                break;
            case 'hoursBtn':
                populate(num * 60);
                break;
            case 'minutesBtn':
                populate(num);
                break;
            case 'secondsBtn':
                populate(num / 60);
                break;
        }

        function populate(n) {
            for (const b of allButtons) {
                switch(b.id) {
                    case 'daysBtn':
                        b.parentElement.children[1].value = n / 60 / 24;
                        break;
                    case 'hoursBtn':
                        b.parentElement.children[1].value = n / 60;
                        break;
                    case 'minutesBtn':
                        b.parentElement.children[1].value = n;
                        break;
                    case 'secondsBtn':
                        b.parentElement.children[1].value = n * 60;
                        break;
                }
                
            }
        }

    }

}