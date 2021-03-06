import axios from "axios";

export default {

  getRecipe: function() {
    return axios.get("/api/recipe");
  },

  saveRecipe: function(recipeData) {
    return axios.post("/api/recipe", recipeData);
  }
};
