import { Request, Response } from 'express';
import { db1 } from '../../utils/db1';
import { apiOk, apiError } from '../../tools/common';

export const get = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const gender = req.query.gender as string | undefined;
    const sortBy = (req.query.sortBy as string) || 'id';
    const order = (req.query.order as string) === 'desc' ? 'desc' : 'asc';
    const skip = (page - 1) * limit;
    const currentYear = new Date().getFullYear();

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
      Age: currentYear - item.Age,
    }));
    console.log('ProcessedData sample:', processedData[0]);

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
