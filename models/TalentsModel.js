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
      type: Number
    },

    react: {
      type: Number
    },

    reactNative: {
      type: Number
    },

    android: {
      type: Number
    },

    flutter: {
      type: Number
    },

    swift: {
      type: Number
    },

    ios: {
      type: Number
    },

    html: {
      type: Number
    },

    css: {
      type: Number
    },

    bootstrap: {
      type: Number
    },

    jquery: {
      type: Number
    },

    angularJs: {
      type: Number
    },

    angular: {
      type: Number
    },

    java: {
      type: Number
    },

    python: {
      type: Number
    },

    flask: {
      type: Number
    },

    aspNetMvc: {
      type: Number
    },

    aspNetWebForm: {
      type: Number
    },

    c: {
      type: Number
    },

    cSharp: {
      type: Number
    },

    nodeJs: {
      type: Number
    },

    expressJs: {
      type: Number
    },

    cake: {
      type: Number
    },

    django: {
      type: Number
    },

    majento: {
      type: Number
    },

    php: {
      type: Number
    },

    vueJs: {
      type: Number
    },

    wordpress: {
      type: Number
    },

    ruby: {
      type: Number
    },

    sqlServer: {
      type: Number
    },

    mySql: {
      type: Number
    },

    salesforce: {
      type: Number
    },

    photoshop: {
      type: Number
    },

    ilustrator: {
      type: Number
    },

    seo: {
      type: Number
    },

    laravel: {
      type: Number
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
