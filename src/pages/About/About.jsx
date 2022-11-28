import styles from "./about.module.css"

const About = () => {
    return(
        <div className={styles.container}>

            <h3>Consigna B: </h3>
            
            <p>Crear una aplicación web utilizando React y Redux, partiendo del Template create-react-app. Dicha aplicacion debe cumplis los siguientes requisitos:</p>

            <ul>
                <li>
                Debe contar con 2 rutas navegables manejadas con react-router.
                    <ul>
                        <li>
                        /home: ruta principal de la aplicación, debe contar con el nombre del alumnos y el de la aplicación.
                        </li>
                        <li>
                        /users: debe mostrar la lista de usuarios y debe mostrar un formulario que permita agregar o editar un usuario. La lista debe permitir eliminar un usuario.
                        </li>
                    </ul>
                </li>

                <li>
                Ambas rutas deben contar con un layout reutilizable, el cual debe contener:
                    <ul>
                        <li>Header</li>
                        <li>NavBar (barra de navegación)</li>
                        <li>Body (contenido)</li>
                        <li>Footer</li>
                    </ul>
                </li>

                <li>Debe contar con la librería react-hook-form para el manejo de formulario. Todos los formularios deben contar con sus respectivas validaciones, siendo fieles al Schema Usuarios.</li>

                <li>El ABM de usuarios mostrado en la ruta /users debe realizar un request HTTP de tipo GET, POST, PATCH y DELETE al server correspondiente, respetando la arquitectura API REST.</li>

                <li>Deben contar con componentes compartidos (botones, inputs, etc). Estos componentes deben contar con sus archivos .css utilizando CSS modules.</li>

                <li>Debe contar con Redux y Redux Thunk para el manejo del estado global de la aplicación, esto implica la creación de reducers, acciones, thunks por cada módulo de Redux que la aplicación necesite.</li>
            </ul>

            <p><strong>Todos los puntos son requeridos para aprobar el recuperatorio.</strong></p>

            <p>(*) Se recomienda usar los servidores API REST realizados en clase. Tener en cuenta que el servidor debe responder a las necesidades de la aplicación web. El servidor NO SERÁ EVALUADO.</p>
            
        </div>
    )
}

export default About;