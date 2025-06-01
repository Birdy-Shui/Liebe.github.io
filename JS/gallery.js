document.addEventListener("DOMContentLoaded", function () {
    const galleryData = {
      japanese_painting: [
        { src: "image/絡まる.jpg", alt: "karamaru", caption: "絡まる" },
        { src: "image/seimei.jpg", alt: "seimei", caption: "生命は叫び" },
        { src: "image/鳴き.jpg", alt: "naki", caption: "鳴き" },
        { src: "image/湿り.jpg", alt: "tree", caption: "湿り" },
        { src: "image/蹌踉.jpg", alt: "yume", caption: "蹌踉" },
        { src: "image/ゆらゆら.jpg", alt: "ゆらゆら", caption: "ゆらゆら" },
        { src: "image/夢を覆す.jpg", alt: "夢を覆す", caption: "夢を覆す" },
        { src: "image/鼓浪之声.jpg", alt:"鼓浪之声",caption:"鼓浪之声"},
        { src: "image/あわ.jpg", alt: "あわ", caption: "あわ" }
      ],
      water_color: [
        { src: "image/寂寞的夜晚.jpg", alt: "night", caption: "寂しい夜" },
        { src: "image/夜间飞行.jpg", alt: "fly", caption: "夜間飛行" },
        { src: "image/夜间飞行2.jpg", alt: "fly 2", caption: "夜間飛行2" },
        { src: "image/一棵树.jpg", alt: "一棵树", caption: "一棵树" },
        { src: "image/夕烧.jpg", alt: "夕烧", caption: "夕烧" },
        { src: "image/所泽的出口.jpg", alt: "所泽的出口", caption: "所泽的出口" }
      ],
      print: [
        // { src:"image/hanga3.jpg", alt:"3",caption:"3"},
        { src:"image/Primitive_Life2022.jpg", alt:"Primitive_Life2022",caption:"Primitive_Life2022"},
        { src:"image/hanga4.jpg", alt:"4",caption:"4"},
        // { src:"image/nigeteruoyashirazu.jpg", alt:"nigeteruoyashirazu",caption:"nigeteruoyashirazu"},
        { src:"image/lanse.jpg", alt:"lanse",caption:"lanse"},
        { src: "image/原3.jpg", alt: "原3", caption: "原3" },
        { src:"image/留.jpg", alt:"留",caption:"留"},
        { src:"image/niunaihe.jpg", alt:"niunaihe",caption:"niunaihe"},
        { src:"image/mokuhan.jpg", alt:"mokuhan",caption:"mokuhan"},
        { src:"image/torino.jpg", alt:"torino",caption:"torino"}

      ],
      oil_painting: [
        { src:"image/朝の海、廈門Early_Morning_Sea_In_Amoy,2022.jpg", alt:"朝の海",caption:"朝の海"},
        { src:"image/婺源的傍晚,2023.jpg", alt:"婺源的傍晚3",caption:"婺源的傍晚"}
      ],
      something_Else: []
    };
  
    
    function renderGallery(images) {
      const container = document.getElementById("gallery-content");
      container.innerHTML = "";
  
      if (!images || images.length === 0) {
        container.innerHTML = "<p class='text-center'>まだ作品がありません</p>";
        return;
      }
  
      images.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-sm-6 col-lg-4";
        col.innerHTML = `
                <a href="${item.src}" data-fancybox="gallery" data-caption="${item.caption}">
                    <img src="${item.src}" alt="${item.alt}" class="img-fluid" loading="lazy">
                </a>

        `;
        container.appendChild(col);
      });
  
      Fancybox.bind("[data-fancybox]", {
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: ["zoomIn", "zoomOut", "toggle1to1", "rotateCCW", "rotateCW", "flipX", "flipY"],
            right: ["slideshow", "thumbs", "close"]
          }
        }
      });
    }
  
    const initialImages = [
        { src: "image/絡まる.jpg", alt: "karamaru", caption: "絡まる" },
        { src: "image/seimei.jpg", alt: "seimei", caption: "生命は叫び" },
        { src: "image/鳴き.jpg", alt: "naki", caption: "鳴き" },
        { src: "image/寂寞的夜晚.jpg", alt: "night", caption: "寂しい夜" },
        { src: "image/夜间飞行.jpg", alt: "fly", caption: "夜間飛行" },
        { src: "image/夜间飞行2.jpg", alt: "fly 2", caption: "夜間飛行2" },
        { src: "image/湿り.jpg", alt: "tree", caption: "湿り" },
        { src: "image/蹌踉.jpg", alt: "yume", caption: "蹌踉" },
        { src: "image/ゆらゆら.jpg", alt: "ゆらゆら", caption: "ゆらゆら" },
        { src: "image/あわ.jpg", alt: "あわ", caption: "あわ" },
        { src: "image/夢を覆す.jpg", alt: "夢を覆す", caption: "夢を覆す" },
        { src: "image/鼓浪之声.jpg", alt: "鼓浪之声", caption: "鼓浪之声" },
        { src: "image/あわ.jpg", alt: "あわ", caption: "あわ" }
    ];
    renderGallery(initialImages);
  
    
    document.querySelectorAll(".nav-link[data-name]").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const category = link.getAttribute("data-name").toLowerCase();
        const images = galleryData[category];
        renderGallery(images);
  
        const offcanvasEl = document.querySelector(".offcanvas.show");
        if (offcanvasEl) {
          bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
        }
      });
    });
  });
  
