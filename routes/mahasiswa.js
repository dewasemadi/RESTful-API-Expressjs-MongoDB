import express from 'express';
const router = express.Router();
import {
  getAllMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
  uploadProfileMahasiswa,
} from '../controllers/mahasiswa.controller.js';

router.get('/', getAllMahasiswa);
router.get('/:id', getMahasiswaById);
router.post('/', createMahasiswa);
router.put('/:id', updateMahasiswa);
router.delete('/:id', deleteMahasiswa);
router.post('/picture', uploadProfileMahasiswa);

export default router;
