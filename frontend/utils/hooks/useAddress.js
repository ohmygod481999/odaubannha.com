import React from 'react'

function useAddress(city) {

    const addressMapping = {
        "Hà Nội": [
            "Quận Hai Bà Trưng",
            "Quận Ba Đình",
            "Quận Hoàn Kiếm",
            "Quận Bắc Từ Liêm",
            "Quận Cầu Giấy",
            "Quận Đống Đa",
            "Quận Hà Đông",
            "Quận Hoàng Mai",
            "Quận Long Biên",
            "Quận Nam Từ Liêm",
            "Quận Tây Hồ",
            "Quận Thanh Xuân",

            "Thị xã Sơn Tây",

            "Huyện Ba Vì",
            "Huyện Chương Mỹ",
            "Huyện Đan Phượng",
            "Huyện Đông Anh",
            "Huyện Gia Lâm",
            "Huyện Hoài Đức",
            "Huyện Mê Linh",
            "Huyện Mỹ Đức",
            "Huyện Phú Xuyên",
            "Huyện Phúc Thọ",
            "Huyện Quốc Oai",
            "Huyện Sóc Sơn",
            "Huyện Thạch Thất",
            "Huyện Thanh Oai",
            "Huyện Thanh Trì",
            "Huyện Thường Tín",
            "Huyện Ứng Hòa",
        ],
        "Sài Gòn": [
            "Quận 1",
            "Quận 12",
            "Quận Thủ Đức",
            "Quận 9",
            "Quận Gò Vấp",
            "Quận Bình Thạnh",
            "Quận Tân Bình",
            "Quận Tân Phú",
            "Quận Phú Nhuận",
            "Quận 2",
            "Quận 3",
            "Quận 10",
            "Quận 11",
            "Quận 4",
            "Quận 5",
            "Quận 6",
            "Quận 8",
            "Quận Bình Tân",
            "Quận 7",
            "Huyện Củ Chi",
            "Huyện Hóc Môn",
            "Huyện Bình Chánh",
            "Huyện Nhà Bè",
            "Huyện Cần Giờ",
        ]
    }

    let districts = addressMapping[city] || []

    return [districts]
}

export default useAddress
