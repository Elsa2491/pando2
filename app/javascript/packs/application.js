// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import "controllers"
import "bootstrap"
import Chart from 'chart.js/auto';

// CO2 measures
import { co2Measures } from "../components/co2";

// HUM measures
import { humMeasures } from "../components/hum";

// TMP measures
import { tmpMeasures } from "../components/tmp";

// VOCT measures
import { voctMeasures } from "../components/voct";
