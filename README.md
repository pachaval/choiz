# APP 

https://choiz-sigma.vercel.app/

# Instrucciones para levantar el proyecto local

**Requerimientos:** tener instalado Node y Git

**Clonar repositorio:** 'git clone https://github.com/pachaval/choiz.git'

**Instalar dependencias y levantar:** correr 'npm run choiz' y una vez que aparezca el tic verde en la terminal de 'Ready' -> navegar a http://localhost:3000/.

Alternativamente, ejecutar los comandos encadenados 'npm install && npm run build && npm run dev' en el script individualmente.

**Observaciones:**

1 -> La pantalla de antecedentes no tiene boton de continuar en el Figma pero se lo agregue para ser congruentes con la experiencia.

2 -> No respete exactamente el progreso de cada instancia del progress bar violeta ya que como esta en el figma, la subida no es proprocional, en cambio hice que progrese en partes iguales para mejorar la experiencia.

3 -> El figma no mostraba el estado de boton deshabilitado asi que si el usuario no elije nada en un paso lo pinto de gris y lo inhabilito.

4 -> Intente crear cada branch y commit atomicamente para separar cada feature, chore y fix

5 -> Use **Zustand** para manejar el estado y la logica del form, **framer-motion** para animar divs e imagenes, **clsx** para algunas clases.