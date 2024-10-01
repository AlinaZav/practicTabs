


const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role = "tabpanel"]'));

function handleClick(e){
    //скрыли все панели
    tabPanels.forEach(function(panel){
        panel.hidden = true
    });
    
    //убрали выбор каждой кнопки aria-selected
    tabButtons.forEach(tab => {
        tab.ariaSelected = false; 
    });

   //включаем кнопку на которую кликнули
   e.currentTarget.setAttribute('aria-selected', true);

   //отображаем нужную панель
    const { id } = e.currentTarget;
    const tabPanel = tabPanels.find(panel => {
        if(panel.getAttribute('aria-labelledby') === id){
            return true;
        }
    })

    tabPanel.hidden = false;
}


tabButtons.forEach(button => button.addEventListener('click', handleClick));