const userData = {
  name: 'María',
  userName: 'maria1344',
  email: 'maria123@gmail.com',
  currentPass: 'Segur1dad'
};
export const view = () => {
  return `
    <div class="title title-content"><h4>Perfil</h4></div>
    <main id="tarea">
      <form id="profileForm">
        <label>Avatar</label>
        <div class="avatar-wrapper">
          <img id="avatarImg" src="https://i.pravatar.cc/150?img=5" alt="Avatar" class="avatar" />
          <button class="edit-btn" onclick="changeAvatar()" aria-label="Editar avatar">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_79_436)">
            <path d="M8.2025 16.3334H18V18.0001H3V14.4642L11.25 6.21424L14.785 9.7509L8.20167 16.3334H8.2025ZM12.4275 5.03674L14.1958 3.2684C14.3521 3.11218 14.564 3.02441 14.785 3.02441C15.006 3.02441 15.2179 3.11218 15.3742 3.2684L17.7317 5.6259C17.8879 5.78218 17.9757 5.9941 17.9757 6.21507C17.9757 6.43604 17.8879 6.64796 17.7317 6.80424L15.9633 8.57174L12.4283 5.03674H12.4275Z" fill="#E9EBEC"/>
            </g><defs><clipPath id="clip0_79_436"><rect width="20" height="20" fill="white" transform="translate(0.5 0.5)"/>
            </clipPath>
            </defs>
            </svg>
          </button>
        </div>
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" value=${userData.name} required />

        <label for="user">Usuario</label>
        <input type="text" id="user" name="user" value=${userData.userName} required></textarea>
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" value=${userData.email} required />

        <label for="currentPassword">Contraseña actual</label>
        <div class="password-wrapper">
          <input type="password" id="currentPassword" name="currentPassword" value=${userData.currentPass} required />
          <button type="button" class="toggle-password hide" onclick="togglePassword()" aria-label="Mostrar contraseña"></button>
        </div>

        <label for="newPassword">Nueva contraseña</label>
        <div class="password-wrapper">
          <input type="text" id="newPassword" name="newPassword" required />
          <button type="button" class="toggle-password show" onclick="togglePassword()" aria-label="Mostrar contraseña"></button>
        </div>  
        <button type="submit" class="button-primary w300 text-ng my4 animation-dissolve">Guardar cambios</button>
      </form>
      <button type="button" class="fs-md text-button my4" data-nombre='cuenta'>Eliminar mi cuenta</button>
    </main>
  `;
}