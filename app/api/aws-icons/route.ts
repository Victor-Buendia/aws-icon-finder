import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const currentPath = process.cwd();
    const iconsPath = path.join(currentPath, "public/assets");
    const blobs = fs.readdirSync(iconsPath, { recursive: true })
    .map(
        (f, i) => (path.join("assets", f.toString()))
    )
    .filter((f) => (f.endsWith(".png")))
    .filter((f) => (f.includes("/64/")))
    .filter((f) => (!f.includes("5x")))
    return NextResponse.json(
        {
            response: {
                iconsPath: iconsPath,
                blobs: blobs,
            }
        },
        { status: 200 }
    );
}