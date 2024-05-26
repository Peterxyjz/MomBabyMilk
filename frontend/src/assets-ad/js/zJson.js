const faker = require('faker');
const fs = require('fs');

// Hàm để tạo dữ liệu mẫu cho một đơn hàng
const generateOrder = () => {
    // Tạo địa chỉ ngẫu nhiên ở Việt Nam
    const address = `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, Việt Nam`;

    // Tạo một đơn hàng ngẫu nhiên
    return {
        OrderID: faker.random.number(),
        MemID: faker.random.number(),
        StaffID: faker.random.number(),
        VoucherCode: `VOUCHER${faker.random.number()}`,
        ShipID: faker.random.number(),
        Fullname: `${faker.name.firstName()} ${faker.name.lastName()}`,
        Address: address,
        Phone: `+84 ${faker.phone.phoneNumber()}`,
        Status: faker.random.arrayElement(['pending', 'finish', 'accepted', 'delivering']),
        Mail: faker.internet.email(),
        RequiredDate: faker.date.between('2024-01-01', '2024-12-31').toLocaleDateString(),
        ShippedDate: faker.date.between('2024-01-01', '2024-12-31').toLocaleDateString(),
        OrderDetails: []
    };
};

// Hàm để tạo dữ liệu mẫu cho một chi tiết đơn hàng
const generateOrderDetail = () => {
    const quantity = faker.random.number({ min: 1, max: 3 });
    const price = faker.finance.amount(50000, 100000, 2);
    const totalPrice = (quantity * price).toFixed(2) + ' VND'; // Tính toán tổng giá trị
    return {
        ProdID: faker.random.number(),
        Quantity: quantity,
        Price: price + ' VND',
        TotalPrice: totalPrice
    };
};

// Hàm để tạo dữ liệu mẫu cho một danh sách các đơn hàng với chi tiết đơn hàng
const generateOrdersData = () => {
    const ordersData = [];
    for (let i = 0; i < 10; i++) {
        const order = generateOrder();
        const numDetails = faker.random.number({ min: 1, max: 5 });
        let totalPrice = 0;
        for (let j = 0; j < numDetails; j++) {
            const orderDetail = generateOrderDetail();
            totalPrice += parseFloat(orderDetail.TotalPrice.replace(' VND', ''));
            order.OrderDetails.push(orderDetail);
        }
        order.TotalPrice = totalPrice.toFixed(2) + ' VND'; // Tổng giá trị cho đơn hàng
        ordersData.push(order);
    }
    return ordersData;
};

// Tạo dữ liệu mẫu cho các đơn hàng
const ordersData = generateOrdersData();

// Lưu dữ liệu vào tệp JSON
fs.writeFileSync('Order.json', JSON.stringify(ordersData, null, 2));