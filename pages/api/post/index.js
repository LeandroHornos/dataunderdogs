/* 
ToDo: Ejemplo
-----------------
Esta ruta de la api sirve de ejemplo de operaciones CRUD
con la base de datos. Puede usarse para testear la configuración
del template antes de comenzar un proyecto.
*/

import connectDB from "../../../config/connectDB";
import Posts from "../../../models/postModel";

import { getSession } from "next-auth/client";

connectDB();

export default async function handler(req, res) {
  console.log("Handler dice ola");
  switch (req.method) {
    case "POST":
      createPost(req, res);
      break;
  }
}

export async function createPost(req, res) {
  // console.log("createPost saluda!");
  // console.log(req.body);
  // console.log(req.method);
  // Crea una nueva tarea en la base de datos
  try {
    const session = await getSession({ req });

    console.log({ session, post: req.body });
    if (!session) {
      return res
        .status(400)
        .json({ msg: "Error de autenticación. ¿Quién eres, qué haces aquí?" });
    }
    const { post } = req.body;
    const { userId } = session;

    if (!post) {
      return res.status(400).json({
        msg: "No se ha recibido nada en el request",
      });
    }

    const newPost = new Todos({
      name: post.toLowerCase(),
      user: userId,
    });

    await newPost.save();
    res.json({
      msg: "Felicitaciones, la tarea se ha creado con exito",
    });
  } catch (err) {
    console.log("oops, ocurrió un error");
    res.status(500).json({ msg: err.message });
  }
}
