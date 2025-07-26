import { Request, Response } from 'express';
import { db1 } from '../../utils/db1';
import { apiOk, apiError } from '../../tools/common';

/**
 * @swagger
 * /api/higo:
 *   get:
 *     summary: Mendapatkan data pengguna Higo
 *     tags: [Higo]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: id
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *     responses:
 *       200:
 *         description: Data berhasil diambil
 *       500:
 *         description: Internal Server Error
 *
 *   post:
 *     summary: Menambahkan data pengguna Higo
 *     tags: [Higo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [Name, Age, gender]
 *             properties:
 *               Name:
 *                 type: string
 *               Age:
 *                 type: integer
 *               gender:
 *                 type: string
 *               Email:
 *                 type: string
 *               Number:
 *                 type: string
 *               No_Telp:
 *                 type: string
 *               Location_Type:
 *                 type: string
 *               Digital_Interest:
 *                 type: string
 *               Name_of_Location:
 *                 type: string
 *               Date:
 *                 type: string
 *               Login_Hour:
 *                 type: string
 *               Brand_Device:
 *                 type: string
 *     responses:
 *       201:
 *         description: Data berhasil ditambahkan
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /api/higo/{id}:
 *   put:
 *     summary: Memperbarui data pengguna Higo berdasarkan ID
 *     tags: [Higo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *               Age:
 *                 type: integer
 *               gender:
 *                 type: string
 *               Email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data berhasil diperbarui
 *       404:
 *         description: Data tidak ditemukan
 *       500:
 *         description: Internal Server Error
 *
 *   delete:
 *     summary: Menghapus data pengguna Higo berdasarkan ID
 *     tags: [Higo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data berhasil dihapus
 *       404:
 *         description: Data tidak ditemukan
 *       500:
 *         description: Internal Server Error
 */

// GET (sudah ada)
export const get = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 30;
    const gender = req.query.gender as string | undefined;
    const sortBy = (req.query.sortBy as string) || 'Date';
    const order = (req.query.order as string) || 'desc';
    const skip = (page - 1) * limit;

    const rawData = await db1.higo.findMany({
      skip,
      take: limit,
      where: gender ? { gender } : undefined,
      orderBy: {
        [sortBy]: order,
      },
      select: {
        id: true,
        Name: true,
        Age: true,
        gender: true,
        Email: true,
        Number: true,
        No_Telp: true,
        Location_Type: true,
        Digital_Interest: true,
        Name_of_Location: true,
        Date: true,
        Login_Hour: true,
        Brand_Device: true,
      },
    });

    const processedData = rawData.map((item) => ({
      ...item,
      BirthYear: item.Age,
      Age: new Date().getFullYear() - item.Age,
    }));

    const total = await db1.higo.count({
      where: gender ? { gender } : undefined,
    });

    return apiOk(res, {
      page,
      limit,
      total,
      data: processedData,
    });
  } catch (error) {
    console.error('Error GET /api/higo:', error);
    return apiError(res, 'Internal Server Error', 500);
  }
};

// POST
export const post = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const payload = {
      ...data,
      Number: data.Number ? parseInt(data.Number) : undefined,
      Age: data.Age ? parseInt(data.Age) : undefined,
    };

    const created = await db1.higo.create({ data: payload });
    return res.status(201).json(created);
  } catch (error) {
    console.error('Error POST /api/higo:', error);
    return apiError(res, 'Failed to create data', 500);
  }
};

//PUT
export const put = async (req: Request, res: Response) => {
  const id = req.params.id.toString(); // ✅ parsing aman
  const data = req.body;

  try {
    const updated = await db1.higo.update({
      where: { id },
      data,
    });
    return res.json(updated);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return apiError(res, `Data dengan id ${id} tidak ditemukan`, 404);
    }
    return apiError(res, 'Failed to update data', 500);
  }
};

export const del = async (req: Request, res: Response) => {
  const id = req.params.id.toString(); // ✅ parsing aman

  try {
    await db1.higo.delete({ where: { id } });
    return res.json({ message: 'Data deleted successfully' });
  } catch (error) {
    return apiError(res, 'Failed to delete data', 500);
  }
};
