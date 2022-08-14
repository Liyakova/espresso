import tiramisu from './tiramisu.jpeg'
const DataFood = [
    {
        id: 1,
        name: "Творожная запеканка",
        price: 200,
        photo: "https://images.unsplash.com/photo-1570781148825-b9c37b9531e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "без сахара",
    },

    {
        id: 2,
        name: "Панкейки с ягодами",
        price: 300,
        photo: "https://images.unsplash.com/photo-1600326145552-327f74b9c189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "без сахара",
    },

    {
        id: 3,
        name: "Банановый хлеб с орехами",
        price: 280,
        photo: "https://images.unsplash.com/photo-1605974323227-73fd2fff4adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2680&q=80",
        tag: "без сахара",
    },

    {
        id: 4,
        name: "Арахисовое печенье",
        price: 120,
        photo: "https://images.unsplash.com/photo-1564988208918-44ed48c1b236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 5,
        name: "Лимонный торт",
        price: 340,
        photo: "https://images.unsplash.com/photo-1654546518361-eef83e447521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 6,
        name: "Шоколадный фондан",
        price: 400,
        photo: "https://images.unsplash.com/photo-1626079450905-169c3d3b7f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 7,
        name: "Брауни",
        price: 220,
        photo: "https://images.unsplash.com/photo-1639744092433-0e98ca50d5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 8,
        name: "Гранола с йогуртом",
        price: 270,
        photo: "https://images.unsplash.com/photo-1568371676223-7e6fc0fa62b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "без сахара",
    },

    {
        id: 9,
        name: "Сырники",
        price: 320,
        photo: "https://images.unsplash.com/photo-1644398240815-419996e55653?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 10,
        name: "Эклер",
        price: 200,
        photo: "https://images.unsplash.com/photo-1613992258436-7d744cb20893?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        tag: "классика",
    },

    {
        id: 11,
        name: "ПП-конфеты",
        price: 110,
        photo: "https://images.unsplash.com/photo-1591535767372-d20274ed36f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "без сахара",
    },

    {
        id: 12,
        name: "Шоколаный торт",
        price: 300,
        photo: "https://images.unsplash.com/photo-1621868402792-a5c9fa6866a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 13,
        name: "Тирамису",
        price: 250,
        photo: tiramisu,
        tag: "классика",
    },

    {
        id: 14,
        name: "Малиновая тарталетка",
        price: 300,
        photo: "https://images.unsplash.com/photo-1628838617281-065549dd37fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 15,
        name: "Капкейк",
        price: 150,
        photo: "https://images.unsplash.com/photo-1566864399117-22c449669089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        tag: "классика",
    },

    {
        id: 16,
        name: "Макаронс",
        price: 140,
        photo: "https://images.unsplash.com/photo-1599599377756-6c2a54da71d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1154&q=80",
        tag: "классика",
    }
]

export default DataFood;