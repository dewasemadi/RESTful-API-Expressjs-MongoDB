import Mahasiswa from '../models/mahasiswa.model.js';

export const getAllMahasiswa = async (_, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.json(mahasiswa);
  } catch (err) {
    res.status(500).json({ message: error.message });
  }
};

export const getMahasiswaById = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    res.json(mahasiswa);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMahasiswa = async (req, res) => {
  const mahasiswa = new Mahasiswa(req.body);
  try {
    const createMahasiswa = await mahasiswa.save();
    res.status(201).json(createMahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMahasiswa = async (req, res) => {
  const id = await Mahasiswa.findById(req.params.id);
  if (!id) return res.status(404).json({ message: 'Data not found!' });
  try {
    const updateMahasiswa = await Mahasiswa.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json(updateMahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMahasiswa = async (req, res) => {
  const id = await Mahasiswa.findById(req.params.id);
  if (!id) return res.status(404).json({ message: 'Data not found!' });
  try {
    const deletedMahasiswa = await Mahasiswa.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedMahasiswa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
