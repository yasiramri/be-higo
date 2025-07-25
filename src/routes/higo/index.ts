import { Request, Response } from 'express';
import { db1 } from '../../utils/db1';
import { apiOk, apiError } from '../../tools/common';

export const get = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const gender = req.query.gender as string | undefined;
    const sortBy = (req.query.sortBy as string) || 'Age';
    const order = (req.query.order as string) === 'desc' ? 'desc' : 'asc';
    const skip = (page - 1) * limit;

    const data = await db1.higo.findMany({
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
        Location_Type: true,
        Digital_Interest: true,
      },
    });

    const total = await db1.higo.count({
      where: gender ? { gender } : undefined,
    });

    return apiOk(res, {
      page,
      limit,
      total,
      data,
    });
  } catch (error) {
    console.error('Error GET /api/higo:', error);
    return apiError(res, 'Internal Server Error', 500);
  }
};
