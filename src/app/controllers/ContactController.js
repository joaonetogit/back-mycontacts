const ContactReposity = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactReposity.findAll();

    response.json(contacts);
  }

  show() {
    // Listar um registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Editar um registro
  }

  destroy() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
