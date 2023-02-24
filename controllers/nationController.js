const Nations = require("../models/nations");
class NationController {
  index(req, res, next) {
    Nations.find({})
      .then((nations) => {
        console.log(nations);
        res.render("nations", {
          title: "The list of Nation",
          nations: nations,
        });
      })
      .catch(next);
  }
  create(req, res, next) {
    const nation = new Nations(req.body);
    nation
      .save()
      .then(() => res.redirect("/nations"))
      .catch((error) => {});
  }
  formEdit(req, res, next) {
    const nationId = req.params.nationId;
    Nations.findById(nationId)
      .then((nation) => {
        res.render("editNation", {
          title: "The detail of Nation",
          nation: nation,
        });
        console.log("get form success");
      })
      .catch(next);
  }
  edit(req, res, next) {
    Nations.updateOne({ _id: req.params.nationId }, req.body)
      .then(() => {
        console.log("edit sucess");
        res.redirect("/nations");
      })
      .catch(next);
  }

  delete(req, res, next) {
    Nations.findByIdAndDelete({ _id: req.params.nationId })
      .then(() => res.redirect("/nations"))
      .catch(next);
  }
}

module.exports = new NationController();
