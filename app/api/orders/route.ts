import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// File path for storing orders locally
const ORDERS_FILE = path.join(process.cwd(), "orders.json");

// Load orders from file
const loadOrders = () => {
  try {
    if (fs.existsSync(ORDERS_FILE)) {
      const data = fs.readFileSync(ORDERS_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading orders:", error);
  }
  return [];
};

// Save orders to file
const saveOrders = (orders: any[]) => {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
  } catch (error) {
    console.error("Error saving orders:", error);
  }
};

// Initialize orders
let orders: any[] = loadOrders();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Add timestamp and ID
    const order = {
      id: Date.now().toString(),
      ...body,
      submittedAt: new Date().toISOString(),
      status: "pending",
    };

    // Store the order
    orders.push(order);

    // Save to file
    saveOrders(orders);

    // Log the submission
    console.log("New order submitted:", order);

    return NextResponse.json({
      success: true,
      message: "Narudžba uspješno poslana!",
      orderId: order.id,
    });
  } catch (error) {
    console.error("Error submitting order:", error);
    return NextResponse.json(
      { success: false, message: "Greška pri slanju narudžbe" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Reload orders from file to get latest data
    orders = loadOrders();

    // Return all orders
    return NextResponse.json({
      success: true,
      orders: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { success: false, message: "Greška pri dohvatanju narudžbi" },
      { status: 500 }
    );
  }
}
