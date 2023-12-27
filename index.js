const express = require("express");
const cors = require("cors");
const app = express();
const carData = {
  honda: {
    i8: {
      model: "HONDA DUNK ",
      image:
        "https://images.khmer24.co/23-12-22/honda-dunk-50cc-2014-2018-45842170322940292070342-b.jpg",
      price: "900$",
    },
    s5: {
      model: "Honda beat",
      image:
        "https://www.khmer24.com/v1.0.2/template/img/loading-placeholder.gif",
      price: "$1500",
    },
    x1: {
      model: "X-ADV 750 ",
      image:
        "https://images.khmer24.co/23-12-26/x-adv-750-2021-2022-45842170356044117693961-b.jpg",
      price: "$16,495",
    },
    i8: {
      model: "HONDA XR230 ",
      image:"https://images.khmer24.co/23-12-27/honda-xr230-124573170366457460119412-b.jpg",
      price: "2000$",
    },
    s5: {
      model: "Honda dream 2023",
      image:
        "https://images.khmer24.co/23-09-29/honda-dream2024-796016169596382721251826-b.jpg",
      price: "$2700",
    },
    x1: {
      model: "Super Cup ",
      image:
        "https://images.khmer24.co/23-12-27/--868534170366431094304484-b.jpg",
      price: "$995",
    },
  },
  yamaha: {
    i8: {
      model: "Yamaha R6 ",
      image:
        "https://www.khmer24.com/v1.0.2/template/img/loading-placeholder.gif",
      price: "1600$",
    },
    s5: {
      model: "YAMAHA N.MAX",
      image:
        "https://images.khmer24.co/23-12-27/yamaha-n-max-125cc-from-japan-year-2011-1370-have-id-card-922735170366304462493764-b.jpg",
      price: "$1500",
    },
    x1: {
      model: "XT 250cc ",
      image:
        "https://images.khmer24.co/23-10-01/xt-250cc-224887169614980957178948-b.jpg",
      price: "$1495",
    },
    i8: {
      model: "MXKING 2019",
      image:"https://images.khmer24.co/23-12-20/mxking-2019-224887170305997358186586-b.jpg",
      price: "1500$",
    },
    s5: {
      model: "Yamaha MT150",
      image:
        "https://images.khmer24.co/23-12-26/yamaha-mt150-124573170357410298821011-b.jpg",
      price: "$2900",
    },
    x1: {
      model: "Yamaha R15 ",
      image:
        "https://www.khmer24.com/v1.0.2/template/img/loading-placeholder.gif",
      price: "$1500",
    },
  },
};

app.use(cors());

app.get("/api/model/all", (req, res) => {
  res.json({ carData });
});

app.get("/api/moto/:moto", (req, res) => {
  const { moto } = req.params;
  if (carData[moto]) {
    const models = Object.keys(carData[moto]);
    const cars = models.map((model) => carData[moto][model]);
    res.json({ cars });
  } else {
    res.status(404).json({ error: "not found" });
  }
});

app.get("/api/cars/:car/:model", (req, res) => {
  const { car, model } = req.params;
  if (carData[car] && carData[car][model]) {
    const modelDetails = carData[car][model];
    res.json({ modelDetails });
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

app.listen(5000, () => {
  console.log("Server is running port 5000");
});
