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
    },
    // --- PUMA FUTSAL ---
    {
        id: "futsal-PUMA ULTRA 5 IC",
        name: "PUMA ULTRA 5 IC",
        price: "3,000,000₫",
        description: "Đây là mẫu giày futsal Nike Tiempo Legend 10 Academy IC màu xanh, mang lại sự thoải mái và kiểm soát bóng tối ưu trên sân futsal.",
        imageUrl: "img1/puma futsal classic ic.webp",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA ULTRA 5 PRO CAGE IC",
        name: "NIKE LUNAR GATO II",
        price: "3,750,000₫",
        description: "Phần upper được làm từ chất liệu sợi dệt nhẹ, mềm và mỏng với khả năng thích ứng dễ dàng theo form bàn chân người chơi. Trên bề mặt upper là lớp phủ silicon GRIPCONTROL PRO giúp làm tăng độ bám bóng, từ đó nâng cao khả năng kiểm soát bóng của người mang khi rê dắt ở tốc độ cao.",
        imageUrl: "img1/puma ultra tím ic.webp",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA ULTRA ULTIMATE CAGE IC",
        name: "PUMA ULTRA ULTIMATE CAGE IC",
        price: "4,700,000₫",
        description: "Phần upper được làm từ chất liệu sợi dệt nhẹ, mềm và mỏng với khả năng thích ứng dễ dàng theo form bàn chân người chơi. Trên bề mặt upper là lớp phủ silicon GRIPCONTROL PRO giúp làm tăng độ bám bóng, từ đó nâng cao khả năng kiểm soát bóng của người mang khi rê dắt ở tốc độ cao.",
        imageUrl: "img1/puma ultra cam ic.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA ULTRA 1.1 IC",
        name: "PUMA ULTRA 1.1 IC",
        price: "2,500,000₫",
        description: "Phần upper làm từ da tổng hợp được phủ một lớp GripControl làm tăng độ bám bóng và nâng cao khả năng kiểm soát bóng, giúp người chơi có thể chơi bóng ở mọi điều kiện thời tiết.",
        imageUrl: "img1/puma ultra 1.1 đỏ ic.webp",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA FUTURE Z IC",
        name: "PUMA FUTURE Z IC",
        price: "4,500,000₫",
        description: "Dải băng PWRTAPE chính giữa thân giày đã được tinh giản thành hình chữ V, giúp tạo độ ôm chắc chắn cho khu vực mù bàn chân.",
        imageUrl: "img1/puma future 3 màu ic.png",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA ULTRA 5 CARBON IC",
        name: "PUMA ULTRA 5 CARBON IC",
        price: "3,100,000₫",
        description: "Dải băng PWRTAPE chính giữa thân giày đã được tinh giản thành hình chữ V, giúp tạo độ ôm chắc chắn cho khu vực mù bàn chân.",
        imageUrl: "img1/puma ultra xanh chuối ic.webp",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA FUTURE 7 MATCH IC",
        name: "PUMA FUTURE 7 MATCH IC",
        price: "2,500,000₫",
        description: "Màu tím lạnh lùng của PUMA FUTURE 7 MATCH IC, mang lại vẻ ngoài thu hút và hiệu suất ổn định.",
        imageUrl: "img1/puma future futsal xanh tím.webp",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA FUTURE 7.1 MATCH IC",
        name: "PUMA FUTURE 7.1 MATCH IC",
        price: "2,000,000₫",
        description: "Phần upper làm từ da tổng hợp được phủ một lớp GripControl làm tăng độ bám bóng và nâng cao khả năng kiểm soát bóng.",
        imageUrl: "img1/puma future xanh biển ic.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA OG IC",
        name: "PUMA OG IC",
        price: "2,500,000₫",
        description: "Phiên bản cổ điển của PUMA, mang lại vẻ ngoài độc đáo và hoài niệm khi chơi bóng.",
        imageUrl: "img1/puma indoor đen xám ic.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-PUMA FUTURE 7 MATCH IC",
        name: "PUMA FUTURE 7 MATCH IC",
        price: "3,500,000₫",
        description: "Màu trắng thanh thoát của PUMA FUTURE 7 MATCH IC, mang lại vẻ ngoài thu hút và nhanh nhẹn.",
        imageUrl: "img1/puma future 7 trắng ic.jpg",
        category: "futsal",
        detailImages: []
    },

    {
        id: "futsal-PUMA FUTURE 7.4 MATCH IC",
        name: "PUMA FUTURE 7.4 MATCH IC",
        price: "3,500,000₫",
        description: "Màu trắng thanh thoát của PUMA FUTURE 7.4 MATCH IC, mang lại vẻ ngoài thu hút và nhanh nhẹn.",
        imageUrl: "img1/puma future 7 trắng ic.jpg",
        category: "futsal",
        detailImages: []
    },

    {
        id: "futsal-PUMA CLASSIC.1 IC",
        name: "PUMA CLASSIC.1 IC",
        price: "2,500,000₫",
        description: "Phiên bản cổ điển của PUMA, mang lại vẻ ngoài độc đáo và hoài niệm khi chơi bóng.",
        imageUrl: "img1/puma classic ic.webp",
        category: "futsal",
        detailImages: []
    },

    {
        id: "futsal-PUMA CLASSIC.2 IC",
        name: "PUMA CLASSIC.2 IC",
        price: "3,090,000₫",
        description: "Phiên bản cổ điển của PUMA cải tiến từ PUMA CLASSIC.1 IC, mang lại vẻ ngoài độc đáo và hoài niệm khi chơi bóng.",
        imageUrl: "img1/puma indoor.webp",
        category: "futsal",
        detailImages: []
    },

    // --- PUMA CỎ NHÂN TẠO ---
    {
        id: "conhantao-PUMA ULTRA ULTIMATE CAGE TF HỒNG",
        name: "PUMA ULTRA ULTIMATE CAGE TF",
        price: "3,100,000₫",
        description: "Phần upper được làm từ sợi dệt ULTRAWEAVE siêu nhẹ với cấu trúc co giãn 4 chiều giúp giảm trọng lượng và ma sát.",
        imageUrl: "img1/puma ultra hồng tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-PUMA ULTRA ULTIMATE CAGE TF VÀNG",
        name: "PUMA ULTRA ULTIMATE CAGE TF",
        price: "3,700,000₫",
        description: "Phần upper được làm từ sợi dệt ULTRAWEAVE siêu nhẹ với cấu trúc co giãn 4 chiều giúp giảm trọng lượng và ma sát.",
        imageUrl: "img1/puma ultra vàng tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-PUMA ULTRA ULTIMATE CAGE TF XANH MẠ NON",
        name: "PUMA ULTRA ULTIMATE CAGE TF",
        price: "2,700,000₫",
        description: "Phần upper được làm từ sợi dệt ULTRAWEAVE siêu nhẹ với cấu trúc co giãn 4 chiều giúp giảm trọng lượng và ma sát. Công nghệ PWRPRINT Pro ở những điểm tiếp xúc bóng thường xuyên làm tăng độ bám bóng, từ đó nâng cao khả năng kiểm soát bóng của người mang khi rê bóng ở tốc độ cao.",
        imageUrl: "img1/puma ultra xanh mạ non tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-PUMA FUTURE 8 PRO CAGE TF XANH CHUỐI",
        name: "PUMA FUTURE 8 PRO CAGE TF",
        price: "2,850,000₫",
        description: "Phần upper được tạo thành từ sợi dệt LYCRA® mới với khả năng co giãn 4 chiều cực tốt kết hợp với lớp phủ silicon GRIPCONTROL PRO và các đường vân nổi tăng độ ma sát với bóng",
        imageUrl: "img1/puma future xanh chuối tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-PUMA KING PRO TF XANH LÁ",
        name: "PUMA KING PRO TF",
        price: "2,850,000₫",
        description: "Phần upper được làm từ da nhân tạo K-BETTER với độ mềm như da tự nhiên, nhưng mỏng và giữ form tốt hơn trước. Với chất liệu upper hoàn toàn mới này sẽ mang đến sự thoải mái và cảm giác bóng thật chân nhất cho người chơi. Trên khu vực đầu mũi được bọc da lộn giúp tăng độ bền cho đôi giày.",
        imageUrl: "img1/puma king xanh lá tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-PUMA ULTRA 5 PRO CAGE TF ĐEN",
        name: "PUMA ULTRA 5 PRO CAGE TF",
        price: "3,000,000₫",
        description: "Phần upper được làm từ chất liệu sợi dệt nhẹ, mềm và mỏng với khả năng thích ứng dễ dàng theo form bàn chân người chơi. Trên bề mặt upper là lớp phủ silicon GRIPCONTROL PRO giúp làm tăng độ bám bóng, từ đó nâng cao khả năng kiểm soát bóng của người mang khi rê dắt ở tốc độ cao.",
        imageUrl: "img1/puma ultra đen tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-PUMA ULTRA 3.4 TF XÁM CAM",
        name: "PUMA ULTRA 3.4 TF",
        price: "1,590,000₫",
        description: "Phần upper làm từ da tổng hợp được phủ một lớp GripControl làm tăng độ bám bóng và nâng cao khả năng kiểm soát bóng, giúp người chơi có thể chơi bóng ở mọi điều kiện thời tiết.",
        imageUrl: "img1/puma ultra xám cam tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-PUMA ULTRA MATCH TF ĐỎ",
        name: "PUMA ULTRA MATCH TF",
        price: "2,590,000₫",
        description: "Phần upper làm từ da tổng hợp dạng lưới siêu nhẹ, được phủ bên trên lớp GRIP CONTROL làm tăng độ bám bóng và nâng cao khả năng kiểm soát bóng, giúp người chơi có thể chơi bóng ở mọi điều kiện thời tiết.",
        imageUrl: "img1/puma ultra đỏ tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },

    {
        id: "conhantao-PUMA ULTRA ULTIMATE CAGE TF CAM",
        name: "PUMA ULTRA ULTIMATE CAGE TF",
        price: "1,790,000₫",
        description: "Phần upper làm từ da tổng hợp pha sợi dệt siêu nhẹ mang đến cảm giác bóng thật chân nhất cho người mang và bề mặt upper được phủ lớp GRIP CONTROL làm tăng độ bám bóng và nâng cao khả năng kiểm soát bóng.",
        imageUrl: "img1/puma ultra cam tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },

    {
        id: "conhantao-PUMA FUTURE 8 MATCH CREATIVITY TF CAM",
        name: "PUMA FUTURE 8 MATCH CREATIVITY TF",
        price: "1,890,000₫",
        description: "Phần upper được làm từ chất liệu vải mesh mềm, mỏng và nhẹ giúp mang lại cảm giác bóng thật chân nhất cho người chơi và sự kết hợp với lớp phủ GRIPCONTROL và các đường vân nổi tăng độ ma sát với bóng.",
        imageUrl: "img1/puma future cam tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },

    {
        id: "conhantao-PUMA FUTURE 8 MATCH FOREVER TF XANH BIỂN",
        name: "PUMA FUTURE 8 MATCH FOREVER TF",
        price: "2,750,000₫",
        description: "Phần upper được làm từ chất liệu vải mesh mềm, mỏng và nhẹ giúp mang lại cảm giác bóng thật chân nhất cho người chơi và sự kết hợp với lớp phủ GRIPCONTROL và các đường vân nổi tăng độ ma sát với bóng.",
        imageUrl: "img1/puma future xanh biển tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },

    {
        id: "conhantao-PUMA ULTRA ULTIMATE CAGE TF XANH BIỂN ĐẬM",
        name: "PUMA ULTRA ULTIMATE CAGE TF",
        price: "2,550,000₫",
        description: "Phần upper được làm từ sợi dệt ULTRAWEAVE siêu nhẹ với cấu trúc co giãn 4 chiều giúp giảm trọng lượng và ma sát.",
        imageUrl: "img1/puma ultra xanh biển đậm tf.jpg",
        category: "conhan-tao",
        detailImages: []
    },

    // --- PUMA CỎ TỰ NHIÊN ---
    {
        id: "cotunhien-PUMA ULTRA ULTIMATE FG",
        name: "PUMA ULTRA ULTIMATE FG",
        price: "5,500,000₫",
        description: "Phần upper được làm từ chất liệu sợi microfiber mềm mại nhưng không kém phần bền bỉ sẽ mang đến cảm giác bóng tốt nhất cho người chơi. Trên khu vực đầu mũi và má trong giày còn được thiết kế những đường vân hình tam giác làm tăng độ ma sát với bóng, từ đó giúp người chơi dễ dàng rê và kiểm soát bóng tốt hơn.",
        imageUrl: "img1/puma king tím fg.webp",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-PUMA ULTRA MATCH ENERGY FG",
        name: "PUMA ULTRA MATCH ENERGY FG",
        price: "6,000,000₫",
        description: "Phần upper làm từ da tổng hợp dạng lưới siêu nhẹ, được phủ bên trên lớp GRIP CONTROL làm tăng độ bám bóng và nâng cao khả năng kiểm soát bóng, giúp người chơi có thể chơi bóng ở mọi điều kiện thời tiết.",
        imageUrl: "img1/puma ultra neon fg.webp",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-PUMA ULTRA 6 PRO CAGE FG",
        name: "PUMA ULTRA 6 PRO CAGE FG",
        price: "5,000,000₫",
        description: "Phần upper được làm từ chất liệu sợi microfiber mềm mại nhưng không kém phần bền bỉ sẽ mang đến cảm giác bóng tốt nhất cho người chơi. Trên khu vực đầu mũi và má trong giày còn được thiết kế những đường vân hình tam giác làm tăng độ ma sát với bóng, từ đó giúp người chơi dễ dàng rê và kiểm soát bóng tốt hơn.",
        imageUrl: "img1/puma xám hồng fg.webp",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-PUMA ULTRA ULTIMATE CAGE FG",
        name: "PUMA ULTRA ULTIMATE CAGE FG",
        price: "6,000,000₫",
        description: "Trên bề mặt upper được phủ lớp GRIP CONTROL làm tăng độ bám bóng và nâng cao khả năng kiểm soát bóng, giúp người chơi có thể chơi bóng ở mọi điều kiện thời tiết.",
        imageUrl: "img1/puma ultra xanh biển fg.png",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-PUMA ULTRA ULTIMATE 1.1 FG",
        name: "PUMA ULTRA ULTIMATE 1.1 FG",
        price: "4,500,000₫",
        description: "Bên dưới lớp upper là cấu trúc SpeedCage giúp giày không bị mất form sau một thời gian chơi bóng, đồng thời giúp giữ cho bàn chân không bị xô lệch khi chơi bóng ở cường độ cao.",
        imageUrl: "img1/puma ultra đen cam fg.webp",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-PUMA FUTURE 7 MATCH FG",
        name: "PUMA FUTURE 7 MATCH FG",
        price: "7,500,000₫",
        description: "Công nghệ Engineered 3D Texture bao gồm các hạt được in dập nổi ở những khu vực tiếp xúc bóng chủ yếu giúp làm tăng ma sát với bóng. Từ đó tối ưu hóa khả năng chạm và kiểm soát bóng của người mang trong các tình huống xử lý ở tốc độ cao.",
        imageUrl: "img1/puma future trắng fg.jpg",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-PUMA KING ALL BLACK FG",
        name: "PUMA KING ALL BLACK FG",
        price: "4,000,000₫",
        description: "Phiên bản được cải tiến từ đôi giày của các huyền thoại như Maradona, Cruyff, Pele,...",
        imageUrl: "img1/puma king đen xám fg.jpg",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-PUMA FUTURE 7.6 MATCH FG",
        name: "PUMA FUTURE 7.6 MATCH FG",
        price: "7,000,000₫",
        description: "Giữa thân giày là dải thun FUZIONFIT cải tiến có khả năng thích ứng cực tốt với hình dáng bàn chân người mang, đảm bảo sự vừa vặn thoải mái khi mang giày có dây lẫn không dây.",
        imageUrl: "img1/puma future xanh biển fg.webp",
        category: "co-tu-nhien",
        detailImages: []
    },

    {
        id: "cotunhien-PUMA ONE FG",
        name: "PUMA ONE FG",
        price: "4,500,000₫",
        description: "Phần upper được làm từ chất liệu sợi microfiber mềm mại nhưng không kém phần bền bỉ sẽ mang đến cảm giác bóng tốt nhất cho người chơi. Trên khu vực đầu mũi và má trong giày còn được thiết kế những đường vân hình tam giác làm tăng độ ma sát với bóng, từ đó giúp người chơi dễ dàng rê và kiểm soát bóng tốt hơn.",
        imageUrl: "img1/puma king xám fg.jpg",
        category: "co-tu-nhien",
        detailImages: []
    },

    {
        id: "cotunhien-PUMA ULTRA ULTIMATE 1.2 FG",
        name: "PUMA ULTRA ULTIMATE 1.2 FG",
        price: "4,500,000₫",
        description: "Phần upper được làm từ chất liệu sợi microfiber mềm mại nhưng không kém phần bền bỉ sẽ mang đến cảm giác bóng tốt nhất cho người chơi. Trên khu vực đầu mũi và má trong giày còn được thiết kế những đường vân hình tam giác làm tăng độ ma sát với bóng, từ đó giúp người chơi dễ dàng rê và kiểm soát bóng tốt hơn.",
        imageUrl: "img1/puma ultra 1.1 xanh.jpg",
        category: "co-tu-nhien",
        detailImages: []
    },

    {
        id: "cotunhien-PUMA ULTRA CARBON.4 FG",
        name: "PUMA ULTRA CARBON.4 FG",
        price: "8,500,000₫",
        description: "Phần upper được làm từ chất liệu sợi microfiber mềm mại nhưng không kém phần bền bỉ sẽ mang đến cảm giác bóng tốt nhất cho người chơi. Đế giày sử dụng vật liệu CARBON siêu nhẹ và bền bỉ hỗ trợ sức bật cho người chơi.",
        imageUrl: "img1/puma king đen trắng.jpg",
        category: "co-tu-nhien",
        detailImages: []
    },
    
    {
        id: "cotunhien-PUMA ULTRA ULTIMATE PRO FG",
        name: "PUMA ULTRA ULTIMATE PRO FG",
        price: "5,090,000₫",
        description: "Phần upper được làm từ sợi dệt ULTRAWEAVE siêu nhẹ với cấu trúc co giãn 4 chiều giúp giảm trọng lượng và ma sát. Cải tiến lớn nhất trên phiên bản lần này đến từ việc áp dụng công nghệ PWRTAPE bên dưới lớp upper.",
        imageUrl: "img1/puma ultra trắng đỏ fg.webp",
        category: "co-tu-nhien",
        detailImages: []
    },
    // --- ADIDAS FUTSAL ---
    {
        id: "futsal-Adidas-TOP-Sala-Competition-II-IH7684",
        name: "Adidas TOP Sala Competition II - IH7684 - Trắng/Đỏ",
        price: "2,150,000₫",
        description: "Đây là mẫu giày futsal idas TOP Sala Competition II - IH7684, mang lại sự thoải mái và kiểm soát bóng tối ưu trên sân futsal.",
        imageUrl: "img2/giayfutsal/g-futsal-giay-da-bong-adidas-top-sala-competition-ii-ih7684-trang-do-1_9ecce5d82df54b50b3789e8821c1010e_grande.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-Adidas-TOP-Sala-Competition-II-IH7685",
        name: "Adidas TOP Sala Competition II - IH7685 - Vàng Chanh",
        price: "2,150,000₫",
        description: "Mẫu giày đá bóng futsal adidas Top Sala Competition II hứa hẹn sẽ mang đến trải nghiệm chơi bóng hoàn hảo dành cho các Futsalnista!",
        imageUrl: "img2/giayfutsal/futsal-giay-da-bong-adidas-top-sala-competition-ii-ih7685-vang-chanh-1_db10078d420d4bc5a52336a66b235075_grande.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-Adidas-TOP-Sala-Competition-IE7549",
        name: "Adidas TOP Sala Competition - IE7549 - Đỏ bạc đô",
        price: "1,790,000₫",
        description: "ADIDAS TOP SALA COMPETITION thế hệ mới lần này sở hữu cho mình một lớp upper da bê mềm mại, bộ đệm Lightstrike siêu êm ái cùng form giày bè hơn người tiền nhiệm giúp người chơi tự tin bước vào mọi trận đấu!",
        imageUrl: "img2/giayfutsal/ung-futsal-giay-da-bong-adidas-top-sala-competition-ie7549-do-bac-do-1_654909908641442898c5f6367229dc9d_grande.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-Adidas-TOP-Sala-Competition-IE1546",
        name: "Adidas TOP Sala Competition - IE1546 - Đen/Đỏ",
        price: "1,690,000₫",
        description: " ADIDAS TOP SALA COMPETITION thế hệ mới lần này sở hữu cho mình một lớp upper da bê mềm mại, bộ đệm Lightstrike siêu êm ái cùng form giày bè hơn người tiền nhiệm giúp người chơi tự tin bước vào mọi trận đấu!",
        imageUrl: "img2/giayfutsal/giay-da-bong-adidas-top-sala-competition-ie1546-den-do-1_ce7daaa1522a4a45aea4e9c601b8c972_grande.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-Adidas-TOP-Sala-Competition-FZ6123",
        name: "Adidas TOP Sala Competition - FZ6123 - Xanh Hoàng Gia",
        price: "1,690,000₫",
        description: "ADIDAS TOP SALA COMPETITION thế hệ mới lần này sở hữu cho mình một lớp upper da bê mềm mại, bộ đệm Lightstrike siêu êm ái cùng form giày bè hơn người tiền nhiệm giúp người chơi tự tin bước vào mọi trận đấu!",
        imageUrl: "img2/giayfutsal/giay-da-banh-adidas-top-sala-competition-fz6123-xanh-hoang-gia-1_66dc7dbf9f034381b55f0d6a98585e50_grande.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "Adidas-TOP-Sala-Competition-GY9055",
        name: "Adidas TOP Sala Competition - GY9055 - Đen/Trắng",
        price: "1,790,000₫",
        description: "ADIDAS TOP SALA COMPETITION thế hệ mới lần này sở hữu cho mình một lớp upper da bê mềm mại, bộ đệm Lightstrike siêu êm ái cùng form giày bè hơn người tiền nhiệm giúp người chơi tự tin bước vào mọi trận đấu!",
        imageUrl: "img2/giayfutsal/giay-da-banh-adidas-top-sala-competition-gy9055-den-trang-1_6e6524ff698a4dfeb8bb80380c420c5f_grande.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "Adidas-Top-Sala-Competition-IE1545",
        name: "Adidas Top Sala Competition - IE1545 - Đỏ/Trắng",
        price: "2,000,000₫",
        description: " ADIDAS TOP SALA COMPETITION thế hệ mới lần này sở hữu cho mình một lớp upper da bê mềm mại, bộ đệm Lightstrike siêu êm ái cùng form giày bè hơn người tiền nhiệm giúp người chơi tự tin bước vào mọi trận đấu!",
        imageUrl: "img2/giayfutsal/giay-da-bong-adidas-top-sala-competition-ie1546-do-trang-1_fe32cc7d035b43c99c6df7cdd68ef593_master.jpg",
        category: "futsal",
        detailImages: []
    },
    {
        id: "futsal-Adidas-Top-Sala-Comletition-FZ6124",
        name: "Adidas Top Sala Comletition - FZ6124 - Trắng/Xanh",
        price: "1,190,000₫",
        description: "ADIDAS TOP SALA COMPETITION thế hệ mới lần này sở hữu cho mình một lớp upper da bê mềm mại, bộ đệm Lightstrike siêu êm ái cùng form giày bè hơn người tiền nhiệm giúp người chơi tự tin bước vào mọi trận đấu!",
        imageUrl: "img2/giayfutsal/giay-da-banh-adidas-top-sala-competition-fz6123-xanh-hoang-gia-1_66dc7dbf9f034381b55f0d6a98585e50_grande.jpg",
        category: "futsal",
        detailImages: []
    },
    

    // --- ADIDAS CỎ NHÂN TẠO ---
    {
        id: "Adidas-Giày-cỏ-nhân-tạo-Deportivo-III",
        name: "Adidas Giày cỏ nhân tạo Deportivo III- Trắng",
        price: "1,000,000₫",
        description: "Tôn vinh môn thể thao vua với đôi giày đá bóng adidas này. Với thiết kế phù hợp cho sân cỏ nhân tạo, đôi giày này có lưỡi gà đục lỗ và lớp lót mềm mại giúp đôi chân bạn luôn khô thoáng suốt những trận đấu kéo dài.",
        imageUrl: "img2/giayconhantao/deportivo-iii-turf-boots.png",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "Adidas-Giày-cỏ-nhân-tạo-F50-League",
        name: "Adidas Giày cỏ nhân tạo F50 League - Trắng",
        price: "2,440,000₫",
        description: "Khai phá tốc độ để thể hiện trọn vẹn cá tính trên sân cỏ. Cảm nhận nhịp đập tốc độ cùng giày đá bóng adidas F50 – sinh ra để dẫn đầu mọi cuộc đua. ",
        imageUrl: "img2/giayconhantao/f50-league-turf-boots.png",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "Adidas-Giày-cỏ-nhân-tạo-F50-Club",
        name: "Adidas Giày cỏ nhân tạo F50 Club - Trắng/Xanh/Cam",
        price: "1,600,000₫",
        description: "Giày sân cỏ nhân tạo Nike Tiempo Legend 10 Academy TF, kết hợp giữa sự thoải mái và kiểm soát bóng chính xác.",
        imageUrl: "img2/giayconhantao/f50-league-turf-boots.png",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-Adidas-Giày-cỏ-nhân-tạo-F50-Club",
        name: "Adidas Giày cỏ nhân tạo F50 Club - Xanh/Hồng",
        price: "1,600,000₫",
        description: "Bứt phá tốc độ với đôi giày adidas F50 siêu nhẹ chú trọng tốc độ. Đôi giày đá bóng Club này giúp bạn luôn thoải mái khi di chuyển nhờ thân giày Fiberskin nâng đỡ và lưỡi gà đục lỗ. Bên dưới là đế đinh bằng cao su tạo đà cho bạn bứt tốc trên sân cỏ nhân tạo.",
        imageUrl: "img2/giayconhantao/f50-league-turf-boots.avif",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-Adidas-Giày-cỏ-nhân-tạo-F50-League-Messi",
        name: "Adidas Giày cỏ nhân tạo F50 League Messi - Xám/Xanh",
        price: "2,160,000₫",
        description: "Bứt phá tốc độ với đôi giày adidas F50 siêu nhẹ chú trọng tốc độ. Đôi giày đá bóng Club này giúp bạn luôn thoải mái khi di chuyển nhờ thân giày Fiberskin nâng đỡ và lưỡi gà đục lỗ. Bên dưới là đế đinh bằng cao su tạo đà cho bạn bứt tốc trên sân cỏ nhân tạo.",
        imageUrl: "img2/giayconhantao/F50_LEAGUE_TF_J_MESSI_Bac_IH0925_01_00_standard_hover.avif",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "Adidas-Giày-cỏ-nhân-tạo-F50-League",
        name: "Adidas Giày cỏ nhân tạo F50 League - Hồng neon",
        price: "1,440,000₫",
        description: "Giải phóng tốc độ với giày adidas F50. Khai phá tối đa tiềm năng bứt tốc, chuyển động và tốc độ của bạn. Cố định bàn chân nhờ lưỡi gà co giãn, thân giày Fiberskin trên đôi giày đá bóng siêu nhẹ adidas League này có họa tiết Sprintgrid ở phần mũi giày.",
        imageUrl: "img2/giayconhantao/giay-da-bong-turf-f50-league.avif",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-Adidas-Giày-cỏ-nhân-tạo-Deportivo-III",
        name: "Adidas Giày cỏ nhân tạo Deportivo III - Đen",
        price: "2,750,000₫",
        description: "Tôn vinh môn thể thao vua với đôi giày đá bóng adidas này. Với thiết kế phù hợp cho sân cỏ nhân tạo, đôi giày này có lưỡi gà đục lỗ và lớp lót mềm mại giúp đôi chân bạn luôn khô thoáng suốt những trận đấu kéo dài.",
        imageUrl: "img2/giayconhantao/giay-da-bong-turf-deportivo-iii.avif",
        category: "conhan-tao",
        detailImages: []
    },
    {
        id: "conhantao-Adidas Giày cỏ nhân tạo Messi F50 League dành cho trẻ em",
        name: "Adidas Giày cỏ nhân tạo Messi F50 League dành cho trẻ em - Đen/Vàng/Trắng",
        price: "1,190,000₫",
        description: "Tốc độ F50, phong cách Messi. Năm 2024, loạt giày đá bóng adidas dành riêng cho Lionel Messi được thiết kế để bám sát hơn nữa theo nhu cầu của anh. ",
        imageUrl: "img2/giayconhantao/giay-da-bong-turf-messi-f50-league-tre-em.avif",
        category: "conhan-tao",
        detailImages: []
    },

    // --- ADIDAS CỎ TỰ NHIÊN ---
    {
        id: "cotunhien-Adidas-Giày-Firm-Ground-lưỡi-gà-lật-Predator-Elite",
        name: "Adidas Giày Firm Ground lưỡi gà lật Predator Elite - Trắng/Xanh/Đen",
        price: "6,000,000₫",
        description: "Khác biệt nằm ở chỗ: bạn không chỉ nhắm đến bàn thắng, mà biết chắc mình sẽ ghi bàn – với adidas Predator, đôi giày được sinh ra để kiến tạo những pha lập công.",
        imageUrl: "img2/giaycotunhine/logo-puma-section.png",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-Adidas-Giày-cỏ-tự-nhiên-Predator-League",
        name: "Adidas Giày cỏ tự nhiên Predator League - Trắng/Xanh/Đen",
        price: "2,500,000₫",
        description: "Khác biệt nằm ở chỗ: bạn không chỉ nhắm đến bàn thắng, mà biết chắc mình sẽ ghi bàn – với adidas Predator, đôi giày được sinh ra để kiến tạo những pha phá lưới. Giày đá bóng Elite này sở hữu phần thân trên HybridTouch kết hợp cùng các vân cao su Strikeskin được bố trí chiến lược, mang đến cảm giác chạm bóng hoàn hảo trong từng pha xử lý.",
        imageUrl: "img2/giaycotunhine/Giay_DJa_Bong_Cho_San_Co_Tu_Nhien_Predator_Elite_trang_JI1082_HM1.avif",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-Adidas-Giày-Firm/Multi-Ground-Predator-League",
        name: "Adidas Giày Firm/Multi-Ground Predator League- Cam/Trắng",
        price: "2,400,000₫",
        description: "Tự tin ra sân với đôi giày đá bóng adidas Predator Elite giúp bạn ghi bàn. Với các vây cao su Strikeskin được bố trí hợp lý ở phần mũi giày, thân giày HybridTouch linh hoạt giúp bạn chạm bóng hoàn hảo.",
        imageUrl: "img2/giaycotunhine/giay-da-bong-firm-multi-ground-predator-club.avif",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-Adidas-Giày-cỏ-tự-nhiên-Predator-League",
        name: "Adidas Giày cỏ tự nhiên Predator League - Trắng/Cam",
        price: "2,500,000₫",
        description: "Tự tin ra sân với đôi giày đá bóng adidas Predator Elite giúp bạn ghi bàn. Với các vây cao su Strikeskin được bố trí hợp lý và lưỡi gà lật, thân giày HybridTouch linh hoạt giúp bạn chạm bóng hoàn hảo. ",
        imageUrl: "img2/giaycotunhine/Giay_DJa_Bong_Firm_Ground_Predator_Elite_DJo_ID3882_HM1.avif",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-Adidas-Giày-Firm-Ground-F50-Elite",
        name: "Adidas Giày Firm Ground F50 Elite - Gold/Trắng",
        price: "5,800,000₫",
        description: "Khai phá tốc độ để thể hiện chất riêng trên sân cỏ. Cảm nhận nhịp đập tốc độ cùng giày đá bóng adidas F50 – sinh ra để dẫn đầu mọi cuộc đua. Giày đá bóng Elite với thân giày bằng Fibertouch siêu nhẹ, lưỡi giày ôm gọn",
        imageUrl: "img2/giaycotunhine/Giay_DJa_Bong_Cho_San_Co_Tu_Nhien_Predator_Elite_trang_JI1082_HM1.avif",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-Adidas Giày-Firm-Ground-Copa-Purn-3-Elite",
        name: "Adidas Giày Firm Ground Copa Purn 3 Elite - Đen/Trắng",
        price: "5,500,000₫",
        description: "Chơi theo cách của bạn với đôi giày đá bóng adidas Copa Pure 3 Elite mang lại sự thoải mái và cảm giác bóng. Thiết kế ôm vừa vặn theo hình dáng bàn chân kết hợp giữa lưỡi gà adidas PRIMEKNIT, gót giày lót đệm và lót giày OrthoLite® cho cảm giác cố định.",
        imageUrl: "img2/giaycotunhine/Giay_DJa_Bong_Firm_Ground_Copa_Pure_3_Elite_trang_ID9037_HM1.avif",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-Adidas-Giày-Firm-Ground-X-Speedportal.1",
        name: "Adidas Giày Firm Ground X Speedportal.1 - Hồng/Đen",
        price: "3,360,000₫",
        description: "Tâm trí. Cơ thể. Giày. Tất cả kết nối chỉ trong nháy mắt. Hãy mang giày adidas X Speedportal để khai phá tốc độ đa chiều. Nhẹ nhàng và ôm chân, thân giày Speedskin phiên bản nâng cấp của đôi giày đá bóng này có cổ giày adidas PRIMEKNIT co giãn, tấm carbon cố định gót giày và rìa ổn định cho độ ôm chắc chắn khi di chuyển tốc độ cao.",
        imageUrl: "img2/giaycotunhine/giay-da-bong-firm-ground-x-speedportal.1.avif",
        category: "co-tu-nhien",
        detailImages: []
    },
    {
        id: "cotunhien-Adidas-Giày-Firm-Ground-Không-Dây-Predator-Elite",
        name: "Adidas Giày Firm Ground Không Dây Predator Elite - Đen/Trắng/Cam",
        price: "3,360,000₫",
        description: "Giày Predator chỉ hướng đến một mục tiêu: ghi bàn. Được trang bị công nghệ hỗ trợ ghi bàn mới nhất, hãy sẵn sàng phô diễn những cú bóng xoáy, lực sút và khả năng kiểm soát đầy bứt phá.",
        imageUrl: "img2/giaycotunhine/Giay_DJa_Bong_Firm_Ground_Khong_Day_Predator_Elite_DJen_IE1805_HM1.avif",
        category: "co-tu-nhien",
        detailImages: []
    }
];