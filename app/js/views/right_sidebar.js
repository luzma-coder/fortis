export const view = () => {
  return `
    <!-- items derechos fijos --> 
    <div class="navbar_right_principal">
        <button class="button-menu mnu-noactive curso animation-dissolve">
            <img class="icon_lg" src="./assets/icon/abacus.svg" alt=""> 
            <h4>Matemática</h4>
        </button>
        <!-- opciones menu de cursos --> 
        <div id="optionsMenu" class="card_cursos">
            <div id="addCourseCard" class="card_option animation-dissolve" onclick="navigateTo('courses')">
                <img class="icon_lg" src="./assets/icon/plus.svg" alt=""> 
                <h4 class="text" >Agrega un nuevo curso</h4>
            </div>
        </div>

        <div class="info_heart">
            <img class="icon_lg" src="./assets/icon/heart.svg" alt="Cantidad de Vidas">
            <p class="text-ng">09</p>
        </div>
    </div>

    <!-- items derechos flexibles --> 
    <div class="navbar_right_flex">
        <section id="cardMenuCuenta" class="card hidden">
            <h4>CUENTA</h4>
            <ul>
                <li><a href="#" data-section="delete_courses">Borrar cursos</a></li>
                <li>Configuración</li>
                <li>Ayuda</li>
                <li>Cerrar sesión</li>
            </ul>
        </section>
        <div class="card align-center">
            <div class="flex-r">
                <img class="icon_lg" src="./assets/icon/heart-2.svg" alt="">
            <h4 class="title">Actualizar a pro</h4>
            </div>
            <button class="button-primary-disabled w210 text-ng animation-dissolve">Actualizar hoy</button>
        </div>
        <div id="cardChallenges" class="card align-center">
            <h4 class="title">Desafios del día</h4>
            <div class="card_flash">
                <img class="icon_lg" src="./assets/icon/flash.svg" alt="">
                <div class="bar">
                    <p class="text-ng">Ganar 20 exp</p>
                    <div class="exp">
                        <div class="progress-20"></div>
                    </div>
                </div>
            </div>
            <div class="card_flash">
                <img class="icon_lg" src="./assets/icon/flash.svg" alt="">
                <div class="bar">
                    <p class="text-ng">Ganar 50 exp</p>
                    <div class="exp">
                        <div class="progress-50"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `;
}