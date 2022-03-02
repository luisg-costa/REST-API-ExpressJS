class HomeController {
  async index(req, res) {
    res.json('Welcome to the Ice cream shop API');
  }
}
export default new HomeController();
