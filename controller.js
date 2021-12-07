const Test = require("./data_model");

exports.getdata = (req, res) => {
  Test.find()
    .then((data) => {
      res.status(200).json({
        status: "successful",
        results: data.length,
        data,
      });
    })
    .catch((errors) => {
      res.status(500).json({
        error: errors,
      });
    });
};

exports.postdata = (req, res) => {
  Test.create(req.body)
    .then(() => {
      res.send(req.body);
    })
    .catch((errors) => {
      res.status(500).json({
        error: errors,
      });
    });
};

exports.deletedata = (req, res) => {
  console.log(req.params.id);
  Test.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(204).json();
    })
    .catch((errors) => {
      res.status(500).json({
        error: errors,
      });
    });
};
