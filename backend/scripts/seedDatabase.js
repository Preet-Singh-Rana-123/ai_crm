require("dotenv").config();

const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const Customer = require("../src/models/Customer");
const Order = require("../src/models/Order");
const Segment = require("../src/models/Segment");
const Campaign = require("../src/models/Campaign");
const Communication = require("../src/models/Communication");

const cities = [
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Pune",
    "Chennai",
    "Kolkata",
    "Noida",
];

const products = [
    "Espresso",
    "Latte",
    "Cappuccino",
    "Cold Brew",
    "Coffee Beans",
    "French Press",
    "Travel Mug",
    "Mocha",
    "Iced Coffee",
];

function buildQuery(rules) {
    const query = {};

    for (const condition of rules.conditions) {
        const { field, operator, value } = condition;

        switch (operator) {
            case ">":
                query[field] = { $gt: value };
                break;

            case "<":
                query[field] = { $lt: value };
                break;

            case ">=":
                query[field] = { $gte: value };
                break;

            case "<=":
                query[field] = { $lte: value };
                break;

            case "=":
                query[field] = value;
                break;
        }
    }

    return query;
}

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Connected to MongoDB");

        await Promise.all([
            Customer.deleteMany({}),
            Order.deleteMany({}),
            Segment.deleteMany({}),
            Campaign.deleteMany({}),
            Communication.deleteMany({}),
        ]);

        console.log("Old data deleted");

        //--------------------------------
        // CUSTOMERS
        //--------------------------------

        const customers = [];

        for (let i = 0; i < 1000; i++) {
            const orderCount = faker.number.int({
                min: 1,
                max: 15,
            });

            const avgOrderValue = faker.number.int({
                min: 300,
                max: 1500,
            });

            const totalSpent = orderCount * avgOrderValue;

            const lastPurchaseDate = faker.date.recent({
                days: 120,
            });

            const daysInactive = Math.floor(
                (Date.now() - lastPurchaseDate.getTime()) /
                    (1000 * 60 * 60 * 24),
            );

            const tags = [];

            if (totalSpent > 15000) tags.push("vip");

            if (orderCount > 10) tags.push("frequent-buyer");

            if (daysInactive > 60) tags.push("inactive");

            customers.push({
                name: faker.person.fullName(),

                email: faker.internet.email(),

                phone: faker.string.numeric(10),

                city: faker.helpers.arrayElement(cities),

                totalSpent,

                orderCount,

                lastPurchaseDate,

                tags,
            });
        }

        const savedCustomers = await Customer.insertMany(customers);

        console.log(`${savedCustomers.length} customers inserted`);

        //--------------------------------
        // ORDERS
        //--------------------------------

        const orders = [];

        for (const customer of savedCustomers) {
            for (let i = 0; i < customer.orderCount; i++) {
                orders.push({
                    customerId: customer._id,

                    amount: faker.number.int({
                        min: 300,
                        max: 1500,
                    }),

                    products: [faker.helpers.arrayElement(products)],

                    orderDate: faker.date.recent({
                        days: 120,
                    }),
                });
            }
        }

        const savedOrders = await Order.insertMany(orders);

        console.log(`${savedOrders.length} orders inserted`);

        //--------------------------------
        // SEGMENTS
        //--------------------------------

        const segments = [
            {
                name: "VIP Customers",

                rules: {
                    conditions: [
                        {
                            field: "totalSpent",

                            operator: ">",

                            value: 15000,
                        },
                    ],
                },
            },

            {
                name: "Frequent Buyers",

                rules: {
                    conditions: [
                        {
                            field: "orderCount",

                            operator: ">",

                            value: 10,
                        },
                    ],
                },
            },

            {
                name: "High Value Customers",

                rules: {
                    conditions: [
                        {
                            field: "totalSpent",

                            operator: ">",

                            value: 5000,
                        },
                    ],
                },
            },

            {
                name: "Delhi Customers",

                rules: {
                    conditions: [
                        {
                            field: "city",

                            operator: "=",

                            value: "Delhi",
                        },
                    ],
                },
            },

            {
                name: "Mumbai Customers",

                rules: {
                    conditions: [
                        {
                            field: "city",

                            operator: "=",

                            value: "Mumbai",
                        },
                    ],
                },
            },
        ];

        const segmentDocs = [];

        for (const segment of segments) {
            const query = buildQuery(segment.rules);

            const audienceSize = await Customer.countDocuments(query);

            segmentDocs.push({
                ...segment,

                audienceSize,
            });
        }

        const savedSegments = await Segment.insertMany(segmentDocs);

        console.log(`${savedSegments.length} segments inserted`);

        //--------------------------------
        // CAMPAIGNS
        //--------------------------------

        const campaigns = [];

        const messages = [
            "Hey {{name}}, enjoy 20% OFF on your next purchase!",
            "Special rewards await you, {{name}}!",
            "We miss you {{name}}, come back today.",
            "Exclusive offer just for you {{name}}!",
        ];

        for (const segment of savedSegments) {
            const sent = segment.audienceSize;

            const delivered = Math.floor(sent * 0.92);

            const opened = Math.floor(delivered * 0.72);

            const clicked = Math.floor(opened * 0.25);

            campaigns.push({
                name: segment.name + " Campaign",

                segmentId: segment._id,

                message: faker.helpers.arrayElement(messages),

                channel: faker.helpers.arrayElement([
                    "EMAIL",
                    "SMS",
                    "WHATSAPP",
                    "RCS",
                ]),

                status: "SENT",

                audienceSize: segment.audienceSize,

                stats: {
                    sent,

                    delivered,

                    failed: sent - delivered,

                    opened,

                    clicked,
                },
            });
        }

        const savedCampaigns = await Campaign.insertMany(campaigns);

        console.log(`${savedCampaigns.length} campaigns inserted`);

        //--------------------------------
        // COMMUNICATIONS
        //--------------------------------

        const communications = [];

        for (const campaign of savedCampaigns) {
            const audience = savedCustomers.slice(
                0,
                Math.min(campaign.audienceSize, 500),
            );

            for (const customer of audience) {
                communications.push({
                    campaignId: campaign._id,

                    customerId: customer._id,

                    channel: campaign.channel,

                    status: "SENT",
                });

                if (Math.random() < 0.92) {
                    communications.push({
                        campaignId: campaign._id,

                        customerId: customer._id,

                        channel: campaign.channel,

                        status: "DELIVERED",
                    });

                    if (Math.random() < 0.72) {
                        communications.push({
                            campaignId: campaign._id,

                            customerId: customer._id,

                            channel: campaign.channel,

                            status: "OPENED",
                        });

                        if (Math.random() < 0.25) {
                            communications.push({
                                campaignId: campaign._id,

                                customerId: customer._id,

                                channel: campaign.channel,

                                status: "CLICKED",
                            });
                        }
                    }
                } else {
                    communications.push({
                        campaignId: campaign._id,

                        customerId: customer._id,

                        channel: campaign.channel,

                        status: "FAILED",
                    });
                }
            }
        }

        await Communication.insertMany(communications);

        console.log(`${communications.length} communication events inserted`);

        console.log("Database seeded successfully");

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seedDatabase();
