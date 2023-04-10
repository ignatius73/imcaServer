process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || "dev";



process.env.CADTOKEN = 60 * 60 * 24 * 30;

process.env.SEED = process.env.SEED || "River-Plate-Tu-Grato-Nombre";

let mongoURL;

if (process.env.NODE_ENV === "dev") {
    mongoURL = process.env.mongo_uri;
} else {

    mongoURL = process.env.mongo_uri;
}

process.env.URLDB = mongoURL;