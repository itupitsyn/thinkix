import { prisma } from "../../../prisma";
import { OrderFormData } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body: OrderFormData = await req.json();
    const result = await prisma.order.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(result));
  } catch {
    return new NextResponse("", { status: 500 });
  }
};
