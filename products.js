// products.js
const products = [
    // --- NIKE FUTSAL ---
    {
        id: "futsal-nike-tiempo-legend-10-academy-ic-xanh",
        name: "NIKE TIEMPO LEGEND 10 ACADEMY IC",
        price: "2,150,000₫",
        description: "Đây là mẫu giày futsal Nike Tiempo Legend 10 Academy IC màu xanh, mang lại sự thoải mái và kiểm soát bóng tối ưu trên sân futsal.",
        imageUrl: "img/GIAY/NIKE TIEMPO LEGEND 10 ACADEMY IC.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet65.png"," img/GIAY/chitietgiay1/chitiet66.png"," img/GIAY/chitietgiay1/chitiet68.png"," img/GIAY/chitietgiay1/chitiet69.png"]
    },
    {
        id: "futsal-nike-lunar-gato-ii-xanh",
        name: "NIKE LUNAR GATO II",
        price: "2,390,000₫",
        description: "Nike Lunar Gato II là mẫu giày futsal huyền thoại, với đệm Lunarlon êm ái và phần Upper bằng da tự nhiên mềm mại, tối ưu cho kỹ thuật và cảm giác bóng.",
        imageUrl: "img/GIAY/NIKE LUNAR GATO II.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet80.png"," img/GIAY/chitietgiay1/chitiet81.png"," img/GIAY/chitietgiay1/chitiet82.png"," img/GIAY/chitietgiay1/chitiet83.png"]
    },
    {
        id: "futsal-nike-tiempo-legend-10-academy-ic-den",
        name: "NIKE TIEMPO LEGEND 10 ACADEMY IC",
        price: "1,790,000₫",
        description: "Phiên bản màu đen của Nike Tiempo Legend 10 Academy IC, mang đến vẻ ngoài cổ điển và hiệu suất ổn định trên mặt sân futsal.",
        imageUrl: "img/GIAY/NIKE TIEMPO LEGEND 10 ACADEMY IC đen.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet85.png"," img/GIAY/chitietgiay1/chitiet86.png"," img/GIAY/chitietgiay1/chitiet88.png"," img/GIAY/chitietgiay1/chitiet89.png"]
    },
    {
        id: "futsal-nike-street-gato-trang-den",
        name: "NIKE STREET GATO",
        price: "1,950,000₫",
        description: "Nike Street Gato là lựa chọn hoàn hảo cho những trận đấu futsal đường phố với thiết kế thời trang và độ bám sân tốt.",
        imageUrl: "img/GIAY/NIKE STREET GATO.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet90.png"," img/GIAY/chitietgiay1/chitiet91.png"," img/GIAY/chitietgiay1/chitiet92.png"," img/GIAY/chitietgiay1/chitiet93.png"]
    },
    {
        id: "futsal-nike-street-gato-vang",
        name: "NIKE STREET GATO",
        price: "1,940,000₫",
        description: "Phiên bản màu vàng nổi bật của Nike Street Gato, mang lại phong cách và hiệu suất cho người chơi futsal.",
        imageUrl: "img/GIAY/NIKE STREET GATO vàng.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet95.png"," img/GIAY/chitietgiay1/chitiet96.png"," img/GIAY/chitietgiay1/chitiet98.png"," img/GIAY/chitietgiay1/chitiet99.png"]
    },
    {
        id: "futsal-nike-tiempo-legend-9-academy-ic-den",
        name: "NIKE TIEMPO LEGEND 9 ACADEMY IC",
        price: "1,850,000₫",
        description: "Mẫu giày Nike Tiempo Legend 9 Academy IC phiên bản trước, vẫn đảm bảo độ bền và cảm giác bóng tốt.",
        imageUrl: "img/GIAY/NIKE TIEMPO LEGEND 9 ACADEMY IC.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet100.png"," img/GIAY/chitietgiay1/chitiet101.png"," img/GIAY/chitietgiay1/chitiet102.png"," img/GIAY/chitietgiay1/chitiet103.png"]
    },
    {
        id: "futsal-nike-tiempo-legend-10-academy-ic-do",
        name: "NIKE TIEMPO LEGEND 10 ACADEMY IC",
        price: "1,790,000₫",
        description: "Màu đỏ rực rỡ của Nike Tiempo Legend 10 Academy IC, mang lại vẻ ngoài nổi bật và hiệu suất ổn định.",
        imageUrl: "img/GIAY/NIKE TIEMPO LEGEND 10 ACADEMY IC đỏ.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet115.png"," img/GIAY/chitietgiay1/chitiet116.png"," img/GIAY/chitietgiay1/chitiet118.png"," img/GIAY/chitietgiay1/chitiet119.png"]
    },
    {
        id: "futsal-nike-street-gato-trang",
        name: "NIKE STREET GATO",
        price: "1,950,000₫",
        description: "Nike Street Gato màu trắng, phong cách và linh hoạt cho mọi trận đấu futsal.",
        imageUrl: "img/GIAY/NIKE STREET GATO trắng.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet120.png"," img/GIAY/chitietgiay1/chitiet121.png"," img/GIAY/chitietgiay1/chitiet122.png"," img/GIAY/chitietgiay1/chitiet123.png"]
    },
    {
        id: "futsal-nike-street-gato-kem",
        name: "NIKE STREET GATO",
        price: "1,850,000₫",
        description: "Phiên bản màu kem của Nike Street Gato, mang lại vẻ ngoài độc đáo và thoải mái khi chơi bóng.",
        imageUrl: "img/GIAY/NIKE STREET GATO kem.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet124.png"," img/GIAY/chitietgiay1/chitiet125.png"," img/GIAY/chitietgiay1/chitiet126.png"," img/GIAY/chitietgiay1/chitiet127.png"]
    },
    {
        id: "futsal-nike-react-tiempo-legend-9-pro-ic",
        name: "NIKE REACT TIEMPO LEGEND 9 PRO IC",
        price: "2,190,000₫",
        description: "Nike React Tiempo Legend 9 Pro IC với công nghệ React mang lại khả năng đệm êm ái và phản hồi tốt.",
        imageUrl: "img/GIAY/NIKE REACT TIEMPO LEGEND 9 PRO IC.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet128.png"," img/GIAY/chitietgiay1/chitiet129.png"," img/GIAY/chitietgiay1/chitiet130.png"," img/GIAY/chitietgiay1/chitiet131.png"]
    },
    {
        id: "futsal-NIKE STREET GATO",
        name: "NIKE STREET GATO",
        price: "1,790,000₫",
        description: "NIKE STREET GATO với công nghệ GATO mang lại khả năng đệm êm ái và phản hồi tốt.",
        imageUrl: "img/GIAY/NIKE STREET GATO đen.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet105.png"," img/GIAY/chitietgiay1/chitiet106.png"," img/GIAY/chitietgiay1/chitiet108.png"," img/GIAY/chitietgiay1/chitiet109.png"]
    },
    {
        id: "futsal-NIKE TIEMPO LEGEND 9 ACADEMY IC",
        name: "NIKE TIEMPO LEGEND 9 ACADEMY IC",
        price: "1,750,000₫",
        description: "NIKE TIEMPO LEGEND 9 ACADEMY IC với công nghệ ACADEMY IC mang lại khả năng đệm êm ái và phản hồi tốt.",
        imageUrl: "img/GIAY/NIKE TIEMPO LEGEND 9 ACADEMY IC trắng.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet110.png"," img/GIAY/chitietgiay1/chitiet111.png"," img/GIAY/chitietgiay1/chitiet112.png"," img/GIAY/chitietgiay1/chitiet113.png"]
    },
    {
        id: "futsal-NIKE STREET GATO đỏ",
        name: "NIKE STREET GATO",
        price: "1,850,000₫",
        description: "NIKE STREET GATO với công nghệ GATO mang lại khả năng đệm êm ái và phản hồi tốt.",
        imageUrl: "img/GIAY/NIKE STREET GATO đỏ.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet132.png"," img/GIAY/chitietgiay1/chitiet133.png"," img/GIAY/chitietgiay1/chitiet134.png"," img/GIAY/chitietgiay1/chitiet135.png"]
    },
    {
        id: "futsal-NIKE STREET GATO ngựa",
        name: "NIKE STREET GATO",
        price: "1,690,000₫",
        description: "NIKE STREET GATO với công nghệ GATO mang lại khả năng đệm êm ái và phản hồi tốt.",
        imageUrl: "img/GIAY/NIKE STREET GATO ngựa.png",
        category: "futsal",
        detailImages: ["img/GIAY/chitietgiay1/chitiet136.png"," img/GIAY/chitietgiay1/chitiet137.png"," img/GIAY/chitietgiay1/chitiet138.png"," img/GIAY/chitietgiay1/chitiet139.png"]
    },

    // --- NIKE CỎ NHÂN TẠO ---
    {
        id: "conhantao-nike-zoom-mercurial-vapor-16-academy-tf",
        name: "NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY TF",
        price: "1,990,000₫",
        description: "Giày sân cỏ nhân tạo Nike Zoom Mercurial Vapor 16 Academy TF, thiết kế cho tốc độ và khả năng bứt tốc tuyệt vời.",
        imageUrl: "img/GIAYCONHANTAO/NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet4.png", "img/GIAYCONHANTAO/chitietgiay/chitiet5.png", " img/GIAYCONHANTAO/chitietgiay/chitiet6.png", " img/GIAYCONHANTAO/chitietgiay/chitiet7.png"]
    },
    {
        id: "conhantao-nike-zoom-mercurial-vapor-16-academy-km-tf",
        name: "NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY KM TF",
        price: "1,990,000₫",
        description: "Phiên bản đặc biệt KM của Nike Zoom Mercurial Vapor 16 Academy TF, mang lại cảm giác bóng tốt và độ bám sân vượt trội.",
        imageUrl: "img/GIAYCONHANTAO/NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY KM TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet8.png", " img/GIAYCONHANTAO/chitietgiay/chitiet9.png", " img/GIAYCONHANTAO/chitietgiay/chitiet10.png", " img/GIAYCONHANTAO/chitietgiay/chitiet11.png"]
    },
    {
        id: "conhantao-nike-tiempo-legend-10-academy-tf",
        name: "NIKE TIEMPO LEGEND 10 ACADEMY TF",
        price: "1,850,000₫",
        description: "Giày sân cỏ nhân tạo Nike Tiempo Legend 10 Academy TF, kết hợp giữa sự thoải mái và kiểm soát bóng chính xác.",
        imageUrl: "img/GIAYCONHANTAO/NIKE TIEMPO LEGEND 10 ACADEMY TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet12.png", " img/GIAYCONHANTAO/chitietgiay/chitiet13.png", " img/GIAYCONHANTAO/chitietgiay/chitiet14.png", " img/GIAYCONHANTAO/chitietgiay/chitiet15.png"]
    },
    {
        id: "conhantao-nike-phantom-gx-2-pro-tf",
        name: "NIKE PHANTOM GX 2 PRO TF",
        price: "2,850,000₫",
        description: "Nike Phantom GX 2 Pro TF, được thiết kế cho những cầu thủ sáng tạo, mang lại cảm giác bóng vượt trội và khả năng kiểm soát bóng hoàn hảo.",
        imageUrl: "img/GIAYCONHANTAO/NIKE PHANTOM GX 2 PRO TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet16.png", " img/GIAYCONHANTAO/chitietgiay/chitiet17.png", " img/GIAYCONHANTAO/chitietgiay/chitiet18.png", " img/GIAYCONHANTAO/chitietgiay/chitiet19.png"]
    },
    {
        id: "conhantao-NIKE-ZOOM-MERCURIAL-VAPOR-16-ACADEMY-TF",
        name: "NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY TF",
        price: "1,850,000₫",
        description: "NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY TF, được thiết kế cho những cầu thủ sáng tạo, mang lại cảm giác bóng vượt trội và khả năng kiểm soát bóng hoàn hảo.",
        imageUrl: "img/GIAYCONHANTAO/NIKE ZOOM MERCURIAL VAPOR 16 ACADEMY TF xanh.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet20.png", " img/GIAYCONHANTAO/chitietgiay/chitiet21.png", " img/GIAYCONHANTAO/chitietgiay/chitiet22.png", " img/GIAYCONHANTAO/chitietgiay/chitiet23.png"]
    },
    {
        id: "conhantao-nike-phantom-gx-2-academy-nu1-tf",
        name: "NIKE PHANTOM GX 2 ACADEMY NU1 TF",
        price: "2,050,000₫",
        description: "Phiên bản Academy của Nike Phantom GX 2 TF, với thiết kế mới và hiệu suất ổn định trên sân cỏ nhân tạo.",
        imageUrl: "img/GIAYCONHANTAO/NIKE PHANTOM GX 2 ACADEMY NU1 TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet25.png", " img/GIAYCONHANTAO/chitietgiay/chitiet26.png", " img/GIAYCONHANTAO/chitietgiay/chitiet28.png", " img/GIAYCONHANTAO/chitietgiay/chitiet29.png"]
    },
    {
        id: "NIKE ZOOM MERCURIAL VAPOR 16 PRO TF blue",
        name: "NIKE ZOOM MERCURIAL VAPOR 16 PRO TF",
        price: "2,550,000₫",
        description: "Phiên bản Academy của NIKE ZOOM MERCURIAL VAPOR 16 PRO TF blue, với thiết kế mới và hiệu suất ổn định trên sân cỏ nhân tạo.",
        imageUrl: "img/GIAYCONHANTAO/NIKE ZOOM MERCURIAL VAPOR 16 PRO TF blue.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet30.png", " img/GIAYCONHANTAO/chitietgiay/chitiet31.png", " img/GIAYCONHANTAO/chitietgiay/chitiet32.png", " img/GIAYCONHANTAO/chitietgiay/chitiet33.png"]
    },//
    {
        id: "conhantao-nike-phantom-gx-2-academy-tf-eh",
        name: "NIKE PHANTOM GX 2 ACADEMY TF EH",
        price: "2,050,000₫",
        description: "Nike Phantom GX 2 Academy TF EH, mang lại sự thoải mái và độ bền cao cho những trận đấu cường độ cao.",
        imageUrl: "img/GIAYCONHANTAO/NIKE PHANTOM GX 2 ACADEMY TF EH.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet35.png", " img/GIAYCONHANTAO/chitietgiay/chitiet36.png", " img/GIAYCONHANTAO/chitietgiay/chitiet38.png", " img/GIAYCONHANTAO/chitietgiay/chitiet39.png"]
    },
    {
        id: "conhantao-nike-zoom-mercurial-vapor-16-pro-tf",
        name: "NIKE ZOOM MERCURIAL VAPOR 16 PRO TF",
        price: "2,750,000₫",
        description: "Phiên bản Pro của Nike Zoom Mercurial Vapor 16 TF, với công nghệ tiên tiến mang lại cảm giác bóng vượt trội và tốc độ bùng nổ.",
        imageUrl: "img/GIAYCONHANTAO/NIKE ZOOM MERCURIAL VAPOR 16 PRO TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet50.png", " img/GIAYCONHANTAO/chitietgiay/chitiet51.png", " img/GIAYCONHANTAO/chitietgiay/chitiet52.png", " img/GIAYCONHANTAO/chitietgiay/chitiet53.png"]
    },
    {
        id: "conhantao-nike-react-phantom-gx-2-pro-tf",
        name: "NIKE REACT PHANTOM GX 2 PRO TF",
        price: "2,550,000₫",
        description: "Nike React Phantom GX 2 Pro TF kết hợp công nghệ React êm ái với cảm giác bóng tuyệt vời của dòng Phantom.",
        imageUrl: "img/GIAYCONHANTAO/NIKE REACT PHANTOM GX 2 PRO TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet55.png", " img/GIAYCONHANTAO/chitietgiay/chitiet56.png", " img/GIAYCONHANTAO/chitietgiay/chitiet58.png", " img/GIAYCONHANTAO/chitietgiay/chitiet59.png"]
    },
    {
        id: "conhantao-NIKE-PHANTOM-6-LOW-PRO-TF",
        name: "NIKE PHANTOM 6 LOW PRO TF",
        price: "2,850,000₫",
        description: "NIKE PHANTOM 6 LOW PRO TF, được thiết kế cho tốc độ bùng nổ trên sân cỏ tự nhiên, với công nghệ PRO đặc trưng.",
        imageUrl: "img/GIAYCONHANTAO/NIKE PHANTOM 6 LOW PRO TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet.png", "img/GIAYCONHANTAO/chitietgiay/chitiet1.png", "img/GIAYCONHANTAO/chitietgiay/chitiet2.png", "img/GIAYCONHANTAO/chitietgiay/chitiet3.png" //
        ]
    },
    {
        id: "conhantaoNIKE TIEMPO LEGEND 10 PRO TF",
        name: "NIKE TIEMPO LEGEND 10 PRO TF",
        price: "2,590,000₫",
        description: "NIKE TIEMPO LEGEND 10 PRO TF, được thiết kế cho tốc độ bùng nổ trên sân cỏ tự nhiên, với công nghệ PRO đặc trưng.",
        imageUrl: "img/GIAYCONHANTAO/NIKE TIEMPO LEGEND 10 PRO TF.png",
        category: "conhan-tao",
        detailImages: ["img/GIAYCONHANTAO/chitietgiay/chitiet60.png", "img/GIAYCONHANTAO/chitietgiay/chitiet61.png","img/GIAYCONHANTAO/chitietgiay/chitiet62.png", " img/GIAYCONHANTAO/chitietgiay/chitiet63.png" //
        ]
    },

    // --- NIKE CỎ TỰ NHIÊN ---
    {
        id: "cotunhien-nike-phantom-gx-ii-elite-ag",
        name: "Giày đá bóng Nike Phantom GX II Elite AG",
        price: "5,590,000₫",
        description: "Phiên bản Elite AG của Nike Phantom GX II, tối ưu cho sân cỏ nhân tạo thế hệ mới, mang lại độ bám và cảm giác bóng hoàn hảo.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Phantom GX II Elite AG.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet140.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet141.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet142.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet143.png"]
    },
    {
        id: "cotunhien-nike-air-zoom-mercurial-vapor-16-elite-fg-do",
        name: "Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Elite FG",
        price: "5,790,000₫",
        description: "Nike Air Zoom Mercurial Vapor 16 Elite FG, được thiết kế cho tốc độ bùng nổ trên sân cỏ tự nhiên, với công nghệ Zoom Air đặc trưng.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Elite FG.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet144.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet145.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet146.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet147.png"]
    },
    {
        id: "cotunhien-nike-air-zoom-mercurial-vapor-16-elite-fg-xanh",
        name: "Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Elite FG",
        price: "5,490,000₫",
        description: "Phiên bản màu xanh của Nike Air Zoom Mercurial Vapor 16 Elite FG, mang lại sự kết hợp hoàn hảo giữa tốc độ và kiểm soát.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Elite FG xanh.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet148.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet149.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet150.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet151.png"]
    },
    {
        id: "cotunhien-nike-phantom-gx-ii-elite-fg",
        name: "Giày đá bóng Nike Phantom GX II Elite FG",
        price: "5,590,000₫",
        description: "Nike Phantom GX II Elite FG, với thiết kế tiên tiến cho những pha xử lý bóng tinh tế và kiểm soát vượt trội trên sân cỏ tự nhiên.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Phantom GX II Elite FG.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet152.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet153.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet154.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet155.png"]
    },
    {
        id: "cotunhien-Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Pro AG",
        name: "Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Pro AG",
        price: "3,490,000₫",
        description: "Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Pro AG, với thiết kế tiên tiến cho những pha xử lý bóng tinh tế và kiểm soát vượt trội trên sân cỏ tự nhiên.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Pro AG.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet156.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet157.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet158.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet159.png"]
    },
    {
        id: "cotunhien-Giày đá bóng Nike Tiempo Legend 10 Elite FG",
        name: "Giày đá bóng Nike Tiempo Legend 10 Elite FG",
        price: "4,990,000₫",
        description: "Giày đá bóng Nike Tiempo Legend 10 Elite FG   , với chất liệu cao cấp và cảm giác bóng tuyệt vời, dành cho sân cỏ tự nhiên.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Tiempo Legend 10 Elite FG .png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet160.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet161.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet162.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet163.png"]
    },
    {
        id: "cotunhien-nike-tiempo-legend-10-elite-fg-xanh",
        name: "Giày bóng đá Nike Tiempo Legend 10 Elite FG",
        price: "4,890,000₫",
        description: "Nike Tiempo Legend 10 Elite FG, với chất liệu cao cấp và cảm giác bóng tuyệt vời, dành cho sân cỏ tự nhiên.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày bóng đá Nike Tiempo Legend 10 Elite FG.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet164.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet165.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet166.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet167.png"]
    },
    {
        id: "cotunhien-nike-tiempo-legend-10-elite-fg-do",
        name: "Giày đá bóng Nike Tiempo Legend 10 Elite FG",
        price: "4,990,000₫",
        description: "Màu đỏ của Nike Tiempo Legend 10 Elite FG, mang lại sự nổi bật và hiệu suất đáng tin cậy trên sân cỏ tự nhiên.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Tiempo Legend 10 Elite FG.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet168.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet169.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet170.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet171.png"]
    },
    {
        id: "cotunhien-nike-phantom-gx-ii-elite-fg-tim",
        name: "Giày đá bóng Nike Phantom GX II Elite FG",
        price: "5,390,000₫",
        description: "Phiên bản màu tím của Nike Phantom GX II Elite FG, với thiết kế độc đáo và khả năng kiểm soát bóng ấn tượng.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Phantom GX II Elite FG tím.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet172.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet173.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet174.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet175.png"]
    },
    {
        id: "cotunhien-nike-air-zoom-mercurial-vapor-16-elite-fg-tim",
        name: "Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Elite FG",
        price: "5,490,000₫",
        description: "Nike Air Zoom Mercurial Vapor 16 Elite FG màu tím, mang lại sự kết hợp hoàn hảo giữa tốc độ, kiểm soát và phong cách.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Air Zoom Mercurial Vapor 16 Elite FG tím.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet176.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet177.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet178.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet179.png"]
    },
    {
        id: "cotunhien-Giày đá bóng Nike Phantom GX II Elite FG ngựa",
        name: "cotunhien-Giày đá bóng Nike Phantom GX II Elite FG",
        price: "5,390,000₫",
        description: "cotunhien-Giày đá bóng Nike Phantom GX II Elite FG, mang lại sự kết hợp hoàn hảo giữa tốc độ, kiểm soát và phong cách.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Phantom GX II Elite FG ngựa.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet180.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet181.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet182.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet183.png"]
    },
    {
        id: "cotunhien-Giày đá bóng Nike Phantom GX II Elite FG limited",
        name: "Giày đá bóng Nike Phantom GX II Elite FG",
        price: "5,390,000₫",
        description: "Giày đá bóng Nike Phantom GX II Elite FG, với thiết kế độc đáo và khả năng kiểm soát bóng ấn tượng.",
        imageUrl: "img/GIAYCOTUNHIEN/Giày đá bóng Nike Phantom GX II Elite FG limited.png",
        category: "co-tu-nhien",
        detailImages: ["img/GIAYCOTUNHIEN/chitiet2/chitiet184.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet185.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet186.png"," img/GIAYCOTUNHIEN/chitiet2/chitiet187.png"]
    }
];