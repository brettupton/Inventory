const inventoryObjectContainer = [
    {
      itemName: 'AirPods with Charging Case',
      partNumber: 'MV7N2AM/A',
      quantity: 0
    },
    {
      itemName: 'AirPods with Wireless Charging Case',
      partNumber: 'MRXJ2AM/A',
      quantity: 0
    },
    {
      itemName: 'AirPods Pro with Wireless Charging Case',
      partNumber: 'MWP22AM/A',
      quantity: 0
    },
    {
      itemName: 'AirPods Pro with Magsafe Charging Case',
      partNumber: 'MLWK3AM/A',
      quantity: 0
    },
    {
      itemName: 'AirPods (3rd Gen)',
      partNumber: 'MME73AM/A',
      quantity: 0
    },
    {
      itemName: 'AirPods Max w/ Smart Case',
      partNumber: 'MGYH3AM/A',
      quantity: 0
    },
    {
      itemName: 'Wireless Charging Case for AirPods',
      partNumber: 'MR8U2AM/A',
      quantity: 0
    },
    {
      itemName: 'EarPods with Lightning Connector',
      partNumber: 'MMTN2AM/A',
      quantity: 0
    },
    {
      itemName: 'EarPods with 3.5mm',
      partNumber: 'MNHF2AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C to 3.5mm Headphone Jack',
      partNumber: 'MU7E2AM/A',
      quantity: 0
    },
    {
      itemName: 'Lightning to 3.5mm Headphone Jack',
      partNumber: 'MMX62AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C to VGA',
      partNumber: 'MJ1L2AM/A',
      quantity: 0
    },
    {
      itemName: 'Thunderbolt 3 (USB-C) to Thunderbolt 2',
      partNumber: 'MMEL2AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C to SD',
      partNumber: 'MUFG2AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C To Digital AV',
      partNumber: 'MUF82AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C to MagSafe 3',
      partNumber: 'MLYV3AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C Charge Cable (1m)',
      partNumber: 'MM093AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C Charge Cable (2m)',
      partNumber: 'MLL82AM/A',
      quantity: 0
    },
    {
      itemName: 'DNR USB-C to Lightning (1m)',
      partNumber: 'MX0K2AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C to Lightning (1m)',
      partNumber: 'MM0A3AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C to Lightning (2m)',
      partNumber: 'MQGH2AM/A',
      quantity: 0
    },
    {
      itemName: 'Lightning to USB (1m)',
      partNumber: 'MXLY2AM/A',
      quantity: 0
    },
    {
      itemName: 'Lightning to USB (2m)',
      partNumber: 'MD819AM/A',
      quantity: 0
    },
    {
      itemName: '5W Power Adaper',
      partNumber: 'MD810LL/A',
      quantity: 0
    },
    {
      itemName: '12W Power Adapter',
      partNumber: 'MGN03AM/A',
      quantity: 0
    },
    {
      itemName: '20W Power Adapter',
      partNumber: 'MHJA3AM/A',
      quantity: 0
    },
    {
      itemName: 'MagSafe Charger',
      partNumber: 'MHXH3AM/A',
      quantity: 0
    },
    {
      itemName: 'Thundebolt 3 (USB-C)',
      partNumber: 'MQ4H2AM/A',
      quantity: 0
    },
    {
      itemName: 'MagSafe Duo Charger',
      partNumber: 'MHXF3AM/A',
      quantity: 0
    },
    {
      itemName: 'Magnetic Charging Dock',
      partNumber: 'MLDW2AM/A',
      quantity: 0
    },
    {
      itemName: 'Magnetic Charging to USB',
      partNumber: 'MX2E2AM/A',
      quantity: 0
    },
    {
      itemName: 'Magnetic Fast Charging to USB-C',
      partNumber: 'MLWJ3AM/A',
      quantity: 0
    },
    {
      itemName: '45W MagSafe 2 Power Adapter',
      partNumber: 'MD592LL/A',
      quantity: 0
    },
    {
      itemName: '60W MagSafe 2 Power Adapter',
      partNumber: 'MD565LL/A',
      quantity: 0
    },
    {
      itemName: '85W MagSafe 2 Power Adapter',
      partNumber: 'MD506LL/A',
      quantity: 0
    },
    {
      itemName: '45W MagSafe Power Adapter',
      partNumber: 'MC747LL/A',
      quantity: 0
    },
    {
      itemName: '60W MagSafe Power Adapter',
      partNumber: 'MC461LL/A',
      quantity: 0
    },
    {
      itemName: '85W MagSafe Power Adapter',
      partNumber: 'MC556LL/B',
      quantity: 0
    },
    {
      itemName: '30W Power Adapter USB-C',
      partNumber: 'MY1W2AM/A',
      quantity: 0
    },
    {
      itemName: '61W Power Adapter USC-C',
      partNumber: 'MRW22LL/A',
      quantity: 0
    },
    {
      itemName: '67W Power Adapter USB-C',
      partNumber: 'MKU63AM/A',
      quantity: 0
    },
    {
      itemName: '96W Power Adapter USB-C',
      partNumber: 'MX0J2AM/A',
      quantity: 0
    },
    {
      itemName: 'Magic Trackpad',
      partNumber: 'MK2D3AM/A',
      quantity: 0
    },
    {
      itemName: 'Magic Mouse',
      partNumber: 'MK2E3AM/A',
      quantity: 0
    },
    {
      itemName: 'Magic Keyboard Black for 11" iPad',
      partNumber: 'MXQT2LL/A',
      quantity: 0
    },
    {
      itemName: 'Magic Keyboard White for 11" iPad',
      partNumber: 'MJQJ3LL/A',
      quantity: 0
    },
    {
      itemName: 'Smart Keyboard Folio Black ',
      partNumber: 'MXNK2LL/A',
      quantity: 0
    },
    {
      itemName: 'DNR Magic Keyboard',
      partNumber: 'MLA22LL/A',
      quantity: 0
    },
    {
      itemName: 'Smart Keyboard',
      partNumber: 'MX3L2LL/A',
      quantity: 0
    },
    {
      itemName: 'Magic Keyboard',
      partNumber: 'MK2A3LL/A',
      quantity: 0
    },
    {
      itemName: 'Magic Keyboard w/ Number Pad',
      partNumber: 'MQ052LL/A',
      quantity: 0
    },
    {
      itemName: 'World Travel Adapter KIt',
      partNumber: 'MD837AM/A',
      quantity: 0
    },
    {
      itemName: 'Power Adapter Extension Cable',
      partNumber: 'MK122LL/A',
      quantity: 0
    },
    {
      itemName: 'Magic Keyboard Black for 12.9" iPad',
      partNumber: 'MJQK3LL/A',
      quantity: 0
    },
    {
      itemName: 'Magic Keyboard White for 12.9" iPad',
      partNumber: 'MJQL3LL/A',
      quantity: 0
    },
    {
      itemName: 'Smart Keyboard Folio Black for 12.9" iPad',
      partNumber: 'MXNL2LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Pencil ',
      partNumber: 'MK0C2AM/A',
      quantity: 0
    },
    {
      itemName: 'Apple Pencil 2nd Gen',
      partNumber: 'MU8F2AM/A',
      quantity: 0
    },
    {
      itemName: 'Apple Pencil Tips',
      partNumber: 'MLUN2AM/A',
      quantity: 0
    },
    {
      itemName: 'iPad mini Smart Cover Black',
      partNumber: 'MVQD2ZM/A',
      quantity: 0
    },
    {
      itemName: 'iPad mini Smart Cover Pink',
      partNumber: 'MVQF2ZM/A',
      quantity: 0
    },
    {
      itemName: 'iPad Smart Cover 9.7" Blue',
      partNumber: 'MQ4P2ZM/A',
      quantity: 0
    },
    {
      itemName: 'iPad Smart Cover 9.7" Pink',
      partNumber: 'MQ4Q2ZM/A',
      quantity: 0
    },
    {
      itemName: 'iPad Smar Cover Pink',
      partNumber: 'MVQ42ZM/A',
      quantity: 0
    },
    {
      itemName: 'Thunderbolt to FireWire Adapter ',
      partNumber: 'MD464LL/A',
      quantity: 0
    },
    {
      itemName: 'Lightning to Digital AV',
      partNumber: 'MD826AM/A',
      quantity: 0
    },
    {
      itemName: 'USB-C to USB Adapter',
      partNumber: 'MJ1M2AM/A',
      quantity: 0
    },
    {
      itemName: 'MagSafe to MagSafe 2 Converter',
      partNumber: 'MD504LL/A',
      quantity: 0
    },
    {
      itemName: '30-pin to USB Cable',
      partNumber: ' MA591G/C',
      quantity: 0
    },
    {
      itemName: 'Lightning to USB 3 Camera Adapter',
      partNumber: 'MK0W2AM/A',
      quantity: 0
    },
    {
      itemName: 'Lightning to VGA Adapter',
      partNumber: 'MD825AM/A',
      quantity: 0
    },
    {
      itemName: 'AirTag (1 pack)',
      partNumber: 'MX532AM/A',
      quantity: 0
    },
    {
      itemName: 'AirTag (4 pack)',
      partNumber: 'MX542AM/A',
      quantity: 0
    },
    {
      itemName: 'HomePod Mini (Yellow)',
      partNumber: 'MJ2E3LL/A',
      quantity: 0
    },
    {
      itemName: 'HomePod Mini (Blue)',
      partNumber: 'MJ2C3LL/A',
      quantity: 0
    },
    {
      itemName: 'HomePod Mini (Orange)',
      partNumber: 'MJ2D3LL/A',
      quantity: 0
    },
    {
      itemName: 'HomePod Mini (White)',
      partNumber: 'MY5H2LL/A',
      quantity: 0
    },
    {
      itemName: 'HomePod Mini (Space Gray)',
      partNumber: 'MY5G2LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple TV HD 32GB',
      partNumber: 'MHY93LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple TV 4K HDR 32GB',
      partNumber: 'MXGY2LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple TV 4K HDR 64GB',
      partNumber: 'MXH02LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 3 GPS 42mm/Case Silver Aluminum Sport Band White',
      partNumber: 'MTF22LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch SE GPS 44mm/Case Silver Aluminum Sport Band Abyss Blue ',
      partNumber: 'MKQ43LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch SE GPS 44mm/Case Gold Aluminum Sport Band Starlight',
      partNumber: 'MKQ53LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch SE GPS 44mm/Case Space Gray Aluminum Sport Band Midnight',
      partNumber: 'MKQ63LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 41mm/Case Green Aluminum Sport Band Clover',
      partNumber: 'MKN03LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 45mm/Case Green Aluminum Sport Band Clover',
      partNumber: 'MKN73LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 41mm/Case Blue Aluminum Sport Band Blue Abyss',
      partNumber: 'MKN13LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 45mm/Case Blue Aluminum Sport Band Blue Abyss',
      partNumber: 'MKN83LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 41mm/Case Midnight Aluminum Sport Midnight',
      partNumber: 'MKMX3LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 45mm/Case Midnight Aluminum Sport Band Midnight',
      partNumber: 'MKN53LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 41mm/Case Starlight Aluminum Sport Band Starlight',
      partNumber: 'MKMY3LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 45mm/Case Starlight Aluminum Sport Band Starlight',
      partNumber: 'MKN63LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 41mm/Case (PRODUCT) Red Aluminum Sport Band Red',
      partNumber: 'MKN93LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 45mm/Case (PRODUCT) Red Aluminum Sport Band Red',
      partNumber: 'MKN23LL/A',
      quantity: 0
    },
    {
      itemName: 'Mac Mini M1/8GB/256GB Silver',
      partNumber: 'MGNR3LL/A',
      quantity: 0
    },
    {
      itemName: 'Mac Mini i5/8GB/512GB Space Gray',
      partNumber: 'MXNG2LL/A',
      quantity: 0
    },
    {
      itemName: 'Mac Mini M1/8GB/512GB Silver',
      partNumber: 'MGNT3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 64GB Wi-FI Pink',
      partNumber: 'MLWL3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 256GB Wi-FI Pink',
      partNumber: 'MLWR3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 64GB Wi-FI Starlight',
      partNumber: 'MK7P3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 256GB Wi-FI Starlight',
      partNumber: 'MK7V3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 64GB Wi-FI Purple',
      partNumber: 'MK7R3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 256GB Wi-FI Purple',
      partNumber: 'MK7X3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 64GB Wi-FI Space Gray',
      partNumber: 'MK7M3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Mini (6th Gen) 256GB Wi-FI Space Gray',
      partNumber: 'MK7T3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad (9th Gen) 64GB Wi-F Silver',
      partNumber: 'MK2L3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad (9th Gen) 256GB Wi-Fi Space Gray',
      partNumber: 'MK2N3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 64GB Sky Blue Wi-Fi+Cellualr',
      partNumber: 'MYJ12LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 64GB Sky Blue Wi-Fi',
      partNumber: 'MYFQ2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 256GB Sky Blue Wi-Fi',
      partNumber: 'MYFY2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 64GB Green Wi-Fi',
      partNumber: 'MYFR2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 256GB Sky Blue Wi-Fi',
      partNumber: 'MYG02LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 64GB Space Gray Wi-Fi',
      partNumber: 'MYFM2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 256GB Space Gray Wi-Fi',
      partNumber: 'MYFT2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 64GB Rose Gold Wi-Fi',
      partNumber: 'MYFP2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 256GB Rose Gold Wi-Fi',
      partNumber: 'MYFX2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 64GB Silver Wi-Fi',
      partNumber: 'MYFN2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Air (4th Gen) 256GB Silver Wi-Fi',
      partNumber: 'MYFW2LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 128GB Space Gray',
      partNumber: 'MHQR3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 256GB Space Gray',
      partNumber: 'MHQU3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 512GB Space Gray',
      partNumber: 'MHQW3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 1TB Space Gray',
      partNumber: 'MHQY3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 128GB Silver',
      partNumber: 'MHQT3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 256GB Silver',
      partNumber: 'MHQV3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 512GB Silver',
      partNumber: 'MHQX3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi 1TB Silver',
      partNumber: 'MHR03LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 128GB Space Gray',
      partNumber: 'MHNF3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 256GB Space Gray',
      partNumber: 'MHNH3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 512GB Space Gray',
      partNumber: 'MHNK3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 1TB Space Gray',
      partNumber: 'MHNM3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 128GB Silver',
      partNumber: 'MHNG3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 256GB Silver',
      partNumber: 'MHNJ3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 512GB Silver',
      partNumber: 'MHNL3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 12" Wi-Fi 1TB Silver',
      partNumber: 'MHNN3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Air M1/8GB/256 Space Gray',
      partNumber: 'MGN63LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Air M1/8GB/256 Silver',
      partNumber: 'MGN93LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Air M1/8GB/256 Gold',
      partNumber: 'MGND3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Air M1/8GB/512GB Space Gray',
      partNumber: 'MGN73LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Air M1/8GB/512GB Silver',
      partNumber: 'MGNA3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Air M1/8GB/512GB Gold',
      partNumber: 'MGNE3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 13" M1/8GB/256GB Space Gray',
      partNumber: 'MYD82LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 13" M1/8GB/512GB Space Gray',
      partNumber: 'MYD92LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 13" M1/8GB/512GB Silver',
      partNumber: 'MYDC2LL/A',
      quantity: 0
    },
    {
      itemName: 'Custom MBP 13 8C 8C 256GB SG',
      partNumber: 'Z11B',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 14" M1/16GB/512GB Space Gray',
      partNumber: 'MKGP3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 14" M1/16GB/1TB Silver',
      partNumber: 'MKGT3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 14" M1/16GB/1TB Space Gray',
      partNumber: 'MKGQ3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 14" M1/16GB/512GB Silver',
      partNumber: 'MKGR3LL/A',
      quantity: 0
    },
    {
      itemName: '(CUSTOM) MacBook Pro 14" M1 Pro 16GB/512GB Space Gray',
      partNumber: 'Z15G',
      quantity: 0
    },
    {
      itemName: 'DNR MacBook Pro 16" 2.3GHz i9/16GB/1TB Silver',
      partNumber: 'MVVM2LL/A',
      quantity: 0
    },
    {
      itemName: 'DNR MacBook Pro 16" 2.3GHz i9/16GB/1TB Space Gray ',
      partNumber: 'MVVK2LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 16" M1 Pro/16GB/512GB Space Gray',
      partNumber: 'MK183LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 16" M1 Pro/16GB/512GB Silver',
      partNumber: 'MK1E3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 16" M1 Pro/16GB/1TB Space Gray',
      partNumber: 'MK193LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 16" M1 Pro/16GB/1TB Silver',
      partNumber: 'MK1F3LL/A',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 16" M1 MAX/32GB/1TB Space Gray',
      partNumber: 'MK1A3LL/A',
      quantity: 0
    },
    {
      itemName: '(CUSTOM) MacBook Pro 16" M1 MAX/32GB/1TB Space Gray',
      partNumber: 'Z14V',
      quantity: 0
    },
    {
      itemName: 'MacBook Pro 16" M1 MAX/32GB/1TB Silver',
      partNumber: 'MK1H3LL/A',
      quantity: 0
    },
    {
      itemName: '24" iMac 4.5K Display M1 8C 8C 256GB Blue',
      partNumber: 'MGPK3LL/A',
      quantity: 0
    },
    {
      itemName: '2020 27" iMac 3.8GHz 8 core 10th Gen i7 512GB',
      partNumber: 'MXWV2LL/A',
      quantity: 0
    },
    {
      itemName: '2021 27" iMac 3.3GHz 6 core 10th Gen i5 512GB',
      partNumber: 'MXWU2LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS+Cellular 45mm/Case Midnight Aluminum Sport Band Midnight',
      partNumber: 'MKJ73LL/A',
      quantity: 0
    },
    {
      itemName: 'Apple Watch Series 7 GPS 45mm/Case Blue Aluminum Sport Band Blue Abyss',
      partNumber: 'MKJA3LL/A',
      quantity: 0
    },
    {
      itemName: 'iPad Pro 11" Wi-Fi+ Cellular 2TB Space Gray',
      partNumber: 'MHN23LL/A',
      quantity: 0
    },
    {
      itemName: 'Custom Mac Mini M1 8 core cpu | 8 core gpu 256GB SSD',
      partNumber: 'Z12N',
      quantity: 0
    },
    {
      itemName: '24" iMac 4.5K Display M1 8C 8C 512GB Blue',
      partNumber: 'MGPL3LL/A',
      quantity: 0
    },
    {
      itemName: '24" iMac 4.5K Display M1 8C 8C Purple',
      partNumber: 'Z130',
      quantity: 0
    }
]

export default inventoryObjectContainer;