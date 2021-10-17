import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const mahasiswaSchema = new Schema({
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

export default model('mahasiswa', mahasiswaSchema, 'mahasiswa');
