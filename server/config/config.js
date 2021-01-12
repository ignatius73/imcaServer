process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

let mongoURL;

if (process.env.NODE_ENV === "dev") {
    mongoURL = 'mongodb://localhost:27017/usuario';
} else {

    mongoURL = process.env.mongo_uri;
}

process.env.URLDB = mongoURL;