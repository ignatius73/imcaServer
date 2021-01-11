process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

let mongoURL;

if (process.env.NODE_ENV === "dev") {
    mongoURL = 'mongodb://localhost:27017/usuario';
} else {
    let password = encodeURIComponent('Bb#D$F%.1973?');
    mongoURL = `mongodb+srv://ignatius73:${password}@cluster0.j7iqv.mongodb.net/imca-app?retryWrites=true&w=majority`;
}

process.env.URLDB = mongoURL;