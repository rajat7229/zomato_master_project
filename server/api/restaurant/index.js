import express from "express";

import { RestaurantModel } from "../../database/allModels";
import { ValidateRestaurantCity, ValidateSearchString } from "../../validation/restaurant.validation";

const Router = express.Router();

Router.get("/", async (req, res) => {
  try {
    // http://localhost:4000/restaurant/?city=ncr
    const { city } = req.query;
    await ValidateRestaurantCity(req.query);
    const restaurants = await RestaurantModel.find({ city });
    if (restaurants.length === 0) {
      return res.json({ error: "No restaurant found in this city." });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const restaurant = await RestaurantModel.findById(_id);

    if (!restaurant) {
      return res.status(400).json({ error: "Restaurant not found" });
    }

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/search/:searchString", async (req, res) => {
  /**
   * searchString = Raj
   * results = {
   *  RajHotel
   *  RajRow
   *  RonRaj
   *  raJRow
   * }
   */
  try {
    const { searchString } = req.params;
    await ValidateSearchString(req.params);
    const restaurants = await RestaurantModel.find({
      name: { $regex: searchString, $options: "i" },
    });

    if (restaurants.length === 0) {
      return res
        .status(404)
        .json({ error: `No restaurant matched with ${searchString}` });
    }

    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;