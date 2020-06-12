import express from "express";
const router = express.Router();

import data from "../src/testData.json";
import accessSheet from "./util/gs";
import BuyRequest from "./models/buyRequest";
import SellRequest from "./models/sellRequest";

router.get("/contests", (req, res) => {
  res.send({ contests: data.contests });
});

router.get("/make/database", (req, res) => {
  accessSheet()
    .then((resp) => {
      res.status(200).json({
        success: true,
        message: "Google sheet data imported successfully",
        response: resp,
      });
    })
    .catch(console.error());
});

router.get("/phones/buy", paginatedResults(BuyRequest), async (req, res) => {
  let totalDocs = await BuyRequest.countDocuments().exec();
  res
    .status(200)
    .json({ success: true, total: totalDocs, results: res.paginatedResults });
});

router.get("/phones/sell", paginatedResults(SellRequest), async (req, res) => {
  let totalDocs = await SellRequest.countDocuments().exec();
  res
    .status(200)
    .json({ success: true, total: totalDocs, results: res.paginatedResults });
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.phones = await model
        .find({}, "name size condition price")
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

export default router;
