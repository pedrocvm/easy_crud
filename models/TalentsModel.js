import mongoose from 'mongoose';

let talentsSchema = mongoose.Schema(
  {
    email: {
      type: String,
      // required: true,
    },

    name: {
      type: String,
      // required: true,
    },

    phone: {
      type: String,
      // required: true,
    },

    skype: {
      type: String,
      // required: true,
    },

    linkedin: {
      type: String,
      // required: true,
    },

    city: {
      type: String,
      // required: true,
    },

    state: {
      type: String,
      // required: true,
    },

    portfolio: {
      type: String,
      // required: true,
    },

    avaliability: {
      type: String,
      // required: true,
    },

    timeToWork: {
      type: String,
      // required: true,
    },

    hourlySalary: {
      type: Number,
      // required: true,
    },

    ionic: {
      type: Number,
      // required: true,
    },

    reactJs: {
      type: Number,
      // required: true,
    },

    reactNative: {
      type: Number,
      // required: true,
    },

    android: {
      type: Number,
      // required: true,
    },

    flutter: {
      type: Number,
      // required: true,
    },

    swift: {
      type: Number,
      // required: true,
    },

    ios: {
      type: Number,
      // required: true,
    },

    html: {
      type: Number,
      // required: true,
    },

    css: {
      type: Number,
      // required: true,
    },

    bootstrap: {
      type: Number,
      // required: true,
    },

    jquery: {
      type: Number,
      // required: true,
    },

    angularJs: {
      type: Number,
      // required: true,
    },

    angular: {
      type: Number,
      // required: true,
    },

    java: {
      type: Number,
      // required: true,
    },

    python: {
      type: Number,
      // required: true,
    },

    flask: {
      type: Number,
      // required: true,
    },

    aspNetMvc: {
      type: Number,
      // required: true,
    },

    aspNetWebForm: {
      type: Number,
      // required: true,
    },

    c: {
      type: Number,
      // required: true,
    },

    cSharp: {
      type: Number,
      // required: true,
    },

    nodeJs: {
      type: Number,
      // required: true,
    },

    expressJs: {
      type: Number,
      // required: true,
    },

    cake: {
      type: Number,
      // required: true,
    },

    django: {
      type: Number,
      // required: true,
    },

    majento: {
      type: Number,
      // required: true,
    },

    php: {
      type: Number,
      // required: true,
    },

    vueJs: {
      type: Number,
      // required: true,
    },

    wordpress: {
      type: Number,
      // required: true,
    },

    ruby: {
      type: Number,
      // required: true,
    },

    sqlServer: {
      type: Number,
      // required: true,
    },

    mySql: {
      type: Number,
      // required: true,
    },

    salesforce: {
      type: Number,
      // required: true,
    },

    photoshop: {
      type: Number,
      // required: true,
    },

    ilustrator: {
      type: Number,
      // required: true,
    },

    seo: {
      type: Number,
      // required: true,
    },

    laravel: {
      type: Number,
      // required: true,
    },

    anotherLanguage: {
      type: String,

    },

    crudLink: {
      type: String,
      // required: true,
    }
  },
  { versionKey: false }
);

const TalentsModel = mongoose.model('TALENTS', talentsSchema);

export default TalentsModel;
