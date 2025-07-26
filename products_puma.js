// products.js
const products = [
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
    }
];