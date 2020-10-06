require("dotenv").config();
const CommonRegistry = require("@brianjhanson/gulp-tasks");
const { registry } = require("gulp");

registry(
  new CommonRegistry({
    src: "./src",
    dest: "./web/dist"
  })
);
