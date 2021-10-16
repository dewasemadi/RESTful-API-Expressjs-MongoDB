import mongoose from 'mongoose';

const mahasiswaScheme = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  nim: {
    type: String,
    required: true,
  },
  departemen: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

export default mongoose.model('mahasiswa', mahasiswaScheme, 'mahasiswa');
