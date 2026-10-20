/**
 * CẤU HÌNH TĨNH CHO THIỆP 20/10 (LOCAL & AUTO-DEPLOY ENGINE)
 * ==============================================================================
 * File này hứng các placeholder __VARIABLE__ được sinh tự động từ Builder khi triển khai.
 * Đồng thời định nghĩa các giá trị fallback an toàn khi chạy thử cục bộ.
 */

const parseStr = (val, fallback) => {
  if (typeof val === 'string' && !val.startsWith('__') && val.trim().length > 0) return val;
  return fallback;
};

const parseBool = (val, fallback) => {
  if (val === true || val === "true") return true;
  if (val === false || val === "false") return false;
  return fallback;
};

// Cố gắng parse các danh sách mảng được inject bởi Auto Deploy
let rawFlyingTexts = null;
try { rawFlyingTexts = ["Chúc em luôn vui vẻ và hạnh phúc","Chúc em luôn xinh đẹp","Chúc em luôn yêu đời","Chúc mừng ngày phụ nữ Việt Nam 20/10","Yêu em nhiều","Chúc em thật nhiều may mắn","Mong mọi điều dịu dàng sẽ đến với em"]; } catch (e) { rawFlyingTexts = null; }

let rawBouquetImages = null;
try { rawBouquetImages = ["./assets/user_bouquet_images_0.jpg"]; } catch (e) { rawBouquetImages = null; }

let rawFlyingImages = null;
try { rawFlyingImages = ["./assets/user_flying_images_0.jpg","./assets/user_flying_images_1.jpg"]; } catch (e) { rawFlyingImages = null; }

const defaultLetterText = `Gửi cô gái bé nhỏ của anh\n\nAnh chúc em ngày 20/10 lúc nào cũng xinh đẹp, may mắn, nhiều sức khỏe và lúc nào cũng vui vẻ. Anh mong rằng em sẽ đồng hành cùng anh trên chặng đường phía trước.\nCảm ơn em vì tất cả. 🫶\nAnh yêu em bé của anh.`;

window.GIFT_CONFIG = {
  productType: "photobouquet",

  // Thông tin bức thư và phong bì
  letter: {
    // 3 dòng chữ in trên phong bì thư
    envelope: {
      topLine: parseStr(`Dành tặng em`, "Dành tặng em"),
      headline: parseStr(`20/10`, "20/10"),
      bottomLine: parseStr(`Một chút yêu thương`, "Một chút yêu thương")
    },
    // Nội dung bức thư bên trong
    text: parseStr(`Gửi cô gái bé nhỏ của anh
Anh chúc em ngày 20/10 lúc nào cũng xinh đẹp, may mắn, nhiều sức khỏe và lúc nào cũng vui vẻ. Anh mong rằng em sẽ đồng hành cùng anh trên chặng đường phía trước.
Cảm ơn em vì tất cả. 🫶
Anh yêu em bé của anh.`, defaultLetterText),
    // Ảnh kỷ niệm bên trong thư
    photo: parseStr(`./assets/user_letter_photo.jpg`, "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80")
  },

  // Danh sách các câu chúc bay lơ lửng trên màn hình 3D
  flyingTexts: (Array.isArray(rawFlyingTexts) && rawFlyingTexts.length > 0) ? rawFlyingTexts : [
    "Chúc em luôn vui vẻ và hạnh phúc",
    "Chúc em luôn xinh đẹp",
    "Chúc em luôn yêu đời",
    "Chúc mừng ngày phụ nữ Việt Nam 20/10",
    "Yêu em nhiều",
    "Chúc em thật nhiều may mắn",
    "Mong mọi điều dịu dàng sẽ đến với em"
  ],

  // 6 ảnh gắn trên bó hoa (dùng ảnh người dùng upload hoặc mẫu hoa tình yêu chất lượng cao)
  bouquetImages: (Array.isArray(rawBouquetImages) && rawBouquetImages.length > 0 && rawBouquetImages[0]) ? rawBouquetImages : [
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513201099705-a9742e15a5b6?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80"
  ],

  // Hiệu ứng cắt bo viền hoa cho 6 ảnh bó hoa
  bouquetCutouts: [true, true, true, true, true, true],

  // Danh sách các ảnh bay trên không gian 3D
  flyingImages: (Array.isArray(rawFlyingImages) && rawFlyingImages.length > 0 && rawFlyingImages[0]) ? rawFlyingImages : [
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513201099705-a9742e15a5b6?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80"
  ],

  // Đường dẫn nhạc nền (File MP3 tình yêu lãng mạn mặc định trên CDN tốc độ cao)
  bgMusic: parseStr(`./assets/user_bg_music.mp3`, "https://pub-b20e97fa235346679eb882246abe5bed.r2.dev/musics/danhchoem.mp3"),

  // Tông màu chủ đạo: 'hong' (hồng chuyển sắc) | 'hongdon' (hồng tươi) | 'vang' (vàng nắng)
  palette: parseStr(`hongdon`, "hongdon"),

  // Bật/tắt các hiệu ứng
  enableRain: parseBool(`true`, true),
  enableLetter: parseBool(`true`, true),
  flyingHearts: parseBool(`true`, true),
  showWatermark: false
};
