// Identify and Select needed elements
const goalForm = document.querySelector('#goal-form');
const goalInput = document.querySelector('#goal-input');
const goalList = document.querySelector('#goal-list');
const clearAll = document.querySelector('#clear-goals-btn');

// Listeners - two arguments (event type) 2nd - callback function
goalForm.addEventListener('submit', onAddGoalSubmit);

// Function
function onAddGoalSubmit(event) {
    event.preventDefault();
    
    const newGoal = goalInput.value;
    
    // add validation
    if(!goalInput.value) {
        alert('Please enter the goal!');
        return;
    }
    
    // create the list item as parent element
    const li = document.createElement('li');
    li.className = 'goal-item';

    // create the span item that contains the new goal
    // later we will append to li
    const span = document.createElement('span');
    span.className = 'goal-text';
    const textNode = document.createTextNode(newGoal);
    span.appendChild(textNode);

    //create the button
    const button = document.createElement('button');
    button.className = 'btn btn-delete';

    // create the ocona nd append to button
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-eraser';

    button.appendChild(icon);
    
    li.append(span);
    li.appendChild(button);

    // append newly created list to the ul
    goalList.appendChild(li);

    goalInput.value = '';

    function createdListItem() {
        const li = document.createElement('li');
        li.className = 'goal-item';
        return li;
    }

}