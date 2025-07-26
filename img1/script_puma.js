// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productNameElement = document.getElementById('product-name');
    const productPriceElement = document.getElementById('product-price');
    const productDescriptionElement = document.getElementById('product-description');
    const productMainImageElement = document.getElementById('product-main-image');
    const productThumbnailsElement = document.getElementById('product-thumbnails');

    const cartIcon = document.getElementById('cart-icon');
    const cartCountSpan = document.querySelector('.cart-count');
    const addToCartButton = document.querySelector('.add-to-cart-button');
    const buyNowButton = document.querySelector('.buy-now-button');
    const shoeSizeSelect = document.getElementById('shoe-size');
    const quantityInput = document.getElementById('quantity');

    const cartModal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.cart-modal-content .close-button');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutButton = document.getElementById('checkout-button');
    const clearCartButton = document.getElementById('clear-cart-button');

    let currentProduct = null; // Biến để lưu thông tin sản phẩm hiện tại

    // --- Hàm tiện ích ---
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // --- Chức năng Giỏ hàng ---
    function getCart() {
        // Lấy giỏ hàng từ localStorage, nếu không có thì trả về mảng rỗng
        const cart = localStorage.getItem('shoppingCart');
        return cart ? JSON.parse(cart) : [];
    }

    function saveCart(cart) {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        updateCartCount(); // Cập nhật số lượng hiển thị trên icon giỏ hàng
    }

    function updateCartCount() {
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountSpan.textContent = totalItems;
        if (totalItems > 0) {
            cartCountSpan.style.display = 'block'; // Hiển thị nếu có sản phẩm
        } else {
            cartCountSpan.style.display = 'none'; // Ẩn nếu không có sản phẩm
        }
    }

    function addItemToCart(productToAdd) {
        const cart = getCart();
        const existingItem = cart.find(item => item.id === productToAdd.id && item.size === productToAdd.size);

        if (existingItem) {
            existingItem.quantity += productToAdd.quantity;
        } else {
            cart.push(productToAdd);
        }
        saveCart(cart);
        alert(`Đã thêm ${productToAdd.quantity} sản phẩm "${productToAdd.name}" (Size: ${productToAdd.size}) vào giỏ hàng.`);
    }

    function removeItemFromCart(productId, productSize) {
        let cart = getCart();
        cart = cart.filter(item => !(item.id === productId && item.size === productSize));
        saveCart(cart);
        renderCartItems(); // Cập nhật lại hiển thị giỏ hàng
    }

    function updateItemQuantity(productId, productSize, newQuantity) {
        let cart = getCart();
        const item = cart.find(item => item.id === productId && item.size === productSize);
        if (item) {
            item.quantity = parseInt(newQuantity);
            if (item.quantity <= 0) {
                removeItemFromCart(productId, productSize); // Xóa nếu số lượng bằng 0 hoặc âm
            } else {
                saveCart(cart);
                renderCartItems(); // Cập nhật lại hiển thị giỏ hàng
            }
        }
    }

    function renderCartItems() {
        const cart = getCart();
        cartItemsList.innerHTML = ''; // Xóa các mục cũ
        let totalCartPrice = 0;

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            checkoutButton.disabled = true;
            clearCartButton.disabled = true;
        } else {
            emptyCartMessage.style.display = 'none';
            checkoutButton.disabled = false;
            clearCartButton.disabled = false;
            cart.forEach(item => {
                const itemPrice = parseFloat(item.price.replace(/₫/g, '').replace(/,/g, ''));
                const itemTotalPrice = itemPrice * item.quantity;
                totalCartPrice += itemTotalPrice;

                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <img src="${item.imageUrl}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Size: ${item.size}</p>
                        <p>Giá: ${itemPrice.toLocaleString('vi-VN')}₫</p>
                    </div>
                    <div class="cart-item-controls">
                        <input type="number" value="${item.quantity}" min="1" data-product-id="${item.id}" data-product-size="${item.size}">
                        <button class="remove-item-button" data-product-id="${item.id}" data-product-size="${item.size}">Xóa</button>
                    </div>
                `;
                cartItemsList.appendChild(cartItemDiv);
            });
        }

        cartTotalSpan.textContent = totalCartPrice.toLocaleString('vi-VN') + '₫';

        // Gắn sự kiện cho các nút Xóa và input số lượng
        cartItemsList.querySelectorAll('.remove-item-button').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = event.target.dataset.productId;
                const productSize = event.target.dataset.productSize;
                removeItemFromCart(productId, productSize);
            });
        });

        cartItemsList.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('change', (event) => {
                const productId = event.target.dataset.productId;
                const productSize = event.target.dataset.productSize;
                const newQuantity = event.target.value;
                updateItemQuantity(productId, productSize, newQuantity);
            });
        });
    }

    // --- Xử lý hiển thị chi tiết sản phẩm ---
    const productId = getUrlParameter('id');

    if (productId) {
        // 'products' cần được định nghĩa ở products.js. Đảm bảo products.js được load trước script.js
        const product = products.find(p => p.id === productId);

        if (product) {
            currentProduct = product; // Lưu sản phẩm hiện tại
            productNameElement.textContent = product.name;
            productPriceElement.textContent = product.price;
            productDescriptionElement.textContent = product.description;
            productMainImageElement.src = product.imageUrl;
            productMainImageElement.alt = product.name;

            // Xử lý ảnh thumbnail (nếu có nhiều ảnh chi tiết)
            productThumbnailsElement.innerHTML = ''; // Xóa các ảnh cũ
            // Thêm ảnh chính vào thumbnail đầu tiên
            const mainThumbnail = document.createElement('img');
            mainThumbnail.src = product.imageUrl;
            mainThumbnail.alt = product.name;
            mainThumbnail.classList.add('thumbnail-item', 'active');
            mainThumbnail.addEventListener('click', () => {
                productMainImageElement.src = product.imageUrl;
                updateActiveThumbnail(mainThumbnail);
            });
            productThumbnailsElement.appendChild(mainThumbnail);

            if (product.detailImages && product.detailImages.length > 0) {
                product.detailImages.forEach(imgSrc => {
                    if (imgSrc !== product.imageUrl) { // Tránh trùng lặp ảnh chính
                        const thumbnail = document.createElement('img');
                        thumbnail.src = imgSrc;
                        thumbnail.alt = product.name + ' - Chi tiết';
                        thumbnail.classList.add('thumbnail-item');
                        thumbnail.addEventListener('click', () => {
                            productMainImageElement.src = imgSrc;
                            updateActiveThumbnail(thumbnail);
                        });
                        productThumbnailsElement.appendChild(thumbnail);
                    }
                });
            }

            function updateActiveThumbnail(activeThumbnail) {
                const thumbnails = productThumbnailsElement.querySelectorAll('.thumbnail-item');
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                activeThumbnail.classList.add('active');
            }

        } else {
            productNameElement.textContent = 'Sản phẩm không tìm thấy';
            productPriceElement.textContent = '';
            productDescriptionElement.textContent = 'Xin lỗi, chúng tôi không tìm thấy sản phẩm này.';
            productMainImageElement.src = '';
            productMainImageElement.alt = 'Sản phẩm không tìm thấy';
        }
    } else {
        productNameElement.textContent = 'Vui lòng chọn một sản phẩm';
        productPriceElement.textContent = '';
        productDescriptionElement.textContent = 'Vui lòng quay lại trang danh mục và chọn một sản phẩm để xem chi tiết.';
        productMainImageElement.src = '';
        productMainImageElement.alt = 'Không có sản phẩm';
    }

    // --- Xử lý sự kiện nút ---
    addToCartButton.addEventListener('click', () => {
        const selectedSize = shoeSizeSelect.value;
        const selectedQuantity = parseInt(quantityInput.value);

        if (selectedSize === 'none') {
            alert('Vui lòng chọn size giày!');
            return;
        }
        if (selectedQuantity <= 0 || isNaN(selectedQuantity)) {
            alert('Số lượng phải lớn hơn 0!');
            return;
        }

        if (currentProduct) {
            const itemToAdd = {
                id: currentProduct.id,
                name: currentProduct.name,
                price: currentProduct.price, // Giá vẫn là chuỗi '1,990,000₫'
                imageUrl: currentProduct.imageUrl,
                size: selectedSize,
                quantity: selectedQuantity
            };
            addItemToCart(itemToAdd);
        } else {
            alert('Không có sản phẩm nào được chọn để thêm vào giỏ hàng.');
        }
    });

    buyNowButton.addEventListener('click', () => {
        const selectedSize = shoeSizeSelect.value;
        const selectedQuantity = parseInt(quantityInput.value);

        if (selectedSize === 'none') {
            alert('Vui lòng chọn size giày!');
            return;
        }
        if (selectedQuantity <= 0 || isNaN(selectedQuantity)) {
            alert('Số lượng phải lớn hơn 0!');
            return;
        }

        if (currentProduct) {
            // Đối với "Mua ngay", chúng ta sẽ chuyển hướng trực tiếp đến trang đặt hàng thành công
            // Thông tin sản phẩm có thể được truyền qua URL để hiển thị trên trang thành công
            window.location.href = 'order-success.html?status=direct_buy&product=' + encodeURIComponent(currentProduct.name) + '&size=' + encodeURIComponent(selectedSize) + '&qty=' + encodeURIComponent(selectedQuantity) + '&price=' + encodeURIComponent(currentProduct.price);
        } else {
            alert('Không có sản phẩm nào để mua ngay.');
        }
    });

    // --- Logic hiển thị/ẩn Cart Modal ---
    cartIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ 'a'
        renderCartItems(); // Cập nhật nội dung giỏ hàng trước khi hiển thị
        cartModal.style.display = 'flex'; // Sử dụng flex để căn giữa modal
    });

    closeButton.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // --- Logic các nút trong Cart Modal ---
    checkoutButton.addEventListener('click', () => {
        const cart = getCart();
        if (cart.length > 0) {
            // Lưu thông tin giỏ hàng vào sessionStorage hoặc truyền qua URL nếu cần hiển thị trên trang thành công
            localStorage.setItem('lastOrderCart', JSON.stringify(cart));
            localStorage.removeItem('shoppingCart'); // Xóa giỏ hàng sau khi "thanh toán"
            alert('Đã thanh toán thành công!');
            window.location.href = 'order-success.html?status=checkout_success';
        } else {
            alert('Giỏ hàng của bạn đang trống.');
        }
    });

    clearCartButton.addEventListener('click', () => {
        if (confirm('Bạn có chắc chắn muốn xóa tất cả sản phẩm khỏi giỏ hàng?')) {
            localStorage.removeItem('shoppingCart');
            renderCartItems();
            updateCartCount();
        }
    });

    // Khởi tạo số lượng giỏ hàng khi tải trang
    updateCartCount();
});