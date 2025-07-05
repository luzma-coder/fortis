const correctAnswer = 'D';
let selectedOption = null;

const validateAnswer = () => {
    if (!selectedOption) {
        alert('Seleccione una opción antes de continuar.');
        return;
    }
    const btnCheckClass = document.getElementById('button-check');
    const btnContinue = document.getElementById('button-continue');
    const btnSeeSolution = document.getElementById('button-see-solution');
    const btnBack = document.getElementById('button-back');
    const feedback = document.getElementById('feedback');

    btnCheckClass.classList.add('hidden');
    btnContinue.classList.remove('hidden');
    btnSeeSolution.classList.remove('hidden');
    btnBack.classList.add('hidden');
    feedback.classList.remove('hidden');

    if (selectedOption === correctAnswer) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `
            <div class="circle-btn right"></div>
            ¡Excelente!
        `;
    } else {
        btnContinue.classList.remove('button-success');
        btnContinue.classList.add('button-danger');
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `
            <div class="circle-btn wrong"></div>
            Solución incorrecta
        `;
    }
};

const handleOptionClick = (option) => {
    const allOptions = document.querySelectorAll('.option');
    const btnCheckClass = document.getElementById('button-check');
    const btnContinue = document.getElementById('button-continue');
    const btnSeeSolution = document.getElementById('button-see-solution');
    const btnBack = document.getElementById('button-back');
    const feedback = document.getElementById('feedback');

    allOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    selectedOption = option.getAttribute('data-option');

    // cambiar clase al boton btn-check
    btnCheckClass.classList.remove('button-primary-disabled');
    btnCheckClass.classList.add('button-primary');

    // if (btnCheckClass.classList.contains('hidden')) {
    //     btnCheckClass.classList.remove('hidden');
    //     btnContinue.classList.add('hidden');
    //     btnSeeSolution.classList.add('hidden');
    //     btnBack.classList.remove('hidden');
    //     feedback.classList.add('hidden');
    // }
};
// controla la visualización de los botones y acciones al elegir una alternativa de las preguntas.
export const handleUserResponse = () => {
    const options = document.querySelectorAll('.option');
    const btnCheck = document.getElementById('button-check');

    options.forEach(option => {
        option.addEventListener('click', () => handleOptionClick(option));
    });
    btnCheck.addEventListener('click', validateAnswer);
};