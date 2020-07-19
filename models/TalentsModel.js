import mongoose from 'mongoose';

let talentsSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },

    name: {
      type: String,
    },

    phone: {
      type: String,
    },

    skype: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    city: {
      type: String,
    },

    state: {
      type: String,
    },

    portfolio: {
      type: String,
    },

    avaliability: {
      type: String,
    },

    timeToWork: {
      type: String,
    },

    hourlySalary: {
      type: String,
    },

    ionic: {
      type: Number,
      min: 0,
      max: 5
    },

    react: {
      type: Number,
      min: 0,
      max: 5
    },

    reactNative: {
      type: Number,
      min: 0,
      max: 5
    },

    android: {
      type: Number,
      min: 0,
      max: 5
    },

    flutter: {
      type: Number,
      min: 0,
      max: 5
    },

    swift: {
      type: Number,
      min: 0,
      max: 5
    },

    ios: {
      type: Number,
      min: 0,
      max: 5
    },

    html: {
      type: Number,
      min: 0,
      max: 5
    },

    css: {
      type: Number,
      min: 0,
      max: 5
    },

    bootstrap: {
      type: Number,
      min: 0,
      max: 5
    },

    jquery: {
      type: Number,
      min: 0,
      max: 5
    },

    angularJs: {
      type: Number,
      min: 0,
      max: 5
    },

    angular: {
      type: Number,
      min: 0,
      max: 5
    },

    java: {
      type: Number,
      min: 0,
      max: 5
    },

    python: {
      type: Number,
      min: 0,
      max: 5
    },

    flask: {
      type: Number,
      min: 0,
      max: 5
    },

    aspNetMvc: {
      type: Number,
      min: 0,
      max: 5
    },

    aspNetWebForm: {
      type: Number,
      min: 0,
      max: 5
    },

    c: {
      type: Number,
      min: 0,
      max: 5
    },

    cSharp: {
      type: Number,
      min: 0,
      max: 5
    },

    nodeJs: {
      type: Number,
      min: 0,
      max: 5
    },

    expressJs: {
      type: Number,
      min: 0,
      max: 5
    },

    cake: {
      type: Number,
      min: 0,
      max: 5
    },

    django: {
      type: Number,
      min: 0,
      max: 5
    },

    majento: {
      type: Number,
      min: 0,
      max: 5
    },

    php: {
      type: Number,
      min: 0,
      max: 5
    },

    vueJs: {
      type: Number,
      min: 0,
      max: 5
    },

    wordpress: {
      type: Number,
      min: 0,
      max: 5
    },

    ruby: {
      type: Number,
      min: 0,
      max: 5
    },

    sqlServer: {
      type: Number,
      min: 0,
      max: 5
    },

    mySql: {
      type: Number,
      min: 0,
      max: 5
    },

    salesforce: {
      type: Number,
      min: 0,
      max: 5
    },

    photoshop: {
      type: Number,
      min: 0,
      max: 5
    },

    ilustrator: {
      type: Number,
      min: 0,
      max: 5
    },

    seo: {
      type: Number,
      min: 0,
      max: 5
    },

    laravel: {
      type: Number,
      min: 0,
      max: 5
    },

    anotherLanguage: {
      type: String,

    },

    crudLink: {
      type: String,
    }
  },
  { versionKey: false }
);

const TalentsModel = mongoose.model('talents', talentsSchema, 'talents');

export default TalentsModel;
